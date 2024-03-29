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
    this._initialisePage(page);
    return this;
  }

  /**
   * initialise page object
   *
   * @param {object} page pagination object
   * @returns void
   */
  _initialisePage(page = null)
  {
    this.page = new Page(page)
  }  

  /**
   * get pagination data object
   * returns null if page is not set/ not available
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
   * @returns {String | Number}
   */
  getCurrentPageNo ()
  {
    return this.page.getPageNo();
  }

  /**
   * update pagination object's page number
   *
   * @param {String|Number} pageNo - page number
   * @returns void
   */
  updatePageNo(pageNo)
  {    
    this.page.setPageNo(pageNo);
  }

  /**
   * update the whole pagination object
   * creates a new instance of Page for this.page property
   * is not set
   *
   * @param {object} page pagination object
   * @return void
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
    this.data[this.page.getPageNo()] = data;
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
