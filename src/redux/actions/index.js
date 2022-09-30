// Coloque aqui suas actions
const EMAIL_VALIDATED = 'EMAIL_VALIDATED';

const EmailPayload = (payload) => ({ type: EMAIL_VALIDATED,
  payload });

export {
  EMAIL_VALIDATED,
  EmailPayload,
};
