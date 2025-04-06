import { observable, action, makeObservable } from "mobx";
import { importImages } from "../App";

class MyStore {
  type = "blanca";
  list = [];
  content = null;
  brands = importImages(
    require.context("../assets/brands", false, /\.(png|jpe?g|svg)$/)
  );

  constructor() {
    makeObservable(this, {
      brands: observable,
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
  updateType(newType) {
    this.type = newType;
  }
  updateContent(newContent) {
    this.content = { ...newContent };
  }
}

const myStore = new MyStore();
export default myStore;
