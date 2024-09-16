/**
 * Copyright - 2021 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */

/**
 * A class representing a pagination object
 */
class Page {
  total = 1
  current = 1
  pages = 1

  /**
   * constructor
   *
   * @param {object} page object containing all preperties of the Page object
   * @returns self
   */
  constructor({ total, current, pages }) {
      this.setTotal(total)
      this.setPagesCount(pages)
      this.setCurrentPageNo(current)
  }

    /**
     * setter
     *
     * @param {string | number} currentPageNo
     * @returns {void} void
     */
    set current(currentPageNo) {
      this.setCurrentPageNo(currentPageNo)
    }

    /**
     * setter
     *
     * @param {string | number} pagesCount
     * @returns {void} void
     */
    set pages(pagesCount) {
      this.setPagesCount(pagesCount)
    }

    /**
     * setter
     *
     * @param {string | number} total
     * @returns {void} void
     */
    set total(total) {
      this.setTotal(total)
    }

  /**
   * set page object
   *
   * @param {object} page object containing all preperties of the Page object
   * @returns {Page}
   */
  setPage({ total = 1, current = 1, pages = 1 }) {
    this.setTotal(total)
    this.setPagesCount(pages)
    this.setCurrentPageNo(current)
    return this
  }

  /**
   * get paging object
   *
   * @returns {object}
   */
  getPage() {
    return {
      total: this.total,
      current: this.current,
      pages: this.pages,
    }
  }

  /**
   * get number of totals
   *
   * @returns {String|Number}
   */
  getTotalCount() {
    return this.total
  }

  /**
   * set total number of the results
   *
   * @param {String|Number} total page number
   * @returns {Page}
   * @throws {Error}
   */
  setTotal(total) {
    if (!total) {
      throw new Error(`Error:Page - total number of pages cannot be ${total}`)
    }
    if (total <= 0) {
      throw new Error("Error:Page - total number of results must be equal or above 1")
    }
    this.total = total
    return this
  }

  /**
   * get page number of the page object
   *
   * @returns {String|Number}
   */
  getCurrentPageNo() {
    return this.current
  }

  /**
   * set current page number of the page object
   *
   * @param {String|Number} current page number
   * @returns {Page}
   * @throws {Error}
   */
  setCurrentPageNo(current) {
    if (!this.pages) {
      throw new Error(`Error:Page - this.pages is ${this.pages}. Could not set the current pageNo`)
    }
    if ((this.pages) && (current > this.pages)) {
      throw new Error("Error:Page - page number must be equal or below the pages count")
    }
    if ((this.pages) && (current <= 0)) {
      throw new Error("Error:Page - page number must be equal or above 1")
    }
    this.current = current
    return this
  }

  /**
   * get pages count of the page object
   *
   * @returns {String|Number}
   */
  getPagesCount() {
    return this.pages
  }

  /**
   * set total page count of the page object
   *
   * @param {String|Number} pagesCount pages count
   * @returns {Page}
   * @throws {Error}
   */
  setPagesCount(pagesCount) {
    if (!pagesCount) {
      throw new Error(`Error:Page - page count cannot be ${pagesCount}`)
    }
    if (pagesCount <= 0) {
      throw new Error("Error:Page - pages count must be equal or above 1")
    }
    if (pagesCount < this.current) {
      throw new Error(
        `Error:Page - total number of pages must be equal or higher than the current pageNo of ${this.current}`
      )
    }
    this.pages = pagesCount
    return this
  }

  /**
   * reset page data
   *
   * @returns {void}
   */
  reset() {
    this.total = 1
    this.current = 1
    this.pages = 1
  }
}

module.exports = Page
