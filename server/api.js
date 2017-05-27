const pp = require('./prettyPrint.js');

module.exports = (app, keyManagement) => {
  // handler for a GET to /api/key.
  // returns the server's public key in PEM format.
  const sendPublicKey = (req, res) => {
    keyManagement.getPublicKeyPem().then((publicKeyPEM) => {
      res.json({
        publicKey: publicKeyPEM
      });
    });
  };

  // handler for a POST to /api/newMessage.
  // logs the encrypted and decrypted message.
  // returns a success/failure response.
  const newMessage = (req, res) => {
    const encrypted = req.body.message;
    pp.prettyPrintEncrypted(encrypted);

    keyManagement.decrypt(encrypted).then((decrypted) => {
      pp.prettyPrintDecrypted(decrypted);
      res.json({ok: true});
    })
    .catch(() => {
      console.log('Failed to decrypt!');
      res.json({error: 'Failed to decrypt message on server!'});
    });
  };

  // Here be our express endpoints we want to expose
  app.get('/api/key', sendPublicKey);
  app.post('/api/newMessage', newMessage);
};
