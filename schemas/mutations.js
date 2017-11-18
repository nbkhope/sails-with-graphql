const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLError,
  GraphQLFloat,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    deleteMaker: {
      type: require('./MakerType'),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parentValue, args) {
        return Maker.destroy({ id: args.id });
      },
    },
    updateMaker: {
      type: require('./MakerType'),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        console.log('Update Maker!!!');
        return Maker.update({ id: args.id }, args).then(updatedRecords => {
          if (updatedRecords.length === 0) {
            return new GraphQLError('Could not find records to update');
          }
          console.log('updatedRecords');
          return updatedRecords[0];
        });
      },
    },
    createMaker: {
      type: require('./MakerType'),
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        return Maker.create(args);
      },
    },

    deleteProduct: {
      type: require('./ProductType'),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parentValue, args) {
        return Product.destroy({ id: args.id });
      },
    },
    updateProduct: {
      type: require('./ProductType'),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        name: {
          type: GraphQLString,
        },
        maker: {
          type: GraphQLID,
        },
      },
      resolve(parentValue, args) {
        return Product.update({ id: args.id }, args).then(updatedRecords => {
          if (updatedRecords.length === 0) {
            return new GraphQLError('Could not find records to update');
          }
          return updatedRecords[0];
        });
      },
    },
    createProduct: {
      type: require('./ProductType'),
      args: {
        name: {
          type: GraphQLString,
        },
        maker: {
          type: GraphQLID,
        },
      },
      resolve(parentValue, args) {
        return Product.create(args);
      },
    },

    deleteModel: {
      type: require('./ModelType'),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parentValue, args) {
        return Model.destroy({ id: args.id });
      },
    },
    updateModel: {
      type: require('./ModelType'),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
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
          type: GraphQLID,
        },
      },
      resolve(parentValue, args) {
        return Model.update({ id: args.id }, args).then(updatedRecords => {
          if (updatedRecords.length === 0) {
            return new GraphQLError('Could not find records to update');
          }
          return updatedRecords[0];
        });
      },
    },
    createModel: {
      type: require('./ModelType'),
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        price: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
        releaseDate: {
          type: GraphQLString,
        },
        product: {
          type: GraphQLID,
        },
      },
      resolve(parentValue, args) {
        console.log('Creating model');
        return Model.create(args);
      },
    },
  },
});
