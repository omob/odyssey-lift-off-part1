const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to
    // populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    tracksForHomeFetch: async (_, __, { dataSources }) => {
      const res = await fetch(
        "https://odyssey-lift-off-rest-api.herokuapp.com/tracks"
      );
      const data = await res.json();
      return data;
    },
  },
  // for track schema
  Track: {
    author: async ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
      //   const res = await fetch(
      //     `https://odyssey-lift-off-rest-api.herokuapp.com/author/${authorId}`
      //   );
      //   const data = await res.json();
      //   return data;
    },
  },
};

module.exports = resolvers;
