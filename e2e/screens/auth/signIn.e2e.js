/* eslint-disable no-undef */
const {loginWith} = require('../../actions/signIn');
const {invalidEmailFormatError, userNotFoundError} = require('../../helpers/constants');
const {waitToNavigate, expectToBeVisible} = require('../../helpers/functions');
const {tabsTestID, authTestId} = require('../../testIds');

describe('Sign In Screen', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: {
        detoxDebugVisibility: 'YES',
      },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shouldn\'t show anything when trying to login with empty email or password', async () => {
    await loginWith('milad@gmail.com', '');
    await expect(element(by.id(authTestId.signin.textError))).toHaveText('');
  });

  it('should show error when trying to login with invalid email format', async () => {
    await loginWith('milad', 'password');
    await expect(element(by.id(authTestId.signin.textError))).toHaveText(invalidEmailFormatError);
  });

  it('should show error when trying to login with wrong email', async () => {
    await loginWith('milad@gmail.co', '123123123');
    await expect(element(by.id(authTestId.signin.textError))).toHaveText(userNotFoundError);
  });

  it('should navigate to home after successful login', async () => {
    await loginWith('milad@gmail.com', '123123123');
    await waitToNavigate(2000);
    await expect(element(by.id(tabsTestID.bestSellers.container))).toBeVisible();
  });

  it('should sign out if user is logged in', async () => {
    const result = await expectToBeVisible(tabsTestID.items.profile);
    if (result) {
      await element(by.id(tabsTestID.items.profile)).tap();
      await element(by.id(authTestId.signOut.signOutButton)).tap();
      await expect(element(by.id(authTestId.signin.signinButton))).toBeVisible();
    }
  });

  it('should go to Sign Up screen when pressing Go To Sign Up Screen', async () => {
    await element(by.id(authTestId.signin.goToSignUpScreen)).tap();
    await expect(element(by.id(authTestId.signUp.signUpButton))).toBeVisible();
  });
});
