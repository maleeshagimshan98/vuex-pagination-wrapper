/**
 * Copyright - 2021 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */

/**
 * A class representing a pagination object
 */
 class Page {

    /**
     * constructor
     * 
     * @param {object} page object containing all preperties of the Page object
     * @returns self
     */
    constructor (page = null)
    {
        this.page = {};           
        this.page.result = page.result ?? null;   
        this.page.pageNo = page.pageNo ?? null;   
        this.page.pages = page.pages ?? null;        
    }

    /**
     * set page object
     *
     * @param {object} page object containing all preperties of the Page object
     * @returns self
     */
    setPage(page)
    { 
        this.page.result = page.result;   
        this.page.pageNo = page.pageNo;   
        this.page.pages = page.pages;     
        return this;                            
    }    

    /**
     * get paging object
     * 
     * @returns {object}
     */
    getPage()
    {
        return this.page;
    }

    /**
     * get page number of the page object
     * 
     * @returns {String|Number}
     */
    getPageNo ()
    {
        return this.page.pageNo;
    }

    /**
     * set page number of the page object
     * 
     * @param {String|Number} pageNo page number
     * @returns self
     * @throws Error
     */
    setPageNo (pageNo)
    {
        if(this.page.pages && pageNo >this.page.pages) {
            throw new Error("page number must be equal or below the pages count");
        }
        if(this.page.pages && pageNo <= 0) {
            throw new Error("page number must be equal or above 1");
        }
        this.page.pageNo = pageNo;
        return this;
    }

    /**
     * get pages count of the page object
     * 
     * @returns {String|Number}
     */
    getPagesCount ()
    {
        return this.page.pages;
    }

    /**
     * reset page data
     * 
     * @returns void
     */
    reset ()
    {
        this.page = {                
            result : 0,
            pageNo : 0,
            pages : 0,
        };           
    }
}

module.exports = Page;