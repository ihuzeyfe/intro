import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let categoryInfo = {title:"Huzeyfe", baskaBirsey:"İstanbul"}
  let productInfo = {title:"İsmail"}
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} ></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
