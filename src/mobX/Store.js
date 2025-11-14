import { observable, action, makeObservable } from "mobx";
import { importImages } from "../App";

class MyStore {
  type = "blanca";
  product = "";
  infoContent = null;
  list = [];
  initialList = [];
  content = null;
  brands = importImages(
    require.context("../assets/brands", false, /\.(png|jpe?g|svg)$/)
  );

  constructor() {
    makeObservable(this, {
      brands: observable,
      product: observable,
      updateProduct: action,
      list: observable,
      updateList: action,
      type: observable,
      updateType: action,
      content: observable,
      updateContent: action,
      infoContent: observable,
      updateInfoContent: action,
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
  updateProduct(product) {
    this.product = product;
  }
  updateInfoContent(chosen) {
    this.infoContent = chosen;
  }
}

const myStore = new MyStore();
export default myStore;
