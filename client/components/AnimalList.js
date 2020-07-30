import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchWildlife';

class WildlifeList extends Component {
    onWildlifeDelete(id) {
        this.props.mutate({variables: {id}})
        .then(() => this.props.data.refetch());
    }
    renderWildlifes() {
        return this.props.data.Wildlifes.map(({id, title}) => {
            return (
                <li key={id} className="collection-item">
                        <Link to={`/Wildlifes/${id}`}>
                        {title}
                        </Link> 
                    <i 
                    className="material-icons"
                    onClick={()=>this.onWildlifeDelete(id)}
                    >
                        clear
                    </i>
                </li>
            )
        })
    }
    render() {
        if(this.props.data.loading) { return <div>Loading...</div>}
        return (
            <div>
                 <nav>
                    <a href="#" className="brand-logo center">Wildlife KINGDOM</a>
                </nav> 
                <ul className="collection">
                    {this.renderWildlifes()}
                </ul>
                <Link to="/Wildlife/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const mutation = gql`
mutation DeleteWildlife($id: ID) {
    deleteWildlife(id: $id) {
        id
    }
}`;

export default graphql(mutation)(graphql(query)(WildlifeList));