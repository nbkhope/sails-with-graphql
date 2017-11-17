const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require('graphql');

// Doing this way will not work; have to require directly inside the type definition object
// const MakerType = require('./MakerType');

module.exports = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    // maker: {
    //   type: MakerType,
    //   resolve(parentValue) {
    //     console.log('gonna resolve productType.maker. parentValue is', parentValue);
    //     return Maker.findOne({ id: parentValue.maker });
    //   },
    // },
    maker: {
      type: require('./MakerType'), // for some reason this is the only way to make it work
      resolve(parentValue) {
        console.log('gonna resolve productType.maker. parentValue is', parentValue);
        // return 'ABC';
        return Maker.findOne({ id: parentValue.maker });
      }
    },
    models: {
      type: new GraphQLList(require('./ModelType')),
      resolve(parentValue) {
        console.log('ProductType', parentValue);
        return Model.find({ product: parentValue.id });
      },
    },
  }),
});
