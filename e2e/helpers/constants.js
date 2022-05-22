const invalidEmailFormatError = '[auth/invalid-email] The email address is badly formatted.';
const userNotFoundError = '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.';
const userAlreadyExists = '[auth/email-already-in-use] The email address is already in use by another account.';
const weakPassword = '[auth/weak-password] The given password is invalid.';

module.exports = {
  invalidEmailFormatError,
  userNotFoundError,
  userAlreadyExists,
  weakPassword,
};
