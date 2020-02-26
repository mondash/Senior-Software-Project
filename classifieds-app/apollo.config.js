module.exports = {
  client: {
    excludes: ["**/typeDefs.js"],
    service: {
      name: "Local Dev",
      url: "http://192.168.99.100:7000/graphql"
    }
  }
};
