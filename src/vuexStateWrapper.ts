/**
 * Copyright - 2025 - Maleesha Gimshan (github.com/maleeshagimshan98)
 */

/**
 * wraps state data objects
 */
class vuexStateWrapper {
  /**
   * data object
   *
   * @type {Record<string, unknown>}
   */
  protected data: Record<string, unknown> = {};

  /**
   * constructor
   *
   * @param {Record<string, unknown> | undefined} data any object that need to be wrapped inside this object
   * @returns self
   */
  constructor(data?: Record<string, unknown>) {
    this.data = data ?? {};
    return this;
  }

  /**
   * set data
   *
   * @param {Record<string, unknown>} data data
   * @returns {vuexStateWrapper} self
   */
  setData(data: Record<string, unknown>): vuexStateWrapper {
    this.data = data;
    return this;
  }

  /**
   * get data
   * if page is set, get the data corresponding to that page number
   * else return the data
   *
   * @returns {Record<string, unknown>} data
   */
  getData(): Record<string, unknown> {
    return this.data;
  }

  /**
   * reset data object
   *
   * @returns {void}
   */
  reset(): void {
    this.data = {};
  }
}

export default vuexStateWrapper;
