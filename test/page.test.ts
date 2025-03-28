import { Page } from '../src/page';

describe('Page Class', () => {
  // 1. Constructor Initialization
  test('should initialize with provided values', () => {
    const page = new Page({ total: 50, current: 2, pages: 10 });
    expect(page.getTotalCount()).toBe(50);
    expect(page.getCurrentPageNo()).toBe(2);
    expect(page.getPagesCount()).toBe(10);
  });

  // 2. setTotal Method
  test('should set total when valid value is passed', () => {
    const page = new Page({ total: 10, pages: 1, current: 1 });
    expect(page.getTotalCount()).toBe(10);
  });

  test('should throw error if total is less than or equal to 0', () => {
    expect(() => new Page({ total: 0, pages: 1, current: 1 })).toThrowError(
      "Error:Page - 'total' must be a positive integer",
    );
  });

  // 3. setCurrentPageNo Method
  test('should set the current page number when valid value is passed', () => {
    const page = new Page({ total: 50, pages: 5, current: 3 });
    expect(page.getCurrentPageNo()).toBe(3);
  });

  test('should throw error if current page number exceeds the pages count', () => {
    expect(() => new Page({ total: 50, pages: 5, current: 6 })).toThrowError(
      "Error:Page - 'current' must be equal or below the pages count",
    );
  });

  test('should throw error if current page number is less than or equal to 0', () => {
    expect(() => new Page({ total: 50, pages: 5, current: 0 })).toThrowError(
      "Error:Page - 'current' must be a positive integer",
    );
  });

  // 4. setPagesCount Method
  test('should set pages count when valid value is passed', () => {
    const page = new Page({ total: 50, pages: 5, current: 1 });
    expect(page.getPagesCount()).toBe(5);
  });

  test('should throw error if pages count is less than or equal to 0', () => {
    expect(() => new Page({ total: 10, pages: 0, current: 1 })).toThrowError('Error:Page - page count cannot be 0');
  });

  test('should throw error if pages count is less than current page', () => {
    const page = new Page({ total: 20, pages: 6, current: 6 });
    expect(() => page.setPagesCount(3)).toThrowError(
      'Error:Page - pagesCount must be equal or higher than the current page number - 6',
    );
  });

  // 5. Getters (getTotalCount, getCurrentPageNo, getPagesCount)
  test('should return correct total count', () => {
    const page = new Page({ total: 30, pages: 2, current: 1 });
    expect(page.getTotalCount()).toBe(30);
  });

  test('should return correct current page number', () => {
    const page = new Page({ total: 100, pages: 2, current: 2 });
    expect(page.getCurrentPageNo()).toBe(2);
  });

  test('should return correct pages count', () => {
    const page = new Page({ total: 100, pages: 10, current: 1 });
    expect(page.getPagesCount()).toBe(10);
  });

  // 6. setPage Method
  test('should set all properties using setPage', () => {
    const page = new Page({ total: 10, current: 1, pages: 5 });
    page.setPage({ total: 100, current: 5, pages: 10 });
    expect(page.getTotalCount()).toBe(100);
    expect(page.getCurrentPageNo()).toBe(5);
    expect(page.getPagesCount()).toBe(10);
  });

  // 7. getPage Method
  test('should return correct page object', () => {
    const page = new Page({ total: 100, current: 5, pages: 10 });
    const result = page.getPage();
    expect(result).toEqual({ total: 100, current: 5, pages: 10 });
  });

  // 8. reset Method
  test('should reset total, current, and pages to 1', () => {
    const page = new Page({ total: 100, current: 5, pages: 10 });
    page.reset();
    expect(page.getTotalCount()).toBe(1);
    expect(page.getCurrentPageNo()).toBe(1);
    expect(page.getPagesCount()).toBe(1);
  });
});
