import React, { Component } from 'react';

import './product-table.css';
import ProductCategoryRow from "../product-category-row";
import ProductRow from "../product-row";

export default class ProductTable extends Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
                lastCategory = product.category;
            }

            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
        })

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
