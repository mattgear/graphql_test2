const graphql = require('graphql');
const { GraphQLID, GraphQLString, GraphQLObjectType } = graphql;

const ContactType = new GraphQLObjectType({
  name: 'ContactType',
  fields: () => ({
    contact_id: { type: GraphQLID },
    customer_id: { type: GraphQLID },
    contact_name: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

module.exports = ContactType;
