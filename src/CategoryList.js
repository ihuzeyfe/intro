import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
      categories: [
        { categoryId: 1, categoryName: "Bevereages" },
        { categoryId: 1, categoryName: "Apples" },
        { categoryId: 1, categoryName: "Oranges" },
      ],
    };
  

  render() {
    return (
      <div>
        <h3>{this.props.info.baskaBirsey}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
