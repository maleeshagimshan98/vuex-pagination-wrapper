# vuex-pagination-wrapper
Wrapper object to be used for managing paged data easily in Vue.js

## About
Storing and retriving lot of paged data may be a daunting task for many.
Especially, in case you need to display different kinds of data in your appliaction and update the pages, page numbers efficiently.
This package helps you to store and retrieve paged data in the vue store by managing data and pagination data for you.

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
      state.foo.setData(data,page);        
    },
  },
}
````

## Methods


- **`setData(data,page)`**

  - data - any object/ Array of objects with paginated data.
  - page - pagination data object in the following format.
  - *returns* - void


````
//... Pagination object
{
  result : 10,
  pageNo : 1,
  pages : 2  
}
````

- **getData(pageNo)**

  - pageNo - page number of the data you want to get
  - *returns* - data object/array of objects you stored for the particular page number

- **setPage(page)**

  - page - pagination object in above mentioned format
  - *returns* - void

- **getCurrentPageNo()**

  - *returns* - current page number or *null if page is not set*

- **updatePageNo(pageNo = null)**

  - pageNo - page number, which you want to be the current page number
  - *returns* - pagination data object with updated data or *null if page is not set*

- **getPageDataObject()**

  - *returns* - pagination data object or *null if page is not set*

- **checkDataExists(pageNo = 1)**

  - pageNo - check if there is data stored for the given page number (*defaults to 1*)
  - *returns* - if exists, return data for the given page number or null



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











