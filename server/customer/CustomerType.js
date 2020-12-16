const graphql = require('graphql');
const { GraphQLID, GraphQLString, GraphQLList, GraphQLObjectType } = graphql;
const ContactType = require('../contacts/ContactType');

const db_conn = require('../db/index');

const CustomerType = new GraphQLObjectType({
  name: 'CustomerType',
  fields: () => ({
    customer_id: { type: GraphQLID },
    customer_name: { type: GraphQLString },
    contacts: {
      type: new GraphQLList(ContactType),
      resolve(parentValue, args) {
        const query = {
          text: `SELECT * from "test"."contacts" WHERE customer_id = $1`,
          values: [parentValue.customer_id],
        };

        return db_conn
          .many(query)
          .then((data) => {
            return data;
          })
          .catch((err) => {
            return 'The error is: ', err;
          });
      },
    },
  }),
});

module.exports = CustomerType;
