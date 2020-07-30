import gql from 'graphql-tag';

export default gql`
    query wildlifeQuery($id: ID!) {
        wildlife(id: $id) {
            id
            title
            type
            eating
            extinct
            description
        }
    }
`;