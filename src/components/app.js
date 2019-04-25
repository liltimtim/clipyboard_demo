import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

import Clients from "../routes/clients";
import Client from "../routes/client";
import Home from "../routes/home";
import AppOpen from "../routes/appopen";
import Offices from "../routes/offices";

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
    // create blog
    var dynamicManifest = {
      name: `${Math.random()} Cliip`,
      short_name: `${Math.random()} Cliip`,
      start_url: "/",
      display: "standalone",
      orientation: "portrait",
      background_color: "#fff",
      theme_color: "#673ab8",
      icons: [
        {
          src: "/assets/icons/android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "/assets/icons/android-chrome-512x512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ]
    };
    let strManifest = JSON.stringify(dynamicManifest);
    var blobUtil = require("blob-util");
    var b = blobUtil.createBlob([strManifest], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    window.document.querySelector("#app-manifest").setAttribute("href", url);

    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <AppOpen path="/appopen" />
          <Clients path="/preparer/:prepid" />
          <Client path="/client/:clientid" />
          <Offices path="/offices/:officeid" />
        </Router>
      </div>
    );
  }
}
