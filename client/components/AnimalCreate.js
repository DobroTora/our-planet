import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchWildlife';


class wildlifeCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>ADD A NEW wildlife</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>wildlife Name:</label>
                    <input 
                    onChange={event => this.setState({title: event.target.value})}
                    value={this.state.title}
                    />
                    <label>wildlife Type:</label>
                    <input 
                    onChange={event => this.setState({title: event.target.value})}
                    value={this.state.title}
                    />
                    <label>Is the wildlife Carnivore or Herbivore?</label>
                    <input 
                    onChange={event => this.setState({title: event.target.value})}
                    value={this.state.title}
                    />
                    <label>Is the wildlife Extinct or Not?</label>
                    <input 
                    onChange={event => this.setState({title: event.target.value})}
                    value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation Addwildlife($title: String){
        addwildlife(title: $title) {
            title
        }
    }
`;

export default graphql(mutation)(wildlifeCreate);