# vuex-pagination-wrapper
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)

Wrapper object for managing paged data easily in Vuex Store.

## About
Storing and retrieving a lot of paged data may be a daunting task for many, especially when you have different kinds of paged data in your application and need to update the pages and page numbers efficiently.

This package helps you store and retrieve paged data in a Vuex store by providing an easy-to-use API.

## Installation

Install the package with npm:

```bash
npm install @maleeshagimshan98/vuex-pagination-wrapper
```

## Getting Started

Using this module is simple. Import the package, create a new instance of `vuexPaginationWrapper`, and set data using the `setData()` method.

**Example**

```javascript
const { vuexPaginationWrapper } = require('vuex-pagination-wrapper');

// Vuex store module
module.exports = {
  state: () => ({
    foo: new vuexPaginationWrapper(),
  }),

  mutations: {
    setFoo(state, data) {
      state.foo.setData(data.foo, data.page);
    },
  },

  actions: {
    async getFoo({ state, commit }) {
      let foo_data = await some_api_call();
      commit('setFoo', foo_data);
    },
  },
};
```

## Methods

### `setData(data: Record<string, unknown>, page: PageData): void`

Use this method to store data obtained from the server into the Vuex store. This method replaces the entire page object with the provided `page` parameter.

- **Parameters**:
  - `data` - `Record<string, unknown>` - Any object or array of objects containing paginated data.
  - `page` - `PageData` - Pagination data object that must include the following properties:
    - `total` - `number` - Total number of results.
    - `current` - `number` - Current page number.
    - `pages` - `number` - Total number of pages.
- **Returns**: `void`

Example:

```javascript
// Pagination object
{
  total: 10, // Total number of results
  current: 1, // Current page number
  pages: 2, // Number of pages
}
```

### `getData(pageNo: string | number): unknown`

Retrieve data for a specific page number.

- **Parameters**:
  - `pageNo` - `string | number` - The page number of the data you want to retrieve.
- **Returns**: `unknown` - The data object or array of objects stored for the specified page number.

### `checkDataExists(page: string | number = null): boolean`

Check if data exists for a given page number.

- **Parameters**:
  - `page` - `string | number` - The page number to check for data existence. Defaults to `null`.
- **Returns**: `boolean` - Returns `true` if data exists for the given page number, otherwise `false`.

### `updatePageNo(pageNo: number): void`

Update the current page number. Use this when the user navigates through pages.

- **Parameters**:
  - `pageNo` - `number` - The page number to set as the current page.
- **Returns**: `void`

### `getCurrentPageNo(): number`

Retrieve the current page number.

- **Returns**: `number` - The current page number.

### `getPageDataObject(): PageData`

Retrieve the pagination data as a plain JavaScript object.

- **Returns**: `PageData` - An object with the following properties:
  ```javascript
  {
    total: 10, // Total number of results
    current: 1, // Current page number
    pages: 2, // Number of pages
  }
  ```

### `reset(): void`

Reset the stored data and pagination object to their initial states.

- **Returns**: `void`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.

## Contact

- Email: [maleesha.gimshan.98@outlook.com](mailto:maleesha.gimshan.98@outlook.com)