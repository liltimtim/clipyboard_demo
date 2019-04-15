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
      clientId: props.clientid
    };
  }

  componentDidMount() {
    console.log("component loaded");
    this.refresh(this.state.clientId);
    console.log("did refresh about to copy to clip");
    // this.copyToClip();
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

  async copyToClip() {
    console.log("copying to clip");
    try {
      await navigator.clipboard.writeText("test");
      alert(await navigator.clipboard.readText());
    } catch (err) {
      alert("Can't copy to clipboard");
    }
  }

  render() {
    const { name } = this.state.config;
    return (
      <div>
        <h1>Hello there {name}!</h1>
        <textarea id={"invisible-copy"}>This is some text</textarea>
      </div>
    );
  }
}
