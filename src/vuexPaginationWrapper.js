/**
 * Copyright - 2021 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */


const Page = require("./page.js");
const vuexStateWrapper = require("./vuexStateWrapper.js");

/**
 * wraps state data objects with page data
 */
class vuexPaginationWrapper extends vuexStateWrapper {

  /**
   * constructor
   *
   * @param {object} data any object containing data for yur application
   * @param {object} page pagination data
   * @returns self
   */
  constructor(data = null, page = null) {
    super(data);
    this.initialisePage(page);
    return this;
  }

  /**
   * initialise page object
   *
   * @param {object} page pagination object
   * @returns void
   */
  initialisePage(page = null)
  {
    this.page = page ? new Page(page) : undefined;
  }  

  /**
   * get pagination data object
   * returns null if page is not set/ not available
   *
   * @returns {object|null}
   */
  getPageDataObject()
  {
    return this.page ? this.page.getPage() : null;
  }

  /**
   * get current page number
   * returns null if page is not set
   * 
   * @returns {object|null}
   */
  getCurrentPageNo ()
  {
    return this.page ? this.page.getPageNo() : null;
  }

  /**
   * update pagination object's page number
   * returns null if page is not set
   *
   * @param {String|Number} pageNo - page number
   * @returns {object|null} page data object
   */
  updatePageNo(pageNo = null)
  {
    if (!pageNo || !this.page) {
      return null;
    }
    this.page.setPageNo(pageNo);
    return this.page.getPage();
  }

  /**
   * update pagination object
   * creates a new instance of Page for this.page property
   * is not set
   *
   * @param {object} page pagination object
   * @return void
   */
  setPage(page)
  {
      if (!this.page){
          this.initialisePage(page);
      }
      this.page.setPage(page);
  }

  /**
   * set data for the current page
   *
   * @param {object} data data
   * @param {String|Number} page page number
   * @returns self
   */
  setData(data, page)
  {
    this.setPage(page);
    this.data[this.page.getPageNo()] = data;
    return this;
  }  

  /**
   * get the given page of data
   * 
   * @param {String} pageNo
   * @returns {object|null} 
   */
  getPagedData (pageNo)
  {
    return this.data[pageNo] ?? null;
  }

  /**
   * checks if data for a particular page exists.
   * if exists, return those data. 
   * In case ````page = null```` checks for the data in the first page
   * and if data exists, returns the data. Otherwise return null
   * 
   * @param {String} page - page number
   * @returns {mixed}
   */
  checkDataExists (page = null)
  {
      /**
     * if no page data given, check  data available for
     * the first page, returns null if data not available
     */
    if (!page) {
      return this.getData(1);
    }
    /**
     * if page data given, check data available for the given page
     */
    if (page && this.getData(page)) {
      this.updatePageNo(page);
      return this.getData(page);
    }
  }

  /**
   * get data
   * if page is set, get the data corresponding to that page number
   * else return the data
   *
   * @pram String|Number pageNo - page number
   * @returns {object|null}
   */
  getData(pageNo)
  {
      return this.page ? this.getPagedData(pageNo) : null;
  }
}

module.exports = vuexPaginationWrapper;
