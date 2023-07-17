import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
      categories: [],

    };
    

    componentDidMount(){
      this.getCategories();
    }

    //jsondan verileri çekeceğiz artık aşağıdaki fonks o yüzden yazdık...
    // önce linki çalıştırıyor çalışıp response geliyo ve json a döndürüyor oda aşağıya döndürüyor aşamalı

    getCategories = () => {
      fetch("http://localhost:3000/categories")
      .then(response=>response.json())
      .then(data=>this.setState({categories:data}));
    }
    

  // şimdi sıra ürünleri listelemeye geldi...

  render() {
    return (
      <div>
        <h3>{this.props.info.baskaBirsey}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={()=>this.props.changeCategory(category)}
              key={category.Id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>

        <h4>
          {this.props.currentCategory}
        </h4>
      </div>
    );
  }
}
