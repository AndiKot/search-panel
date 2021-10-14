import React, { Component } from 'react';

import './filterable-product-table.css';
import SearchBar from "../search-bar";
import ProductTable from "../product-table";

export default class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}
