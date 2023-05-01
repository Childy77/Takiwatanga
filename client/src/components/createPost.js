import React, { useState } from 'react';
import { ADD_POST } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';

const CreatePost = () => {
  const [postText, setPostText] = useState('');
  const [formState, setFormState] = useState({
    title: '',
    postText: '',
    postAuthor: ''
  });

  const [addPost] = useMutation(ADD_POST);

  const handleAddPost = async (event) => {
    event.preventDefault();
    try {
      const response = await addPost({
        variables: { postText },
        refetchQueries: [{ query: GET_POSTS }],
      });
      setPostText('');
      console.log('New post added!:', response.data.addPost);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="post"
       onSubmit={handleAddPost}>
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
        <textarea
          id='post-text'
          rows='5'
          className="mb2"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="Your Post"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
