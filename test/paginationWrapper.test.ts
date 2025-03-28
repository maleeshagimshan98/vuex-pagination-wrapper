import { vuexPaginationWrapper } from '../src/vuexPaginationWrapper';
import { Page } from '../src/page';

describe('vuexPaginationWrapper Class', () => {
  let paginationWrapper: vuexPaginationWrapper;

  // 1. Constructor
  test('should initialize with default values', () => {
    paginationWrapper = new vuexPaginationWrapper();
    expect(paginationWrapper.getPageDataObject()).toEqual({
      total: 1,
      current: 1,
      pages: 1,
    });
  });

  test('should initialize with provided data and page', () => {
    const data = { page1: 'data' };
    const page = { total: 10, current: 2, pages: 5 };
    paginationWrapper = new vuexPaginationWrapper(data, page);
    expect(paginationWrapper.getData(2)).toEqual(data);
    expect(paginationWrapper.getPageDataObject()).toEqual(page);
  });

  // 2. _initialisePage
  test('should initialize the Page object correctly', () => {
    paginationWrapper = new vuexPaginationWrapper(undefined, {
      total: 20,
      current: 5,
      pages: 10,
    });
    expect(paginationWrapper.getPageDataObject()).toEqual({
      total: 20,
      current: 5,
      pages: 10,
    });
  });

  test('should create Page with default values if no page data is provided', () => {
    paginationWrapper = new vuexPaginationWrapper();
    expect(paginationWrapper.getPageDataObject()).toEqual({
      total: 1,
      current: 1,
      pages: 1,
    });
  });

  // 3. getPageDataObject
  test('should return correct pagination data', () => {
    const page = { total: 10, current: 3, pages: 5 };
    paginationWrapper = new vuexPaginationWrapper(undefined, page);
    expect(paginationWrapper.getPageDataObject()).toEqual(page);
  });

  test('should return default page data when not set', () => {
    paginationWrapper = new vuexPaginationWrapper();
    expect(paginationWrapper.getPageDataObject()).toEqual({
      total: 1,
      current: 1,
      pages: 1,
    });
  });

  // 4. getCurrentPageNo
  test('should return the correct current page number', () => {
    const page = { total: 10, current: 2, pages: 5 };
    paginationWrapper = new vuexPaginationWrapper(undefined, page);
    expect(paginationWrapper.getCurrentPageNo()).toBe(2);
  });

  test('should return default page number if Page object is not initialized', () => {
    paginationWrapper = new vuexPaginationWrapper();
    expect(paginationWrapper.getCurrentPageNo()).toBe(1); // It defaults to 1 as per the Page class
  });

  // 5. updatePageNo
  test('should update the current page number', () => {
    paginationWrapper = new vuexPaginationWrapper(undefined, {
      total: 10,
      current: 2,
      pages: 5,
    });
    paginationWrapper.updatePageNo(3);
    expect(paginationWrapper.getCurrentPageNo()).toBe(3);
  });

  test('should throw error if page number is invalid', () => {
    paginationWrapper = new vuexPaginationWrapper(undefined, {
      total: 10,
      current: 2,
      pages: 5,
    });
    expect(() => paginationWrapper.updatePageNo(6)).toThrow(
      "Error:Page - 'current' must be equal or below the pages count",
    );
  });

  // 7. setData
  test('should set data for the current page', () => {
    const data = { item1: 'value1' };
    paginationWrapper = new vuexPaginationWrapper();
    paginationWrapper.setData(data, { total: 10, current: 2, pages: 5 });
    expect(paginationWrapper.getData(2)).toEqual(data);
  });

  test('should return self after setting data', () => {
    const data = { item1: 'value1' };
    paginationWrapper = new vuexPaginationWrapper();
    const result = paginationWrapper.setData(data, {
      total: 10,
      current: 2,
      pages: 5,
    });
    expect(result).toBe(paginationWrapper);
  });

  // 8. checkDataExists
  test('should return true if data exists for the specified page', () => {
    const data = { 2: { item1: 'value1' } };
    paginationWrapper = new vuexPaginationWrapper(data, {
      total: 10,
      current: 2,
      pages: 5,
    });
    expect(paginationWrapper.checkDataExists(2)).toBe(true);
  });

  test('should return false if data does not exist for the specified page', () => {
    paginationWrapper = new vuexPaginationWrapper();
    expect(paginationWrapper.checkDataExists(2)).toBe(false);
  });

  // 9. getData
  test('should return the data for the specified page number', () => {
    const data = { item1: 'value1' };
    paginationWrapper = new vuexPaginationWrapper(data, {
      total: 10,
      current: 1,
      pages: 5,
    });
    expect(paginationWrapper.getData(1)).toEqual({ item1: 'value1' });
  });

  test('should throw error if page number exceeds total pages', () => {
    paginationWrapper = new vuexPaginationWrapper(undefined, {
      total: 10,
      current: 1,
      pages: 5,
    });
    expect(() => paginationWrapper.getData(6)).toThrow(
      'Invalid page number, Page number must be equal or lower than 5',
    );
  });
});
