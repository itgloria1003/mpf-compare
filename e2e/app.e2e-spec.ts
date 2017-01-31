import { MpfComparePage } from './app.po';

describe('mpf-compare App', function() {
  let page: MpfComparePage;

  beforeEach(() => {
    page = new MpfComparePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
