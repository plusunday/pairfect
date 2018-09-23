import React, { Component } from "react";
import axios from "axios";
import detailsPage from "./../asset/detailsPageElement.png";

class DetailedSearchItem extends Component {
    state = {
        programs: {
            name: "",
            description: "",
            criteria: {
                age: {
                    minAge: 0,
                    maxAge: 120
                },
                ethnicities: [],
                gender: {
                    female: false,
                    male: false,
                    other: false
                },
                income: {
                    min: 0,
                    max: 0
                }
            }
        },
        organizations: {
            email: "",
            phone: ""
        },
        id: {
            id: "-LN2QD_RiwRBQafYTipL"
        }
    };

    componentDidMount() {
        console.log("load");
        axios
            .get("/ibrokethis-9b72f/us-central1/getProgram")
            .then(res => {
                return res.data;
            })
            .then(data => {
                this.setState({ programs: data });
            });

        axios
            .get("/ibrokethis-9b72f/us-central1/getOrganization")
            .then(res => {
                return res.data;
            })
            .then(data => {
                this.setState({ organizations: data });
            });
    }
    render() {
        const { programs, organizations } = this.state;
        console.log(programs, organizations);
        const imgStyle = {
            width: "95%",
            height: "80%",
            margin: "auto",
            display: "block"
        };

        return (
            <div>
                <img src={detailsPage} style={imgStyle} />
            </div>
        );
    }
}

export default DetailedSearchItem;
