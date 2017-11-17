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
const ModelType = require('./ModelType');
const mutation = require('./mutations');

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
        type: new GraphQLList(ProductType),
        resolve() {
          console.log('resolve products!');
          return Product.find();
        },
      },
      product: {
        type: ProductType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve(parentValue, args) {
          return Product.findOne({ id: args.id });
        }
      },
      models: {
        type: new GraphQLList(ModelType),
        resolve() {
          return Model.find();
        },
      },
      model: {
        type: ModelType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve(parentValue, args) {
          return Model.findOne({ id: args.id });
        }
      },
    }),
  }),
  mutation,
});

module.exports = schema;
