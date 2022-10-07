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
        this.result = page.result ?? null;   
        this.pageNo = page.pageNo ?? 1;   
        this.pages = page.pages ?? 1;        
    }

    /**
     * set page object
     *
     * @param {object} page object containing all preperties of the Page object
     * @returns self
     */
    setPage(page)
    { 
        this.result = page.result;   
        this.pageNo = page.pageNo;   
        this.pages = page.pages;     
        return this;                            
    }    

    /**
     * get paging object
     * 
     * @returns {object}
     */
    getPage()
    {
        return {
            result : this.result,
            pageNo : this.pageNo,
            pages : this.pages
        };
    }

    /**
     * get number of results
     * 
     * @returns String|Number
     */
     getResultsCount ()
     {
         return this.result;
     }

    /**
     * get page number of the page object
     * 
     * @returns {String|Number}
     */
    getPageNo ()
    {
        return this.pageNo;
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
        if(this.pages && pageNo >this.pages) {
            throw new Error("page number must be equal or below the pages count");
        }
        if(this.pages && pageNo <= 0) {
            throw new Error("page number must be equal or above 1");
        }
        this.pageNo = pageNo;
        return this;
    }

    /**
     * get pages count of the page object
     * 
     * @returns {String|Number}
     */
    getPagesCount ()
    {
        return this.pages;
    }

    /**
     * reset page data
     * 
     * @returns void
     */
    reset ()
    {
        this.result = null;
        this.pageNo = 1;
        this.pages = null;
    }
}

module.exports = Page;