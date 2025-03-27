/**
 * Copyright - 2021 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */

import { Page, PageData } from './page.js';
import vuexStateWrapper from './vuexStateWrapper.js';

/**
 * wraps state data objects with page data
 */
class vuexPaginationWrapper {
  /**
   * page object
   *
   * @type {Page}
   */
  private _page!: Page;

  /**
   * data object
   *
   * @type {Record<number, unknown>}
   */
  private _data: Record<number, unknown> = {};

  /**
   * constructor
   *
   * @param {Record<number, unknown>} data any object containing data for yur application
   * @param {object} page pagination data
   * @returns self
   */
  constructor(
    data?: Record<number, unknown>,
    page: PageData = { total: 1, pages: 1, current: 1 },
  ) {
    this._data = data ?? {};
    this._initialisePage(page);
    return this;
  }

  /**
   * reset data object
   *
   * @returns {void}
   */
  reset(): void {
    this._data = {};
  }

  /**
   * Convert value to number
   *
   * @param {string|number} value
   * @returns {number}
   * @throws {Error}
   */
  private _convertToNumber(value: string | number): number {
    if (typeof value === 'number') {
      return value;
    } else if (typeof value === 'string') {
      return parseInt(value);
    } else {
      throw new Error('Invalid value type, value must be a number or a string');
    }
  }

  /**
   * initialise page object
   *
   * @param {Page|PageData} page pagination object
   * @returns {void}
   */
  private _initialisePage(page: Page | PageData): void {
    if (page instanceof Page) {
      this._page = page;
      return;
    }
    this._page = new Page(page);
  }

  /**
   * get pagination data object
   * returns page with default values is not set/ not available
   *
   * @returns {PageData}
   */
  getPageDataObject(): PageData {
    return this._page.getPage();
  }

  /**
   * get current page number
   * returns null if page is not set
   *
   * @returns {number}
   */
  getCurrentPageNo(): number {
    return this._page.getCurrentPageNo();
  }

  /**
   * update pagination object's page number
   *
   * @param {number} pageNo - page number
   * @returns {void}
   */
  updatePageNo(pageNo: number): void {
    this._page.setCurrentPageNo(pageNo);
  }

  /**
   * update the whole pagination object
   *
   * @param {PageData} page pagination object
   * @return {void}
   */
  private _setPage(page: PageData): void {
    this._page.setPage(page);
  }

  /**
   * set data for the current page
   *
   * @param {Record<string, unknown>} data data
   * @param {PageData} page page number
   * @returns self
   */
  setData(
    data: Record<string, unknown>,
    page: PageData,
  ): vuexPaginationWrapper {
    this._setPage(page);
    this._data[this._page.getCurrentPageNo()] = data;
    return this;
  }

  /**
   * checks if data for a particular page exists.
   * if exists, return true
   *
   * @param {string|number} page - page number
   * @returns {boolean}
   */
  checkDataExists(page: string | number): boolean {
    /**
     * if page data given, check data available for the given page
     */
    if (page) {
      try {
        this.getData(page);
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * get data
   * if page is set, get the data corresponding to that page number
   * else return the data
   *
   * @param {string|number} pageNo - page number
   * @returns {Record<number, unknown>} data
   * @throws Error
   */
  getData(pageNo: string | number): unknown {
    pageNo = this._convertToNumber(pageNo);
    if (pageNo > this._page.getPagesCount()) {
      throw new Error(
        `Invalid page number, Page number must be equal or lower than ${this._page.getPagesCount()}`,
      );
    }
    return this._data[pageNo];
  }
}

module.exports = vuexPaginationWrapper;
