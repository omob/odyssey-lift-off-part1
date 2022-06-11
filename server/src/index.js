//TODO
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(6)],
//   }),
//   Track: () => ({
//     id: () => "track_01",
//     title: () => "Astro Kitty, Space Explorer",
//     author: () => ({
//       name: "Grumpy Cat",
//       photo:
//         "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
//     }),
//     thumbnail: () =>
//       "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cache: new BaseRedisCache({
  //   client: new Redis({
  //     host: "127.0.0.1",
  //     port: 6379,
  //   }),
  // }),
  // cache: new InMemoryCache(),
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
      treeAPI: new TreeAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev
    `);
});
