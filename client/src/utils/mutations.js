import { gql } from '@apollo/client';

export const CREATE_APPOINTMENT = gql`
mutation createAppointment($user: ID!, $practitioner: ID!, $appointmentDate: Date!, $notes: String!) {
  addAppointment(user: $user, practitioner: $practitioner, appointmentDate: $appointmentDate, notes: $notes) {
    _id
    user {
      username
      email
    }
    practitioner {
      name
      _id
      bio
      availableDates
    }
    notes
    appointmentDate
    status
  }
}
`;

export const CREATE_REVIEW = gql`
mutation createReview($user: ID!, $rating: Int!, $comment: String) {
  addReview(user: $user, rating: $rating, comment: $comment) {
    _id
    comment
    rating
    service {
      name
      duration
      description
      price
      _id
    }
    user {
      username
      email
    }
    practitioner {
      _id
      name
      availableDates
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    roles {
      _id
      name
      description
      }
    }
  }
}
`;

export const CREATE_SERVICE = gql`
mutation AddService($practitioner: ID!, $name: String!, $description: String!, $duration: Int!, $price: Int!) {
  addService(practitioner: $practitioner, name: $name, description: $description, duration: $duration, price: $price) {
    _id
    name
    description
    duration
    price
    practitioners {
      _id
      name
      bio
      certifications
      availableDates
    }
  }
}
`;


export const UPDATE_USER = gql`
mutation updateUser($updateUserId: ID!, $username: String!, $email: String!, $password: String!) {
  updateUser(id: $updateUserId, username: $username, email: $email, password: $password) {
    _id
    username
    email
    password
    roles {
      _id
      name
      description
    }
  }
}
`;

export const UPDATE_APPOINTMENT = gql`
mutation Mutation($updateAppointmentId: ID!, $appointmentDate: Date!, $notes: String!) {
  updateAppointment(id: $updateAppointmentId, appointmentDate: $appointmentDate, notes: $notes) {
    _id
    user {
      username
      email
      roles {
        name
        _id
        description
      }
    }
    practitioner {
      name
      _id
      availableDates
    }
    status
    notes
    appointmentDate
  }
}
`;

export const UPDATE_SERVICE = gql`
mutation UpdateService($updateServiceId: ID!, $name: String!, $description: String!, $duration: Int!, $price: Int!) {
  updateService(id: $updateServiceId, name: $name, description: $description, duration: $duration, price: $price) {
    _id
    name
    description
    duration
    price
    practitioners {
      name
      bio
      specialties
      certifications
      availableDates
      _id
    }
  }
}
`;

export const DELETE_SERVICE = gql`
mutation Mutation($serviceId: ID!) {
  deleteService(serviceId: $serviceId) {
    _id
    name
    description
    duration
    price
    practitioners {
      name
      specialties
      availableDates
      certifications
      bio
    }
  }
}
`;

export const CANCEL_APPOINTMENT = gql`
mutation CancelAppointment($appointmentId: ID!) {
  cancelAppointment(appointmentId: $appointmentId) {
    _id
    user {
      username
      email
      roles {
        name
        _id
        description
      }
    }
    appointmentDate
    notes
    status
    practitioner {
      name
      availableDates
    }
  }
}
`;

export const REMOVE_USER = gql`
mutation RemoveUser($userId: ID!) {
  removeUser(userId: $userId) {
    _id
    username
    email
    roles {
      _id
      name
      description
    }
  }
}
`;
