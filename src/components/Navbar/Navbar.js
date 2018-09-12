import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import UserInfo from './UserInfo/UserInfo';
import NavbarList from './NavbarList/NavbarList';
import Footer from './Footer/Footer';
import './styles.css';
import {Button} from 'react-materialize';
import Header from '../Header/Header';

const mql = window.matchMedia(`(min-width: 800px)`);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  
  render() {
    return (
      <div>
        <Sidebar
        sidebar={<b><UserInfo /><NavbarList /><Footer /></b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}>
        <Button onClick={() => this.onSetSidebarOpen(true)}>Open sidebar</Button>
        </Sidebar>
        <Header />
      </div>
    );
  }
}

export default Navbar;