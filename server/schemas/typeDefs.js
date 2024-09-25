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
    availableDates: [Date] 
    ratings: [Review]
  }

  type Review {
    _id: ID
    user: User!
    practitioner: Practitioner
    service: Service
    rating: Int!
    comment: String
     createdAt: String!
  }

  # type Role {
  #   _id: ID
  #   name: String!
  #   description: String
  # }

  type Service {
    _id: ID
    name: String
    description: String
    duration: Int!
    price: Int!
    practitioners: [Practitioner]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    role: String!
  }




  type Query {
    
    appointments: [Appointment]
    practitioners: [Practitioner]
    reviews: [Review]
    # roles: [Role]
    services: [Service]
    users: [User]

    appointment(id: ID!): Appointment
    practitioner(id: ID!): Practitioner
    # role(id: ID!): Role
    service(id: ID!): Service
    user(id: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {

 # create

    addAppointment(user: ID!, practitioner: ID!, appointmentDate: Date!, notes: String!): Appointment
    
    addReview(user: ID!, rating: Int!, comment: String): Review

    addUser(username: String!, email: String!, password: String!): Auth

     addService(practitioner: ID!,
     name: String!, description: String!, duration: Int!, price: Int!): Service

    #  createAdminUser(username: String!, email: String!, password: String!): Auth!



# update


    updateUser(id: ID!, username: String!, email: String! password: String!): User

    updateAppointment(id: ID!, appointmentDate: Date!, notes: String! ): Appointment

     updateReview(id: ID!, rating: Int!, comment: String ): Review
     
       updateService(id: ID!, name: String!, description: String!, duration: Int!, price: Int! ): Service


# delete

removeUser(userId: ID!): User
cancelAppointment(appointmentId: ID!): Appointment
deleteService(serviceId: ID!): Service

# auth-login

login(email: String!, password: String!): Auth


  }
`;

module.exports = typeDefs;
