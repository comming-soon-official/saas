import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props){
    super(props);

  }
  /*



  */
  render(){
    const { title, data } = this.props;
    return (
      <Row>
        <Col md={2}>
          <h6 className="subtitle">{title}</h6>
        </Col>
        <Col md={5}>
          <table className="table table-dark table-striped table-borderless table-sm">
            <tbody>
              <tr>
                <td>Distinct Count</td>
                <td>{data.n_distinct}</td>
              </tr>
              <tr>
                <td>Unique (%)</td>
                <td>{data.p_unique}</td>
              </tr>
              <tr>
                <td>Missing</td>
                <td>{data.n_missing}</td>
              </tr>
              <tr>
                <td>Missing (%)</td>
                <td>{data.p_missing}</td>
              </tr>
              <tr>
                <td>Infinite</td>
                <td>{data.n_infinite}</td>
              </tr>
              <tr>
                <td>Infinite (%)</td>
                <td>{data.p_infinite}</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col md={5}>
          <table className="table table-dark table-striped table-borderless table-sm">
            <tbody>
              <tr>
                <td>Mean</td>
                <td>{data.mean}</td>
              </tr>
              <tr>
                <td>Minimum</td>
                <td>{data.min}</td>
              </tr>
              <tr>
                <td>Maximum</td>
                <td>{data.max}</td>
              </tr>
              <tr>
                <td>Zeroes</td>
                <td>{data.n_zeros}</td>
              </tr>
              <tr>
                <td>Zeroes (%)</td>
                <td>{data.p_zeros}</td>
              </tr>
              <tr>
                <td>Infinite (%)</td>
                <td>{data.p_infinite}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    );
  }
}

export default Index;
