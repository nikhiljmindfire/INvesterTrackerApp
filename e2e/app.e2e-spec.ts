import { InvestorAppPage } from './app.po';

describe('investor-app App', function() {
  let page: InvestorAppPage;

  beforeEach(() => {
    page = new InvestorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
