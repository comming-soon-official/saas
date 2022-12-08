import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Gallery } from '../../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const Index=(props)=> {
    const { data, path, t } = props;
    // var keys = Object.keys(data);
    //<p>{data.one_liner}</p>
    const test = () => {
      var zip = new JSZip()
      for (let i = 0; i < data.img_path.length; i++) {
        let filename = `meta_whitebox_image${i + 1}.png`
        let blob = fetch(path + data.img_path[i]).then(r => r.blob())
        zip.file(filename, blob, { binary: true })
      }
      zip.generateAsync({ type: "blob" })
        .then(function (content) {
          // see FileSaver.js
          saveAs(content, "meta_whitebox_images.zip");
        })
    }
    /* const test = () => {
      for (let i = 0; i < data.img_path.length; i++) {
        const a = document.createElement('a')
        a.href = path + data.img_path[i]
        a.download = `meta_whitebox_image${i + 1}`
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a)
      }
    } */

    return (
      <Row id="meta-whitebox">
        <Col>
          <h6 className="subtitle">{t("image.metamorphic.white")}</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className='myButton' onClick={test}>
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </Button>
          {/* <Row align="center">
            <Col className="col-md-12">
              <h5 className="subtitle">
                {data.img_path.map(item => (
                  <a className="myLink" href={path + item} download target="_self">
                    Download Whitebox Images <FontAwesomeIcon icon={faArrowCircleDown} />
                  </a>
                ))}
              </h5>
            </Col>
          </Row> */}
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    );
}

export default withTranslation("common")(Index);
