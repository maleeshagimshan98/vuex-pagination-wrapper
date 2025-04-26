import InfiniteState from '../src/InfiniteState';

describe('InfiniteState Class', () => {
  // 1. Constructor
  describe('Constructor', () => {
    test('should initialize with an empty object if no data is provided', () => {
      const wrapper = new InfiniteState();
      expect(wrapper.getData()).toEqual({});
    });

    test('should initialize with the provided data object', () => {
      const data = { key: 'value', anotherKey: 42 };
      const wrapper = new InfiniteState(data);
      expect(wrapper.getData()).toEqual(data);
    });
  });

  // 2. setData Method
  describe('setData', () => {
    test('should set the data object', () => {
      const wrapper = new InfiniteState();
      const newData = { key: 'newValue', anotherKey: 100 };
      wrapper.setData(newData);
      expect(wrapper.getData()).toEqual(newData);
    });

    test('should overwrite existing data with the new data object', () => {
      const initialData = { key: 'value' };
      const wrapper = new InfiniteState(initialData);
      const newData = { anotherKey: 42 };
      wrapper.setData(newData);
      expect(wrapper.getData()).toEqual(newData);
    });
  });

  // 3. getData Method
  describe('getData', () => {
    test('should return the current data object', () => {
      const data = { key: 'value', anotherKey: 42 };
      const wrapper = new InfiniteState(data);
      expect(wrapper.getData()).toEqual(data);
    });

    test('should return an empty object if no data is set', () => {
      const wrapper = new InfiniteState();
      expect(wrapper.getData()).toEqual({});
    });
  });

  // 4. reset Method
  describe('reset', () => {
    test('should reset the data object to an empty object', () => {
      const data = { key: 'value', anotherKey: 42 };
      const wrapper = new InfiniteState(data);
      wrapper.reset();
      expect(wrapper.getData()).toEqual({});
    });

    test('should not throw an error when resetting an already empty data object', () => {
      const wrapper = new InfiniteState();
      expect(() => wrapper.reset()).not.toThrow();
      expect(wrapper.getData()).toEqual({});
    });
  });
});
