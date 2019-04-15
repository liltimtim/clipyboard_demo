import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

import Clients from "../routes/clients";
import Client from "../routes/client";
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
          <Client path="/client/:clientid" />
        </Router>
      </div>
    );
  }
}
