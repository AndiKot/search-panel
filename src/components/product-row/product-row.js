import React, { Component } from 'react';

import './product-row.css'

export default class ProductRow extends Component {
    render() {
        const product = this.props.product;

        const name = product.stocked
            ? product.name
            : <span className="product-stock">{product.name}</span>;

        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {product.price}
                </td>
            </tr>
        );
    }
}
