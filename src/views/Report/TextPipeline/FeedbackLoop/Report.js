import React from 'react';
import { Table } from 'react-bootstrap';
// import {Gallery} from 'react-grid-gallery';

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);

  return (
    <section>
      <h6 className="tablename">{title}</h6>
      <Table bordered responsive size="sm">
        {keys.map((key) => <tr><td>{key}</td><td>{data[key]}</td></tr>)}
      </Table>
    </section>
  )
}

export default Index;
