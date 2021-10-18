import React, { Component } from 'react';

import './search-bar.scss';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.onToggleCheckbox = this.onToggleCheckbox.bind(this);
        this.onFilterText = this.onFilterText.bind(this);
    }

    onToggleCheckbox(event) {
        this.props.onStockChecked(event.target.checked);
    }

    onFilterText(event) {
        this.props.onFilterText(event.target.value.toLowerCase());
    }

    render() {
        const { filterText, isStockChecked } = this.props;
        return (
            <form className="SearchBar">
                <input
                    className="SearchBar__text-input"
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={this.onFilterText} />
                <p>
                    <input
                        className="SearchBar__checkbox"
                        type="checkbox"
                        id="stock-checkbox"
                        checked={isStockChecked}
                        onClick={this.onToggleCheckbox} />
                    <label
                        className="SearchBar__label"
                        htmlFor="stock-checkbox">
                        Only show products in stock.
                    </label>
                </p>
            </form>
        );
    }
}
