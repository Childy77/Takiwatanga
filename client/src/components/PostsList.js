import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Card, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { ADD_COMMENT, REMOVE_POST, REMOVE_COMMENT, UPDATE_POST } from '../utils/mutations';
import { GET_POSTS } from '../utils/queries';

const PostsList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [addComment] = useMutation(ADD_COMMENT);
  const [removePost] = useMutation(REMOVE_POST);
  const [removeComment] = useMutation(REMOVE_COMMENT);
  const [updatePost] = useMutation(UPDATE_POST);

  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [updatedPostText, setUpdatedPostText] = useState('');
  const [selectedPost, setSelectedPost] = useState({});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddComment = async (postId) => {
    await addComment({
      variables: { postId, commentText },
      refetchQueries: [{ query: GET_POSTS }],
    });
    setShowCommentModal(false);
    setCommentText('');
  };

  const handleDeletePost = async (postId) => {
    await removePost({ variables: { postId }, refetchQueries: [{ query: GET_POSTS }] });
  };

  const handleDeleteComment = async (postId, commentId) => {
    await removeComment({
      variables: { postId, commentId },
      refetchQueries: [{ query: GET_POSTS }],
    });
  };

  const handleEditPost = async (postId) => {
    await updatePost({
      variables: { postId, postText: updatedPostText },
      update: (cache, { data: { updatePost } }) => {
        const existingPosts = cache.readQuery({ query: GET_POSTS });
  
        const newPosts = existingPosts.getPosts.map((post) => {
          if (post._id === updatePost._id) {
            return updatePost;
          }
          return post;
        });
  
        cache.writeQuery({
          query: GET_POSTS,
          data: { getPosts: newPosts },
        });
      },
    });
  
    setShowEditModal(false);
    setUpdatedPostText('');
  };
  

  return (
    <>
      <Row>
        {data.getPosts.map((post) => (
          <Col key={post._id} xs={12} md={6} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{post.postAuthor}</Card.Title>
                <Card.Text>{post.postText}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeletePost(post._id)}
                >
                  Delete Post
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    setSelectedPost(post);
                    setShowEditModal(true);
                  }}
                >
                  Edit Post
                </Button>
                <Button
              variant="info"
              onClick={() => {
                setSelectedPost(post);
                setShowCommentModal(true);
              }}
            >
              Add Comment
            </Button>
            <Card.Footer className="text-muted">
            <strong>{post.createdAt}:</strong>
            </Card.Footer>
            {post.comments.map((comment) => (
              <div key={comment._id}>
                <hr />
                <Card.Text>
                  <strong> {comment.commentAuthor}</strong> {comment.commentText}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    handleDeleteComment(post._id, comment._id)
                  }
                >
                  Delete Comment
                </Button>
              </div>
            ))}
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

  <Modal
    show={showCommentModal}
    onHide={() => setShowCommentModal(false)}
  >
    <Modal.Header closeButton>
      <Modal.Title>Add Comment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="commentText">
          <Form.Label>Comment Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={() => setShowCommentModal(false)}
      >
        Close
      </Button>
      <Button
        variant="primary"
        onClick={() => handleAddComment(selectedPost._id)}
      >
        Add Comment
      </Button>
    </Modal.Footer>
  </Modal>

  <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Post</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="updatedPostText">
          <Form.Label>Updated Post Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={updatedPostText}
            onChange={(e) => setUpdatedPostText(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowEditModal(false)}>
        Close
      </Button>
      <Button
        variant="primary"
        onClick={() => handleEditPost(selectedPost._id)}
      >
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</>
  )
}

export default PostsList
