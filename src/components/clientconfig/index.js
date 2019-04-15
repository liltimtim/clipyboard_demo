import { Component } from "preact";
import clipboard from "clipboard";
import { getClientConfig } from "../../interfaces/network";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
    this.copyToClip(
      `https://vigorous-shaw-8057b9.netlify.com/client/${this.state.clientId}`
    );
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
      let result = await this.execCopy(value);
      console.log(result);
      console.log("wrote to clipboard");
      this.setState({ copyValue: `successfully wrote to clipboard` });
    } catch (error) {
      console.log(error);
      this.setState({ copyValue: `${error}` });
    }
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
      </div>
    );
  }
}
