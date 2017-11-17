const {
  GraphQLObjectType,
  GraphQLID,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    deleteMaker: {
      type: require('./MakerType'),
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parentValue, args) {
        return Maker.destroy({ id: args.id });
      },
    }
  },
});
