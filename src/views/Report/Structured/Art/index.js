import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import {Gallery} from 'react-grid-gallery';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      art: null
    }
  }

  componentDidMount() {
    const { path } = this.props;
    fetch(path + "art_results/query_data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          query: data
        });
      });

    fetch(path + "art_results/ART_data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          art: data
        });
      });
  }

  fetchRow = (rowID) => {
    // const { data } = this.props;
    const { art, query } = this.state;
    // var keys = Object.keys(data);
    var table1Data = query;
    var table2Data = art;
    var length1 = Object.keys(table1Data).length;
    var rowHtml = Object.keys(table2Data).map((column, j) => {
      if (j < length1) {
        return (
          <td key={j}>
            <Table bordered responsive size="sm">
              <tbody>
                <tr>
                  <td><b>Actual</b></td>
                  <td>{table1Data[column][rowID]}</td>
                </tr>
                <tr>
                  <td><b>Counter</b></td>
                  <td>{table2Data[column][rowID]}</td>
                </tr>
              </tbody>
            </Table>
          </td>
        );
      }
      else {
        return (
          <td key={j}>{table2Data[column][rowID]}</td>
        );
      }
    });
    return rowHtml;
  }

  render() {
    const { data, path, t } = this.props;
    const { art, query } = this.state;
    if (query === null || art === null) return null;
    const keys = Object.keys(data);
    var IMAGES = [{
      src: path + data[keys[3]],
      thumbnail: path + data[keys[3]],
      caption: keys[3],
      width: 800,
      height: 500
    }];
    var tableData = data[keys[2]];
    var cols = Object.keys(tableData);
    var rows = Object.keys(tableData[cols[0]]);
    return (
      <section id="adversarialtesting">
        <Row>
          <Col md={12}>
            <h2 className="title">{t("structured.art")}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>{data.one_liner}</p>
          </Col>
        </Row>
        <Row align="center">
          <Col className="col-md-4">
            <h5 className="subtitle">
              <a className="myLink" href={path + data["Training samples Download"]} target="_self">
                Training Samples <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
          <Col className="col-md-4">
            <h5 className="subtitle">
              <a className="myLink" href={path + data["Testing samples Download"]} target="_self">
                Testing Samples <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
          <Col className="col-md-4">
            <h5 className="subtitle">
              <a className="myLink" href={path + data["Query data Download"]} target="_self">
                Query Data <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table bordered responsive size="lg">
              <thead>
                <tr>
                  {cols.map((col, i) => <th key={i}>{col.toUpperCase()}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((key, i) => <tr key={i}>{this.fetchRow(key)}</tr>)}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="section">
            <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
          </Col>
        </Row>
      </section>
    );
  }
}

export default withTranslation("common")(Index);
