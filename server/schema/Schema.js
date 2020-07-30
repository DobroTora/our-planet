const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLBoolean, GraphQLInt } = graphql;

var animals = [
    {name: 'Tiger', type: 'mammal', id:'1'},
    {name: 'Tabby Cat', type: 'mammal', id:'2'},
    {name: 'Deer', type: 'mammal', id:'3'},
    {name: 'Sloth', type: 'mammal', id:'4'},
]

var eatingHabits = [
    {name: 'Carnivore', maxSpeed: 65, id: '1'},
    {name: 'Herbivore', maxSpeed: 80, id: '2'},
    {name: 'Omnivore', maxSpeed: 13, id: '3'},

]

const AnimalType = new GraphQLObjectType({
    name: 'animal',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        isExtinct: {type: GraphQLBoolean}
    })
})

const EatingHabitsType = new GraphQLObjectType({
    name: 'eating',
    fields: () => ({
        id: { type:GraphQLID},
        name: { type:GraphQLString },
        maxSpeed: {type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        animal: {
            type: AnimalType,
            args: {id: {type:GraphQLID}},
            resolve(parent, args) {
               return _.find(animals,{id:args.id});
            }
        },
        eating: {
            type: EatingHabitsType,
            args: {id: { type:GraphQLID}},
            resolve(parent, args){
                return _.find(eatingHabits,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})

