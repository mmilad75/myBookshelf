const {authTestId} = require('../testIds');

/* eslint-disable no-undef */
const signUpWith = async (email, password) => {
  const emailInput = await element(by.id(authTestId.signUp.emailInput));
  const passwordInput = await element(by.id(authTestId.signUp.passwordInput));

  await emailInput.tap();
  await emailInput.typeText(email);
  await passwordInput.typeText(password);

  const signUpButton = await element(by.id(authTestId.signUp.signUpButton));
  await signUpButton.tap();
};

module.exports = {
  signUpWith,
};
