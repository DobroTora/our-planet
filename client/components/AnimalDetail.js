import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchWildlife from '../queries/fetchWildlife';
import { Link } from 'react-router';


class WildlifeDetail extends Component {
    render() {
        const { Wildlife } = this.props.data;
        if(!Wildlife) {return <div>Loading...</div>;}
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{Wildlife.title}</h3>
            </div>
        )
    }
}

export default graphql(fetchWildlife, {
    options: (props) => {return { variables: { id:props.params.id }}}
})(WildlifeDetail); 