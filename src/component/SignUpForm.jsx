import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function SignUpForm() {
    function handleSubmit(event){

        event.preventDefault();
        alert('If authetication was valid. Redirect to refrence page')
    }
  return (
    <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name*</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className='rounded-pill mt-3' size='lg'>
            Submit and Get the guide
        </Button>
    </Form>
  )
}

export default SignUpForm