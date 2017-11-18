const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
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
      resolve(parentValue, { id, name }) {
        console.log('Update Maker!!!');
        return Maker.update({ id }, { name }).then(updatedRecords => {
          return updatedRecords[0];
        });
      },
    }
  },
});
