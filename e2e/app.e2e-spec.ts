import { PrjStartPage } from './app.po';

describe('prj-start App', () => {
  let page: PrjStartPage;

  beforeEach(() => {
    page = new PrjStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
