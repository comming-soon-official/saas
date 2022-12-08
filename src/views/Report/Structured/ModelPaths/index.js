import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

  }

  render(){
    const { title } = this.props;
    return (
      <Row id="#">
        <Col className="section">
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
    );
  }
}

export default Index;
