import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Footer from './Footer/Footer'

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
      <Sidebar
        sidebar={<b><Footer/></b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
         <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default Navbar;