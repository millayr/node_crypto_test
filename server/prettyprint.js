// Here be basic helpers to log clean messages

const prettyPrintEncrypted = (encrypted) => {
  console.log('\n---------------------------------------------');
  console.log('New encrypted message received!');
  console.log('Pretty printing as a base64 encoded string...');
  console.log('---------------------------------------------');
  console.log(new Buffer(encrypted).toString('base64'));
};

const prettyPrintDecrypted = (decrypted) => {
  console.log('\n---------------------------');
  console.log('Message has been decrypted!');
  console.log('---------------------------');
  console.log(decrypted);
};

module.exports = {
  prettyPrintEncrypted,
  prettyPrintDecrypted
}
