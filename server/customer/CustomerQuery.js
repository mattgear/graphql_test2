const graphql = require('graphql');
const { GraphQLID, GraphQLObjectType } = graphql;

const CustomerType = require('./CustomerType');
const db_conn = require('../db/index');

const CustomerQuery = new GraphQLObjectType({
  name: 'CustomerQuery',
  fields: {
    customer: {
      type: CustomerType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = {
          text: `SELECT * FROM "test"."customers" WHERE customer_id = $1`,
          values: [args.id],
        };

        return db_conn
          .one(query)
          .then((data) => {
            return data;
          })
          .catch((err) => {
            return 'The error is: ', err;
          });
      },
    },
  },
});

module.exports = CustomerQuery;
