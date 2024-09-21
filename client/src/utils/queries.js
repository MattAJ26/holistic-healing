import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query getAllUsers {
    users {
      _id
      username
      email
      roles {
        _id
        description
        name
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(id: $userId) {
      _id
      email
      roles {
        _id
        description
        name
      }
    }
  }
`;

export const QUERY_SERVICES = gql`
  query getAllServices {
    services {
      _id
      name
      duration
      description
      price
      practitioners {
        name
        ratings {
          _id
          comment
          rating
          user {
            username
            _id
          }
        }
      }
    }
  }
`;

export const QUERY_SINGLE_ROLES = gql`
  query getSingleRole($roleId: ID!) {
    role(id: $roleId) {
      name
      description
      _id
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getAllReviews {
    reviews {
      user {
        username
        _id
      }
      practitioner {
        _id
        name
        specialties
      }
      service {
        _id
        name
        duration
        price
      }
      rating
      comment
    }
  }
`;

export const QUERY_PRACTITIONERS = gql`
  query getAllPractitioners {
    practitioners {
      _id
      availableDates
      bio
      certifications
      name
      ratings {
        rating
        service {
          name
          description
          _id
        }
      }
    }
  }
`;

export const QUERY_SINGLE_PRACTITIONER = gql`
  query Practitioner($practitionerId: ID!) {
    practitioner(id: $practitionerId) {
      _id
      name
      bio
      availableDates
      certifications
      specialties
      ratings {
        rating
        comment
        _id
        service {
          name
          _id
          description
        }
      }
    }
  }
`;

export const QUERY_APPOINTMENTS = gql`
  query Query {
    appointments {
      _id
      appointmentDate
      notes
      user {
        username
        email
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

export const QUERY_SINGLE_APPOINTMENT = gql`
  query Query($appointmentId: ID!) {
    appointment(id: $appointmentId) {
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
