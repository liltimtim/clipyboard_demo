import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import Clients from "../routes/clients";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  handleClientRouteChange(name) {
    // this.setState({ name });
  }

  render() {
    const { name } = this.state;
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Clients path="/preparer/:prepid" />
        </Router>
      </div>
    );
  }
}
