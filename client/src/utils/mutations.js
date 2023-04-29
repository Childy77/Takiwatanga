import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
mutation addPost($postText: String!) {
  addPost(postText: $postText) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
    }
  }
}
`

export const ADD_COMMENT = gql`
mutation addComment($postId: ID!, $commentText: String!) {
  addComment(postId: $postId, commentText: $commentText) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
    }
  }
}
`

export const REMOVE_POST = gql`
mutation removePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
    postText
    postAuthor
    createdAt
  }
}
`

export const REMOVE_COMMENT = gql`
mutation removeComment($postId: ID!, $commentId: ID!) {
  removeComment(postId: $postId, commentId: $commentId) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
    }
  }
}
`

export const UPDATE_POST = gql`
  mutation updatePost($postId: ID!, $postText: String!) {
    updatePost(postId: $postId, postText: $postText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;
