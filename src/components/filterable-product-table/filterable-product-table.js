import React, { Component } from 'react';

import SearchBar from "../search-bar";
import ProductTable from "../product-table";

import './filterable-product-table.css';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isStockChecked: false,
            filterText: '',
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                onStockChecked={(isStockChecked) => this.setState({isStockChecked})}
                onFilterText={(filterText) => this.setState({filterText})}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    isStockChecked={this.state.isStockChecked} />
            </div>
        );
    }
}
