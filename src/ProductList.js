import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {



  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th>Add
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.Id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                <Button onClick={()=>this.props.addToCart(product)} color="info">Add to Cart</Button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
