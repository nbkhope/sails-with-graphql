const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

const MakerType = require('./MakerType');
const ProductType = require('./ProductType');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      makers: {
        type: new GraphQLList(MakerType),
        resolve() {
          return Maker.find();
        },
      },
      maker: {
        type: MakerType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve(parentValue, args) {
          return Maker.findOne({ id: args.id });
        },
      },
      products: {
        type: new GraphQLList(ProductType),//new GraphQLList(ProductType),
        resolve() {
          // console.log('resolve!');
          // return ['a', 'b', 'c'].map((name, index) => ({
          //   id: index + 1,
          //   name,
          // }));
          return Product.find();
        },
      }
    }),
  }),
});

module.exports = schema;
