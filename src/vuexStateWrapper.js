/**
 * Copyright - 2021 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */


 /**
  * wraps state data objects
  */
 class vuexStateWrapper {
   /**
    * constructor
    *
    * @param {object} data any object that need to be wrapped inside this object
    * @returns self
    */
   constructor(data = null) {
     this.initialiseData(data);
     return this;
   }   
 
   /**
    * initialise data object
    * @param {object|null} data
    * @returns void
    */
   initialiseData(data = null)
   {
     this.data = data ? data : {};
   }   
 
   /**
    * set data
    *
    * @param {object} data data
    * @returns self
    */
   setData(data)
   {     
     this.data = data ?? {};
     return this;
   }   
 
   /**
    * get data
    * if page is set, get the data corresponding to that page number
    * else return the data
    *    
    * @returns mixed
    */
   getData()
   {     
     return this.data;
   }

   /**
    * reset data object
    * 
    * @returns void
    */
   reset ()
   {
     this.data = {};
   }
 }
 
 module.exports = vuexStateWrapper;
 