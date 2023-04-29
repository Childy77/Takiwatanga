import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
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

export const GET_COMMENTS = gql`
  query GetComments($postId: ID!) {
    getComments(postId: $postId) {
      _id
      commentText
      commentAuthor
    }
  }
`;
