const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const ProductType = require('./ProductType');

module.exports = new GraphQLObjectType({
  name: 'MakerType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parentValue) {
        return Product.find({ maker: parentValue.id });
      },
    }
  }),
});
