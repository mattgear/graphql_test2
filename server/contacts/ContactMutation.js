const { GraphQLNonNull } = require('graphql');
const CreateContactInput = require('./CreateContactInputType');
const CreateContactPayload = require('./CreateContactPayload');
const db_conn = require('../db/index');

const ContactMutations = {
  createContact: {
    type: CreateContactPayload,
    args: {
      input: {
        type: new GraphQLNonNull(CreateContactInput),
      },
    },
    resolve: async (_, { input }) => {
      // example error
      const foundUser = await db_conn.one(
        `SELECT count(*) FROM "test"."contacts" where email = $1`,
        [input.email]
      );
      if (foundUser.count > 0) {
        throw new Error('Contact with that email already exists.');
      }

      const createdContact = {
        text: `INSERT INTO "test"."contacts" (customer_id, contact_name, email, phone) VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [
          input.customer_id,
          input.contact_name,
          input.email,
          input.phone,
        ],
      };
      contact = await db_conn
        .one(createdContact)
        .then((data) => {
          return {
            contact: data,
          };
        })
        .catch((err) => {
          return 'The error is: ', err;
        });

      return contact;
    },
  },
};

module.exports = ContactMutations;
