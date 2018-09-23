import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchResultItem from "../components/SearchResultItem";
import DetailedSearchItem from "./../pages/DetailedSearchItem";
import firebase from "firebase/app";
import "firebase/database";

import HeaderNav from "../components/HeaderNav";
import homeScreenImage from "../asset/082616_childsports_THUMB_LARGE.jpg";

export default class SearchHome extends Component {
    state = {
        searchResults: [],
        detailedResult: null,
        searchBarTop: "30%",
        searchBarBackgroundColor: "white",
        SearchBar: true
    };

    viewDetailedItem(item) {
        this.setState({ searchResults: [] });
        this.setState({ detailedResult: item });
    }

    onSearchPerformed(value) {
        const getRef = firebase.database().ref("programs");
        const pageResults = [];
        const self = this;
        this.setState({
            SearchBar: false
        });
        const promise = new Promise(function(resolve) {
            getRef.orderByChild("programs/id").on("child_added", res => {
                const result = res.val();
                if (result) {
                    // Simple match on the query
                    if (result.name.toLowerCase().includes(value)) {
                        pageResults.push(result);
                    }
                    resolve();
                }
            });
        });
        promise.then(function() {
            if (pageResults.length) {
                self.setState({ searchBarTop: "10%" });
            } else {
                self.setState({ searchBarTop: "30%" });
            }
            self.setState({ searchResults: pageResults });
            self.setState({ detailedResult: null });
        });
    }

    render() {
        // Creates a specific item result
        const createSearchItem = function(searchResult) {
            return (
                <div
                    key={searchResult.name}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                >
                    <SearchResultItem
                        item={searchResult}
                        viewDetailedItem={this.viewDetailedItem.bind(this)}
                    />
                </div>
            );
        };

        const createDetailedItem = function(context) {
            const detailedResult =
                context && context.state && context.state.detailedResult;
            if (detailedResult) {
                return <DetailedSearchItem item={detailedResult} />;
            }
        };

        const showHomepageImage = function(context) {
            const hasResults =
                context &&
                context.state &&
                (context.state.detailedResult || context.state.searchResults);
            if (!hasResults || hasResults.length === 0) {
                return (
                    <img
                        style={{ position: "absolute" }}
                        src={homeScreenImage}
                    />
                );
            }
            return null;
        };

        return (
            <div
                className="search-home"
                style={{
                    height: "auto",
                    minHeight: "100%",
                    paddingBottom: "200px",
                    backgroundColor: "#f3f3f3"
                }}
            >
                <HeaderNav />
                {showHomepageImage(this)}
                <SearchBar
                    backgroundColor={this.state.searchBarBackgroundColor}
                    onSearchPerformed={this.onSearchPerformed.bind(this)}
                    searchBarTop={this.state.searchBarTop}
                />
                <div
                    style={{
                        width: "70%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    {this.state.searchResults.map(createSearchItem, this)}
                    {createDetailedItem(this)}
                </div>
            </div>
        );
    }
}
