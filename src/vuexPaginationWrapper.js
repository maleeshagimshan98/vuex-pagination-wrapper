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
  constructor(data = null, page = {total : 1, pages : 1, current : 1}) {
    super(data);
    this._initialisePage(page);
    return this;
  }

  /**
   * initialise page object
   *
   * @param {object} page pagination object
   * @returns {void}
   */
  _initialisePage(page)
  {
    if (page instanceof Page) {
      this.page = page
      return
    }
    this.page = new Page(page)
  }

  /**
   * get pagination data object
   * returns page with default values is not set/ not available
   *
   * @returns {object}
   */
  getPageDataObject()
  {
    return this.page.getPage();
  }

  /**
   * get current page number
   * returns null if page is not set
   * 
   * @returns {String|Number}
   */
  getCurrentPageNo ()
  {
    return this.page.getCurrentPageNo();
  }

  /**
   * update pagination object's page number
   *
   * @param {String|Number} pageNo - page number
   * @returns {void}
   */
  updatePageNo(pageNo)
  {    
    this.page.setCurrentPageNo(pageNo);
  }

  /**
   * update the whole pagination object
   *
   * @param {object} page pagination object
   * @return {void}
   */
  _setPage(page)
  {
    this.page.setPage(page);
  }

  /**
   * set data for the current page
   *
   * @param {object} data data
   * @param {object} page page number
   * @returns self
   */
  setData(data, page)
  {
    this._setPage(page);
    this.data[this.page.getCurrentPageNo()] = data;
    return this;
  }  

  /**
   * checks if data for a particular page exists.
   * if exists, return true 
   * 
   * @param {String|Number} page - page number
   * @returns {Boolean}
   */
  checkDataExists (page = null)
  {      
    /**
     * if page data given, check data available for the given page
     */
    if (page) {
      try {
        this.getData(page);
        return true;
      }
      catch (e) {
        console.error(e)
        return false;
      }      
    }
  }

  /**
   * get data
   * if page is set, get the data corresponding to that page number
   * else return the data
   *
   * @pram String|Number pageNo - page number
   * @returns {object|null}
   * @throws Error
   */
  getData(pageNo)
  {
    if (pageNo > this.page.getPagesCount()) {
      throw new Error(`Invalid page number, Page number must be equal or lower than ${this.page.getPagesCount()}`)
    }
      return this.data[pageNo];
  }
}

module.exports = vuexPaginationWrapper;
