import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import Footer from "./component/footer";
import Navleft from "./component/navleft";
import Header from "./component/header";
import Home from "./page/home"
import "./admin.css"

class Admin extends Component {
    render() {
        return (
            <Row>
                <Col span={4} className="navleft">
                    <Navleft ></Navleft>
                </Col>
                <Col span={20} className="main">
                    <Header></Header>
                    <div className="main-bottom">
                        {this.props.children}
                    </div>
                    <Footer></Footer>

                </Col>
            </Row >
        )
    }
}

export default Admin;