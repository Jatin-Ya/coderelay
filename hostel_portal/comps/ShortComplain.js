import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popupbox from './Popupbox';



function ShortComplain(props) {
  return (
    <Card raised style={{ width: '95%',margin:'20px'}}>
      
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>Complaint Description</Card.Title>
        <Card.Text>
          {props.username}
        </Card.Text>
        <Popupbox des={props.website}/>
        {/* <Button variant="primary">Show Status</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ShortComplain;