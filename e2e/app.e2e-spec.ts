import { AppPage } from './app.po';

describe('angular-todo-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display completed in footer', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Completed');
  });
});
