import logo from './logo.svg'
import { useState } from 'react';
import './App.css'
import {Button,Form,InputGroup} from 'react-bootstrap' 

function App() {
  return (
    <div className="App">
      <h1> WELCOME TO BOOTSTRAP</h1>
      <br></br>
      <br></br>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    <br>
    </br>
    <br></br>
    <h1>GET HELP FROM BUTTON</h1>
    <InputGroup className="mb-3" style={{color:'#ff3456'}}>
    
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"style={{color:'#FF0000'}}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" style={{color:'#ff5733'}}>@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url" style={{color:'#9BEC00'}}>Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3" style={{color:'#6482AD'}}>
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text style={{color:'#00712D'}}>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text style={{color:'#000ff'}}>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text style={{color:'#ff222'}}>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      </div>
  );
  }


export default App;
