const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLID } = graphql;

const CustomerQuery = require('./server/customer/CustomerQuery');
const ContactQuery = require('./server/contacts/ContactQuery');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    ...CustomerQuery,
    ...ContactQuery,
  }),
  // fields: { CustomerQuery },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log('Listening on http://localhost:4000/graphql');
});
