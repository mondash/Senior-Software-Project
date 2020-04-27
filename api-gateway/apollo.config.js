module.exports = {
  client: {
    excludes: ["**/typeDefs.*"],
    service: {
      name: "Local Dev",
      url: "http://192.168.99.100:7000/graphql"
    }
  }
  // client: {
  //   service: "Microservice-Test",
  //   includes: ["**/src/**/*.js"],
  //   excludes: ["**/node_modules"]
  // }
  // client: {
  //   service: {
  //     name: "Microservice-Test",
  //     url: "http://192.168.99.100:7000/graphql"
  //   }
  // }
  // client: {
  //   // service: "Microservice-Test",
  //   includes: ["./*/src/**/*.js"],
  //   excludes: ["**/__tests__/**"]
  // }
};
