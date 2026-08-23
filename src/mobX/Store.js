import { makeAutoObservable } from "mobx";

class MyStore {
  type = "blanca";
  product = "";
  infoContent = null;
  list = [];
  initialList = [];
  content = null;
  brands = [];
  ribbonList = [];

  constructor() {
    makeAutoObservable(this);
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
  updateRibbons(ribbonList) {
    this.ribbonList = [...ribbonList];
  }
}

const myStore = new MyStore();
export default myStore;
