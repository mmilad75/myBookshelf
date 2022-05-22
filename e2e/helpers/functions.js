const waitToNavigate = duration => new Promise(resolve => setTimeout(() => resolve(), duration));

const expectToBeVisible = async id => {
  try {
    await expect(element(by.id(id))).toBeVisible();
    return true;
  } catch (e) {
    console.log('e', e);
    return false;
  }
};

const generateString = (length, includeNumbers = false) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) {
    characters += '0123456789';
  }

  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()
    * charactersLength));
  }

  return result;
};

module.exports = {
  waitToNavigate,
  expectToBeVisible,
  generateString,
};
