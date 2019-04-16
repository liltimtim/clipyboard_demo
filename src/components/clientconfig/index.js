import { Component } from "preact";
import { route } from "preact-router";
import {
  getClientConfig,
  sendClientEmail,
  sendAppOpenEmail
} from "../../interfaces/network";

export default class ClientConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        name: null
      },
      copyValue: "",
      clientId: props.clientid
    };
    this.textRef;
  }

  componentDidMount() {
    console.log("component loaded");
    this.refresh(this.state.clientId);
    console.log("did refresh about to copy to clip");
    this.copyToClip(`https://clippy.netlify.com/client/${this.state.clientId}`);
  }

  async refresh(clientId) {
    console.log(navigator);
    try {
      let config = await getClientConfig(clientId);
      this.setState({ config });
    } catch (err) {
      alert("cant get config");
    }
  }

  async copyToClip(value) {
    try {
      let result = await this.execCopy(`${value}`);
      console.log(result);
      console.log("wrote to clipboard");
      this.setState({ copyValue: `successfully wrote to clipboard` });
    } catch (error) {
      console.log(error);
      console.log("attempting alternative method");
      this.setState({ copyValue: `${error}` });
      // try the old way
      let el = document.createElement("textarea");
      el.textContent = `${value}`;
      el.select();
      let copyResult = document.execCommand("copy");
      let res = window.document.execCommand("copy");

      console.log(res);
      if (copyResult) {
        this.setState({ copyValue: `successfully wrote to clipboard` });
      }
    }
  }

  handleOnClickDownload() {
    // first send a sms w/ new link
    sendAppOpenEmail(this.state.config);
    route("/", true);
  }

  execCopy(text) {
    return new Promise((resolve, reject) => {
      navigator.clipboard.writeText(text).then(
        () => {
          return resolve();
        },
        () => {
          return reject("Cannot access or write to the clipboard");
        }
      );
    });
  }

  render() {
    const { name } = this.state.config;
    const { copyValue } = this.state;
    return (
      <div>
        <h1>Hello there {name}!</h1>
        <h3>{copyValue}</h3>
        <button onClick={() => this.handleOnClickDownload()}>
          Download Now!
        </button>
      </div>
    );
  }
}
