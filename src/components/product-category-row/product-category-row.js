import React, { Component } from 'react';

import './product-category-row.css';

export default class ProductCategoryRow extends Component {
    render() {
        const { category } = this.props;

        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}
