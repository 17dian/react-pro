import React, { Component } from "react";
import MenuList from "../../config/menuConfig"
import "./index.css";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../static/img/logo-ant.svg";
let SubMenu = Menu.SubMenu;

class Navleft extends Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuList);
        this.setState({ menuTreeNode })
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="nav-top">
                    <img src={logo}></img>
                    <h1 >Imooc MS</h1>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    theme="dark"
                    mode="vertical"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}


export default Navleft;