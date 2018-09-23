import React, { Component } from "react";
import { Layout, Button, Modal, Col } from "antd";
import { Input } from "antd";

const { Content } = Layout;
const { TextArea } = Input;

class SearchResultItem extends Component {
    state = {
        showContactModal: false
    };

    checkIfButtonClicked(data, showModal) {
        if (typeof showModal === "boolean") {
            this.setState({ showContactModal: showModal });
            if (data && data.stopPropagation) data.stopPropagation();
            return false;
        }

        data.props.viewDetailedItem(data.props.item);
    }

    render() {
        return (
            <div
                className="search-item"
                onClick={this.checkIfButtonClicked.bind(null, this)}
            >
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        background: "#fff",
                        height: 180,
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <Col span={6}>
                        <div style={{ display: "inline-block" }}>
                            <img
                                src="https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png"
                                alt="blank stuff"
                                style={{
                                    display: "block",
                                    height: "100px",
                                    width: "100px"
                                }}
                            />
                            <Button
                                onClick={event => {
                                    this.checkIfButtonClicked(event, true);
                                    event.stopPropagation();
                                }}
                                style={{
                                    display: "block",
                                    marginTop: "15px"
                                }}
                                type="primary"
                            >
                                Contact me
                            </Button>
                            <Modal
                                title="Send an email"
                                centered
                                visible={this.state.showContactModal}
                                onClick={event => {
                                    this.checkIfButtonClicked(event, false);
                                }}
                                onCancel={event => {
                                    this.checkIfButtonClicked(event, false);
                                }}
                            >
                                <Input placeholder="email: " />
                                <br />
                                <TextArea
                                    rows={4}
                                    value={
                                        "Hi Weekend Fuelbag, Your program meets the specific needs of one of my students. I would like to learn more about your program. I found your program through Pairfect.org. Best,  "
                                    }
                                />
                            </Modal>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div
                            style={{
                                verticalAlign: "top",
                                marginLeft: "20px",
                                display: "inline-block"
                            }}
                        >
                            <h3>{this.props.item.name}</h3>
                            <a src="#">{this.props.item.organization.name}</a>
                            <p>{this.props.item.description}</p>
                        </div>
                    </Col>
                </Content>
            </div>
        );
    }
}

export default SearchResultItem;
