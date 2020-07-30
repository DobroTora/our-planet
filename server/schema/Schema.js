const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } = graphql;

var animals = [
    {name: 'Tiger', type: 'mammal', id:'1', eatingHabitsId: '1'},
    {name: 'Tabby Cat', type: 'mammal', id:'2', eatingHabitsId: '1'},
    {name: 'Deer', type: 'mammal', id:'3', eatingHabitsId: '2'},
    {name: 'Sloth', type: 'mammal', id:'4', eatingHabitsId: '3'},
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
        isExtinct: {type: GraphQLBoolean},
        eating:{
            type: EatingHabitsType,
            resolve(parent, args){
                return _.find(eatingHabits, {id:parent.eatingHabitsId})
            }
        }
    })
})

const EatingHabitsType = new GraphQLObjectType({
    name: 'eating',
    fields: () => ({
        id: { type:GraphQLID},
        name: { type:GraphQLString },
        maxSpeed: {type: GraphQLInt },
        animal: {
            type: new GraphQLList(AnimalType),
            resolve(parent, args){
                return _.filter(animals, {eatingHabitsId:parent.id})
            }
        }
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
        },
        animals: {
            type: new GraphQLList(AnimalType),
            resolve(parent, args){
                return animals
            }
        },
        eating: {
            type: new GraphQLList(AnimalType),
            resolve(parent, args){
                return animals
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
