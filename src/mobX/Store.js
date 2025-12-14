import { observable, action, makeObservable } from "mobx";

class MyStore {
  type = "blanca";
  product = "";
  list = [];
  initialList = [];
  content = null;
  brands = [];
  ribbonList = [];

  constructor() {
    makeObservable(this, {
      brands: observable,
      list: observable,
      updateList: action,
      product: observable,
      updateProduct: action,
      type: observable,
      updateType: action,
      content: observable,
      updateContent: action,
      ribbonList: observable,
      updateRibbons: action,
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
  updateRibbons(ribbonList) {
    this.ribbonList = [...ribbonList];
  }
}

const myStore = new MyStore();
export default myStore;
