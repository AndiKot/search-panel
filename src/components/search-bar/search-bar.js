import React, { Component } from 'react';

import './search-bar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock.
                </p>
            </form>
        );
    }
}
