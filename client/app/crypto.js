define(['forge', 'wgfetch'], (forge) => {
  // A promise to return the server's public key.
  // This prevents us from asking for the server's
  // public key each subsequent encrypted request.
  const publicKeyPromise = new Promise((resolve) => {
    return fetch('/api/key', {
      headers: {
        'Accept': 'application/json; charset=utf-8'
      }
    })
    .then(res => res.json())
    .then((res) => {
      resolve(res.publicKey);
    });
  });

  // returns an encrypted form of the original message
  // using the server's public key.
  const encryptMessage = (message) => {
    return publicKeyPromise.then((key) => {
      const pki = forge.pki;
      return pki.publicKeyFromPem(key).encrypt(message);
    });
  };

  // Core logic for sending an encrypted message.
  const sendEncryptedMessage = (message, callback) => {
    return encryptMessage(message).then((encrypted) => {
      return fetch('/api/newMessage', {
        method: 'POST',
        body: JSON.stringify({message: encrypted}),
        headers: {
          'Accept': 'application/json; charset=utf-8',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then((res) => {
        callback(!!res.error);
      });
    })
  };

  // only need to expose this one function
  return {
    sendEncryptedMessage
  };
});