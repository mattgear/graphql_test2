const graphql = require('graphql');
const { GraphQLID } = graphql;
const ContactType = require('./ContactType');
const db_conn = require('../db/index');

const ContactQuery = {
  contacts: {
    type: ContactType,
    args: { id: { type: GraphQLID } },
    resolve(parentValue, args) {
      const query = {
        text: `SELECT * FROM "test"."contacts" WHERE contact_id = $1`,
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
};

module.exports = ContactQuery;
