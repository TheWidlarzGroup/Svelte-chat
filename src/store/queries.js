import {gql} from "graphql-tag";

export const queryRooms = gql`
                query rooms {
                  usersRooms{
                        rooms{
                        id
                        name
                        roomPic
                      }
                        user{
                        email
                        firstName
                        id
                        lastName
                        profilePic
                        role
                      }
                    }
                }`

export const queryRoom = gql`
    query messages($id: String!) {
        room(id: $id){
            id
            messages{
                body
                id
                insertedAt
                user{
                    email
                    firstName
                    id
                    lastName
                    profilePic
                    role
                }
            }
            name
            roomPic
            user{
                email
                firstName
                id
                lastName
                profilePic
                role
            }
        }
    }
`
