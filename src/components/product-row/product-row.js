import React, { Component } from 'react';

import './product-row.scss'

export default class ProductRow extends Component {
    render() {
        const { product } = this.props;
        const name = product.stocked
            ? <span className="product-stock">{product.name}</span>
            : product.name;

        return (
            <tr className="ProductTable__row">
                <td className="ProductTable__cell ProductTable--left">
                    {name}
                </td>
                <td className="ProductTable__cell ProductTable--right">
                    {product.price}
                </td>
            </tr>
        );
    }
}
