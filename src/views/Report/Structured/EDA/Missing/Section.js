import React from 'react';
import { Row } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const { data } = this.props;
    return (
      <Row>
        <img src={data.matrix} />
      </Row>
    );
  }
}

export default Index;
