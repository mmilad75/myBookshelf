/* eslint-disable no-undef */
const {signUpWith} = require('../../actions/signUp');
const {invalidEmailFormatError, userAlreadyExists, weakPassword} = require('../../helpers/constants');
const {generateString, waitToNavigate} = require('../../helpers/functions');
const {authTestId, tabsTestID} = require('../../testIds');

describe('Sign Up Screen', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: {
        detoxDebugVisibility: 'YES',
      },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id(authTestId.signin.goToSignUpScreen)).tap();
  });

  it('shouldn\'t show anything when trying to sign up with empty email or password', async () => {
    await signUpWith('milad@gmail.com', '');
    await expect(element(by.id(authTestId.signUp.textError))).toHaveText('');
  });

  it('should show error when trying to sign up with invalid email format', async () => {
    await signUpWith('milad', 'password');
    await expect(element(by.id(authTestId.signUp.textError))).toHaveText(invalidEmailFormatError);
  });

  it('should show error when trying to sign up with an already using email', async () => {
    const email = 'milad@gmail.com';
    const password = generateString(10, true);

    await signUpWith(email, password);
    await element(by.id(authTestId.signUp.signUpButton)).tap();
    await expect(element(by.id(authTestId.signUp.textError))).toHaveText(userAlreadyExists);
  });

  it('should show error when trying to sign up with a weak password', async () => {
    const email = `${generateString(10)}@gmail.com`;
    const password = '12';

    await signUpWith(email, password);
    await element(by.id(authTestId.signUp.signUpButton)).tap();
    await expect(element(by.id(authTestId.signUp.textError))).toHaveText(weakPassword);
  });

  it('should navigate to Best Sellers screen after successful sign up', async () => {
    const email = `${generateString(10)}@gmail.com`;
    const password = generateString(10, true);

    await signUpWith(email, password);
    await waitToNavigate(2000);
    await expect(element(by.id(tabsTestID.bestSellers.container))).toBeVisible();
  });
});
