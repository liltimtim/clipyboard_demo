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
    this.refresh(this.state.clientId);
    this.copyToClip();
  }

  async refresh(clientId) {
    console.log(navigator);
    let config = await getClientConfig(clientId);
    this.setState({ config });
  }

  async copyToClip() {
    try {
      await navigator.clipboard.writeText("test");
      alert(await navigator.clipboard.readText());
    } catch (err) {
      alert(err.message);
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
