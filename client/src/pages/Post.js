import React from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
import CreatePost from '../components/createPost';
import PostsList from '../components/PostsList';



function Post() {


  return (
    <div>
    <CreatePost />
    <PostsList />
    </div>
  )
}

export default Post