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

module.exports = {
  waitToNavigate,
  expectToBeVisible,
};
