import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import SearchResults from "./components/SearchResults";
import SearchHome from "./pages/SearchHome";
import OrgSignupSubmitted from "./pages/OrgSignupSubmitted";
import OrgSignupPage from "./pages/OrgSignupPage";
import DashboardPage from "./pages/DashboardPage";
import DetailedSearchItem from "./pages/DetailedSearchItem";

export default class router extends Component {
    render() {
        return (
            <Router>
                <div id="router-div">
                    <Route exact path="/" component={SearchHome} />
                    <Route path="/searchhome" component={SearchHome} />
                    <Route
                        path="/orgsignupsubmitted/:orgId"
                        component={OrgSignupSubmitted}
                    />
                    <Route path="/orgsignup" component={OrgSignupPage} />
                    <Route path="/dashboard/:orgId" component={DashboardPage} />
                    <Route
                        path="/detailedsearchitem"
                        component={DetailedSearchItem}
                    />
                </div>
            </Router>
        );
    }
}
