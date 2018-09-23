import React, { Component } from "react";
// import axios from "axios";
import firebase from "firebase/app";
import "firebase/database";

class SearchResults extends Component {
    state = {
        data: {}
    };
    componentDidMount() {
        console.log("Search page Loaded");
        // axios.get("/ibrokethis-9b72f/us-central1/helloWorld").then(res => {
        //   this.setState({ data: res });
        // });
        //example get from firebase database
        const getRef = firebase.database().ref("Ref/CRAId");
        getRef.on("value", res => {
            console.log(res.val());
        });
    }
    render() {
        console.log(this.state.data);
        return (
            <div className="Search-Page">
                <header className="App-header">
                    <h1>Search Page</h1>
                    <nav>{/*<Link to="/Test">Test</Link>*/}</nav>
                </header>
            </div>
        );
    }
}

export default SearchResults;
