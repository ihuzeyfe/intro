import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

//json-server --watch db.json
export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id); //seoUrl olunca product değişiyo ve bu kod getProduct ı tek.çağırı
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId; //yani gönderilen seoUrl yi ekle demiş olduk
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart; // yani this state cart ı yeni bir değişkene atadık
    var addedItem = newCart.find((c) => c.product.id === product.id); //git bak bizim ürün o productlarda var mı? yada
    if (addedItem) {
      // burada seçtiğimizi bir daha sayı olarak eklemiyoruz.
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 }); // (array e eleman ekleme) eğer eleman yoksa ekle
    }

    this.setState({ cart: newCart }); // cart değerimiz newCart tır.
  };

  render() {
    let categoryInfo = { title: "Huzeyfe", baskaBirsey: "İstanbul" };
    let productInfo = { title: "İsmail" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart}></Navi>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//changecategory yi app de yazdık; çünkü biz bu fonksiyonu product liste de geçmek istiyoruz. şuan o kısmı yapmadık ama yapacağız. react da componentler arası birşey taşınamadığından biz yapacağımız şeyi app ye taşıdık oradan inherit olan tag orası olduğu için product içine taşıyabileceğiz. app nin state diye bir currentCategory si var ve biz o state i bir prop mantığı ile yukarıda çalıştırdık

// şimdi current category yi procut liste de taşıyalım
