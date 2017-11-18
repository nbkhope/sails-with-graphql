const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLError,
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
  },
});
