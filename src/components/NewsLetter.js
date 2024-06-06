import React from 'react'
import { useState, useEffect } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';


const NewsLetter = ({onValidated, subscribe,status,message}) => {

  const [email, setEmail] = useState();

  useEffect(() => {
    if(status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault()
    email&&
    email.index('@') > -1 &&
    onValidated({
      EMAIL: email
    })
  }
  const clearFields = () =>{
    setEmail("")
  }

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our NewsLetter</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}  
            {status === 'error' && <Alert variant="danger">{message}</Alert>}  
            {status === 'success' && <Alert variant="success">{message}</Alert>}  
          </Col>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className='new-email-bx'>
                <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default NewsLetter
