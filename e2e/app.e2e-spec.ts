import { ValaPayPage } from './app.po';

describe('vala-pay App', () => {
  let page: ValaPayPage;

  beforeEach(() => {
    page = new ValaPayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
