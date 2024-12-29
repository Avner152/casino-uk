import { observable, action, makeObservable } from "mobx";

class MyStore {
  type = "";
  list = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      updateList: action,
      type: observable,
      updateType: action,
    });
  }
  updateList(newList) {
    this.list = [...newList];
  }
  updateType(newType) {
    this.type = newType;
  }
}

const myStore = new MyStore();
export default myStore;
