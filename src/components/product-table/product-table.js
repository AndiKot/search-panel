import React, { Component } from 'react';

import ProductCategoryRow from "../product-category-row";
import ProductRow from "../product-row";

import './product-table.css';

export default class ProductTable extends Component {
    constructor(props) {
        super(props);

        this.makeRows = this.makeRows.bind(this);
    }

    makeRows({ products, filterText, isStockChecked }) {
        let lastCategory = null;
        const rows = [];

        products.forEach((product) => {
            if (product.name.toLowerCase().indexOf(filterText) === -1) {
                return null;
            }

            if (isStockChecked && !product.stocked) {
                return null;
            }

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
        });
        return rows;
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{this.makeRows(this.props)}</tbody>
            </table>
        );
    }
}
