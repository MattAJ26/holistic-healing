const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Appointment {
    _id: ID
    user: User
    practitioner: Practitioner
    appointmentDate: Date!  # Use Date scalar type here
    status: String
    notes: String
  }

  type Practitioner {
    _id: ID
    name: String
    bio: String
    specialties: [String]
    certifications: [String]
    availableDates: [Date]  # If you want these as Date objects
    ratings: [Review]
  }

  type Review {
    _id: ID
    user: User!
    practitioner: Practitioner
    service: Service
    rating: Int!
    comment: String
  }

  type Role {
    _id: ID
    name: String
    description: String
  }

  type Service {
    _id: ID
    name: String
    description: String
    duration: Int!
    price: Int!
    practitioners: [Practitioner]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    roles: [Role]
  }

  type Query {
    
    appointments: [Appointment]
    practitioners: [Practitioner]
    reviews: [Review]
    roles: [Role]
    services: [Service]
    users: [User]

    appointment(id: ID!): Appointment
    practitioner(id: ID!): Practitioner
    role(id: ID!): Role
    service(id: ID!): Service
    user(id: ID!): User
  }

  type Mutation {
    addAppointment(userId: ID!, practitionerId: ID!, appointmentDate: Date!, notes: String!): Appointment
    addReview(rating: Int!, comment: String): Review
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
