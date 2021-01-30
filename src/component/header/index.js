import React, { Component } from "react";
import Util from "../../utils/utils";
import { Row, Col } from "antd";
import axios from "../../axios/index";
import "./index.css";

class Header extends Component {
    state = {
        name: "",
        sysTime: ""
    }
    componentWillMount() {
        this.setState({
            name: "17dian"
        })

        setInterval(() => {
            let sysTime = Util.formateDate(Date.now())
            this.setState({ sysTime })
        }, 1000);
        this.getWeather()
    }
    getWeather() {
        // axios.jsonp({
        //     url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent('北京') + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        // }).then((res) => {

        //     if (res.status == 'success') { }
        // })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24" >
                        <span>{this.state.name}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="date">首页</Col>
                    <Col span={20} className="weather-detail">
                        <span className="weather-detail-item">{this.state.sysTime}</span>
                        <span>晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Header;