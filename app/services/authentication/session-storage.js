
let instance = null;

export default class SessionStorage {

  /**
   * 
   * @returns {*}
   */
  constructor() {
    if(!instance){
      instance = this;
      this.session = null;
    }

    return instance;
  }

  /**
   *
   * @param entity
   * @returns {null|*}
   */
  set(entity) {
    this.session = entity;
    return this.session;
  }

  /**
   *
   * @returns {null|*}
   */
  get() {
    return this.session;
  }

  /**
   *
   */
  drop() {
    this.session = null;
  }
}
