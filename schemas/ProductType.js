const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  }),
});
