import React, { useState } from 'react';
import { ADD_POST } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const CreatePost = () => {
  const [formState, setFormState] = useState({
    title: '',
    postText: '',
    postAuthor: ''
  });

  const [createPost] = useMutation(ADD_POST, {
    variables: {
    //   description: formState.title,
      postText: formState.postText,
      postAuthor: "bob"
    }
  });

  return (
    <div>
      <form className="post"
        onSubmit={(e) => {
          e.preventDefault();
          createPost();
        }}
      >
        <label htmlFor="title">Title</label>
          <input id='title'
            className="mb2"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
            type="text"
            placeholder="Your post title"
          />
          <label htmlFor="post-text">Post here</label>
          <textarea id='post-text' rows="5"
            
            className="mb2"
            value={formState.postText}
            onChange={(e) =>
              setFormState({
                ...formState,
                postText: e.target.value
              })
            }
            
            placeholder="Your Post"
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;