define(() => {
  // basic helper to determine if the message is acceptable.
  // this can be expanded upon if there are other message requirements.
  const validateMessage = (message) => {
    return '' !== message;
  };

  return {
    validateMessage
  };
});