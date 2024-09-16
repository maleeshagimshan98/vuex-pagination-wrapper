# vuex-pagination-wrapper
Wrapper object for managing paged data easily in Vuex Store

## About
Storing and retriving lot of paged data may be a daunting task for many.
Especially in the case you have different kinds of paged data in your appliaction, update the pages, page numbers efficiently.

This package helps you to store and retrieve paged data in a vuex store by providing an easy to use api for you.

## Installation

Install the package with npm

- `npm install @maleeshagimshan98/vuex-pagination-wrapper `

## Getting Started

Using this module is simple. Import the package, create a new instance of `stateDataWrapperPaginated` and set data using `setData()` method.

**Example**

````
const {vuexPaginationWrapper} = require('vuex-pagination-wrapper');

//... Vuex store module
module.exports = {
  state : () => ({
    foo : new vuexPaginationWrapper(),
  }),
  
  mutations : {
    setFoo (state,data) {
      state.foo.setData(data.foo, data.page);        
    },
  },

  actions : {
    async getFoo ({state,commit,dispatch}) {
      let foo_data = await some_api_call()
      commit('setFoo',foo_data)

    }
  },
}
````

## Methods


- **`setData(data,page)`**

Use this method to store data obtained from server into vuex store. This method replace the entire page object with the page parameter

Pass the pagination object with updated page details (no of results, page number and pages count)

  - data - any object/ Array of objects with paginated data.
  - page - pagination data object must include the following properties.
  - *returns* - void


````
//... Pagination object
{
  total : 10, (total number of results)
  current : 1, (current page number)
  pages : 2  (number of pages)
}
````

- **getData(pageNo)**

Get data of particular page number.

  - pageNo - Number -  page number of the data you want to get
  - *returns* - data object/array of objects you stored for the particular page number

- **checkDataExists(page = null)**

Check if data exists for a given page number

  - page - Number - check if there is data stored for the given page number
  - *returns* - Boolean if data exists, return true

- **updatePageNo(pageNo)**

Update the current page number - use this when user surf through pages

- pageNo - Number - which you want to be the current page number
- *returns* - void

- **getCurrentPageNo()**

  - *returns* - String|Number current page number

- **getPageDataObject()**

  - *returns* - pagination data in a plain javascript object

  ````
  //... plain object with following properties
  {
    total : 10, (total number of results)
    current : 1, (current page number)
    pages : 2  (number of pages)
  }

  ````




## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


## Licence
Distributed under the MIT License

## Contact

- email - (maleeshagimshan74@gmail.com)











