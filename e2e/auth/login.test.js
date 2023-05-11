const {device, element, by} = require('detox');

describe('Login screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show onboarding screen', async () => {
    await expect(element(by.id('started'))).toBeVisible();
  });

  it('should navigate to the login screen', async () => {
    await element(by.id('get-started')).tap();
    await expect(element(by.id('login-screen'))).toBeVisible();
  });

  it('should show the login screen', async () => {
    await expect(element(by.id('email'))).toBeVisible();
  });

  it('should input email address and password', async () => {
    await element(by.id('email')).typeText('dike4mii4real@gmail.com');
    await element(by.id('password')).typeText('password');
  });

  it('should tap login button and to login', async () => {
    await element(by.id('loginBtn')).tap();
    await expect(element(by.id('home-text'))).toBeVisible();
  });
});
