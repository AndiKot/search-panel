import React, { Component } from 'react';

import './product-category-row.scss';

export default class ProductCategoryRow extends Component {
    render() {
        const { category, className } = this.props;

        return (
            <tr>
                <th className={className}
                    colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}
