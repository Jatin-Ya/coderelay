import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Textboxform from './Textboxform';
import { TextField } from '@mui/material';

function BasicExample() {
  return (
    <Form style={{ width: '75vh',margin:'20px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <br />
        <TextField
          id="filled-multiline-static"
        //   defaultValue=""
          
          fullWidth="true"
          variant="outlined"
          label="Enter your Complain Catagory"
        />
        {/* <Form.Control type="description" multiline row={4} placeholder="Enter complain" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <br />
        <TextField
          id="filled-multiline-static"
        
          multiline
          rows={4}
        //   defaultValue=""
        
          fullWidth="true"
          variant="outlined"
          label="Enter your Complain Description"
        />
        {/* <Form.Control type="description" multiline row={4} placeholder="Enter complain" /> */}
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Add Complain
      </Button>
    </Form>
  );
}

export default BasicExample;