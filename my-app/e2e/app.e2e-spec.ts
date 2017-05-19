import { MyAppPage } from './app.po';

describe('my-app App', () => {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display message saying My First Angular App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My First Angular App');
  });
});
