const forge = require('node-forge');
const Promise = require('bluebird');

// time to generate a public/private key pair.
// this is an async process so we'll set up a promise.
const pki = forge.pki;
const keyPromise = new Promise((resolve) => {
  pki.rsa.generateKeyPair({bits: 2048, workers: 2}, (err, keyPair) => {
    resolve(keyPair);
  });
});

// return the server's public key in PEM format
const getPublicKeyPem = () => {
  return keyPromise.then((keyPair) => {
    return pki.publicKeyToPem(keyPair.publicKey);
  });
};

// return a decrypted message by using the server's private key
const decrypt = (message) => {
  return keyPromise.then((keyPair) => {
    return keyPair.privateKey.decrypt(message);
  });
};

module.exports = {
  getPublicKeyPem,
  decrypt
};
