const { RESTDataSource } = require("apollo-datasource-rest");

class TreeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://x.api.ecologi.com/";
  }

  getAllTreesData() {
    return this.get("trees");
  }
}

module.exports = TreeAPI;
