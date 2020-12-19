const { GraphQLObjectType, GraphQLNonNull } = require('graphql');
const ContactType = require('./ContactType');

const CreateContactPayload = new GraphQLObjectType({
  name: 'CreateContactPayload',
  fields: () => ({
    contact: {
      type: new GraphQLNonNull(ContactType),
    },
  }),
});

module.exports = CreateContactPayload;
