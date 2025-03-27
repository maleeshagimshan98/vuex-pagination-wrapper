/**
 * Copyright - 2025 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */

interface PageData {
  total: number;
  current: number;
  pages: number;
}

/**
 * A class representing a pagination object
 */
class Page {
  private _total: number = 1;
  private _current: number = 1;
  private _pages: number = 1;

  /**
   * constructor
   *
   * @param {object} page object containing all preperties of the Page object
   * @returns self
   */
  constructor({ total, current, pages }: PageData) {
    this.setTotal(total);
    this.setPagesCount(pages);
    this.setCurrentPageNo(current);
  }

  /**
   * setter
   *
   * @param {number} currentPageNo
   * @returns {void} void
   */
  set current(currentPageNo: number) {
    this.setCurrentPageNo(currentPageNo);
  }

  /**
   * setter
   *
   * @param {number} pagesCount
   * @returns {void} void
   */
  set pages(pagesCount: number) {
    this.setPagesCount(pagesCount);
  }

  /**
   * setter
   *
   * @param {number} total
   * @returns {void} void
   */
  set total(total: number) {
    this.setTotal(total);
  }

  /**
   * set page object
   *
   * @param {object} page object containing all preperties of the Page object
   * @returns {Page}
   */
  setPage({ total = 1, current = 1, pages = 1 }: PageData): Page {
    this.setTotal(total);
    this.setPagesCount(pages);
    this.setCurrentPageNo(current);
    return this;
  }

  /**
   * get paging object
   *
   * @returns {PageData}
   */
  getPage(): PageData {
    return {
      total: this._total,
      current: this._current,
      pages: this._pages,
    };
  }

  /**
   * get number of totals
   *
   * @returns {number}
   */
  getTotalCount(): number {
    return this._total;
  }

  /**
   * set total number of the results
   *
   * @param {number} total page number
   * @returns {Page}
   * @throws {Error}
   */
  setTotal(total: number): Page {
    if (!total) {
      throw new Error(`Error:Page - 'total' cannot be ${total}`);
    }
    if (total <= 0) {
      throw new Error("Error:Page - 'total' must be a positive integer");
    }
    this._total = total;
    return this;
  }

  /**
   * get page number of the page object
   *
   * @returns {number}
   */
  getCurrentPageNo(): number {
    return this._current;
  }

  /**
   * set current page number of the page object
   *
   * @param {number} current page number
   * @returns {Page}
   * @throws {Error}
   */
  setCurrentPageNo(current: number): Page {
    if (current <= 0) {
      throw new Error("Error:Page - 'current' must be a positive integer");
    }
    if (!this._pages) {
      throw new Error(
        `Error:Page - this.pages is ${this._pages}. Could not set the current page number`,
      );
    }
    if (this._pages && current > this._pages) {
      throw new Error(
        "Error:Page - 'current' must be equal or below the pages count",
      );
    }
    this._current = current;
    return this;
  }

  /**
   * get pages count of the page object
   *
   * @returns {number}
   */
  getPagesCount(): number {
    return this._pages;
  }

  /**
   * set total page count of the page object
   *
   * @param {number} pagesCount pages count
   * @returns {Page}
   * @throws {Error}
   */
  setPagesCount(pagesCount: number): Page {
    if (!pagesCount) {
      throw new Error(`Error:Page - page count cannot be ${pagesCount}`);
    }
    if (pagesCount <= 0) {
      throw new Error("Error:Page - 'pagesCount' must be positive integer");
    }
    if (pagesCount < this._current) {
      throw new Error(
        `Error:Page - pagesCount must be equal or higher than the current page number - ${this._current}`,
      );
    }
    this._pages = pagesCount;
    return this;
  }

  /**
   * reset page data
   *
   * @returns {void}
   */
  reset() {
    this._total = 1;
    this._current = 1;
    this._pages = 1;
  }
}

export { Page, PageData };
