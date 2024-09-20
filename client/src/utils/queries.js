import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;


export const QUERY_USERS = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;




export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      appointmentDate
      notes
      user {
        email
        username
        _id
      }
      practitioner {
        name
        _id
        availableDates
      }
      status
    }
  }
`;
