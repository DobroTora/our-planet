const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const AnimalType = new GraphQLObjectType({
    name: 'Animal',
    fields: () => ({
        id: { type: GraphQLString},
        name: {type: GraphQLString},
        eatingHabits: { type: GraphQLString },
        extinctionStatus: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields: {
        animal: {
            type: AnimalType,
            args: {id: {tyoe:GraphQLString}},
            resolve(parent, args) {
                args.id
            }
        }
    }
})

