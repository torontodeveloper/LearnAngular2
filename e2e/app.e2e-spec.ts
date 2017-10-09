import { LearnAngular2Page } from './app.po';

describe('learn-angular2 App', () => {
  let page: LearnAngular2Page;

  beforeEach(() => {
    page = new LearnAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
