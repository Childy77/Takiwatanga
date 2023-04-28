import React from 'react'
import Form from 'react-bootstrap/Form';

function Post() {
  return (
    <Form className='post'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control className='text' as="textarea" rows={3} />
    </Form.Group>
  </Form>
  )
}

export default Post