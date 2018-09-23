import React, { Component } from "react";
import { Input } from "antd";

const Search = Input.Search;

class SearchBar extends Component {
    render() {
        return (
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={this.props.onSearchPerformed}
                className="search-bars"
                style={{
                    width: "70%",
                    display: "flex",
                    marginTop: this.props.searchBarTop,
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: this.props.backgroundColor,
                    color: "#16ada5",
                    bottom: "10%"
                }}
            />
        );
    }
}

export default SearchBar;
