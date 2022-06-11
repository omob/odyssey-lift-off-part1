const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!

    "Gets tracks array using Fetch API"
    tracksForHomeFetch: [Track!]!

    "Get Total Trees planted at Ecology from inception grouped per day"
    treesForHome: [Tree!]!

    "Get Total Trees planted at Ecology from inception for each day"
    treesAllRecords: [Tree!]!
  }

  # Schema definitions go here

  type Tree {
    unixTime: Float
    numberOfTrees: Float
    date: String
  }

  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }

  type Mission {
    id: ID!
    name: String!
    description: String!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Title of the Track"
    title: String!
    "Author of the Track"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first name and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
