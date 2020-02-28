import React, {useState, useImperativeHandle, forwardRef } from "react";
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const DispatcherParameters = forwardRef((props,ref) => {
    const [dispatchInt, setDispatchInt] = useState(500)
    const [simReputation, setSimReputation] = useState(1.5)

    useImperativeHandle(ref, () => ({
      getDispatchParameters(){
        let params = {
          dispatcher_interval: parseFloat(dispatchInt),
          similiar_reputation: parseFloat(simReputation)
        }
        return params
      }
    }))

    return (
      <Card style={{margin:"1% 1% 1% 1%"}}>
        <Card.Header>Dispatcher Parameters</Card.Header>
        <Card.Body>
          <Card.Title>Adjust speed of tasks distributed to dispatcher</Card.Title>
          <Card.Text>
            <Form.Group controlId="formPerKm">
              <Form.Label>Dispatch Interval (in ms)</Form.Label>
              <Form.Control size="sm" type="text" placeholder="5" value={dispatchInt} onChange={e => setDispatchInt(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formPeak">
              <Form.Label>Similar Reputation (+/-)</Form.Label>
              <Form.Control size="sm" type="text" placeholder="5" value={simReputation} onChange={e => setSimReputation(e.target.value)}/>
            </Form.Group>
          </Card.Text>
        </Card.Body>
      </Card>
    )
})

export default DispatcherParameters;