const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} = require('graphql');

const CreateContactInputType = new GraphQLInputObjectType({
  name: 'CreateContactInput',
  fields: () => ({
    contact_id: {
      type: GraphQLID,
    },
    customer_id: {
      type: GraphQLNonNull(GraphQLID),
    },
    contact_name: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  }),
});

module.exports = CreateContactInputType;
