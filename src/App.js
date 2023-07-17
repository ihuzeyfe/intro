import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state={currentCategory:""}

  changeCategory = category => {
    this.setState({currentCategory: category.categoryName})
  }

  render() {
    let categoryInfo = { title: "Huzeyfe", baskaBirsey: "İstanbul" };
    let productInfo = { title: "İsmail" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


//changecategory yi app de yazdık; çünkü biz bu fonksiyonu product liste de geçmek istiyoruz. şuan o kısmı yapmadık ama yapacağız. react da componentler arası birşey taşınamadığından biz yapacağımız şeyi app ye taşıdık oradan inherit olan tag orası olduğu için product içine taşıyabileceğiz. app nin state diye bir currentCategory si var ve biz o state i bir prop mantığı ile yukarıda çalıştırdık

// şimdi current category yi procut liste de taşıyalım