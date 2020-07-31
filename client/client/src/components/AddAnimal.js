import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getEatingHabitsQuery = gql`
    {
        eating {
            name
            id
        }
    }
`;

class AddAnimal extends Component {
  
    render(){
        return(
            <form id="add-book">
                <div className="field">
                    <label>Animal name:</label>
                    <input type="text" />
                </div>
            </form>
        );
    }
}

export default graphql(getEatingHabitssQuery)(AddAnimal);