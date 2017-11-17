const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ModelType',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    releaseDate: {
      type: GraphQLString,
    },
    product: {
      type: require('./ProductType'),
      resolve(parentValue) {
        return Model.find({ id: parentValue.product });
      },
    }
  }
});
