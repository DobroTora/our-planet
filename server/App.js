const express = require('express');
const graphqlHTTP = require('express-graphql');


const app = express();

app.listen(1000, () => {
    console.log('always listening...')
})