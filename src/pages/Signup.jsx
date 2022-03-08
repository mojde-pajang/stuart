import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import  PreSignUp  from '../component/PreSignUp'
import  SignUpForm  from '../component/SignUpForm'
import pic from "../images/signup.png"
import './Signup.css'
const Signup = (props) => {
    
    let content ;
        if ( true ){
            content = <PreSignUp></PreSignUp>
        }else{
            content = <SignUpForm></SignUpForm>
        }
    
    
  return (
    <section  className='signup-page'>
            <Row className='pl-5'>
                <Col className=' min-vh-100'>
                    {content}
                </Col>
                <Col className=' min-vh-100'>
                    <h1 className='title'>2021 Data of Stuart Customers</h1>
                    <img
                        className='w-100'
                        alt="Sing up"
                        src={pic}
                    />
                </Col>
            </Row>
    </section>
  )
}

export default Signup