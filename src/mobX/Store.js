import { observable, action, makeObservable } from "mobx";

class MyStore {
  type = "blanca";
  list = [];
  initialList = [];
  content = null;

  constructor() {
    makeObservable(this, {
      list: observable,
      updateList: action,
      type: observable,
      updateType: action,
      content: observable,
      updateContent: action,
    });
  }
  updateList(newList) {
    this.list = [...newList];
  }

  updateInitialList(newList) {
    this.initialList = [...newList];
  }
  updateType(newType) {
    this.type = newType;
  }
  updateContent(newContent) {
    this.content = { ...newContent };
  }
}

const myStore = new MyStore();
export default myStore;
