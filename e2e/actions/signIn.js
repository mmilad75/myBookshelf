const {authTestId} = require('../testIds');

/* eslint-disable no-undef */
const loginWith = async (email, password) => {
  const emailInput = await element(by.id(authTestId.signin.emailInput));
  const passwordInput = await element(by.id(authTestId.signin.passwordInput));

  await emailInput.tap();
  await emailInput.typeText(email);
  await passwordInput.typeText(password);

  const loginBtn = await element(by.id(authTestId.signin.signinButton));
  await loginBtn.tap();
};

module.exports = {
  loginWith,
};
