define(['crypto', 'validation', 'jQuery'], (crypto, validation) => {
  const { validateMessage } = validation;

  // attach event handler to send button's click()
  $('#send').click(() => {
    const message = $('#message').val();
    
    if(!validateMessage(message)) {
      alert('Empty or invalid Message!  Please retry your input.');
      $('#message').focus();
      return;
    }

    // we're good to process.  send an encrypted message and handle
    // the result.
    crypto.sendEncryptedMessage(message, (err) => {
      const content = err ? 'Failed to send your encrypted message!' :
                            'Successfully sent your encrypted message!';
      alert(content);
    });
  });
});
