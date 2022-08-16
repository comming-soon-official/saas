import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Gallery } from "../../../../components";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Index = (props) => {
  const { data, path, t } = props;

  const test = () => {
    var zip = new JSZip();
    for (let i = 0; i < data.img_path.length; i++) {
      let filename = `meta_blackbox_image${i + 1}.png`;
      let blob = fetch(path + data.img_path[i]).then((r) => r.blob());
      zip.file(filename, blob, { binary: true });
    }
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "meta_blackbox_images.zip");
    });
  };

  return (
    <Row id="meta-blackbox">
      <Col className="section">
        <h6 className="subtitle">{t("image.metamorphic.black.title")}</h6>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className="myButton" onClick={test}>
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </Button>
        <p>{t("image.metamorphic.black.description")}</p>
        <Gallery data={data} path={path} />
      </Col>
    </Row>
  );
};

export default withTranslation("common")(Index);
