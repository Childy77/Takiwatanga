import React, { useState } from 'react';

const CreatePost = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });

  return (
    <div>
      <form className="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label for="title">Title</label>
          <input id='title'
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Your post title"
          />
          <label for="post-content">Post here</label>
          <textarea rows="5"
            
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
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