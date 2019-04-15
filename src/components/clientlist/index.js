import { Component } from "preact";
import { fetchClients, sendClientEmail } from "../../interfaces/network";
/**
 *
 * @param {Array<{ name: String }>} clients
 */
const renderClients = (clients, handleOnClick) => {
  return (
    <table>
      <tr>
        <th>Client ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Temp Password</th>
        <th />
      </tr>
      {clients.map(client => clientElement(client, handleOnClick))}
    </table>
  );
};

const clientElement = (client, handleOnClick) => {
  return (
    <tr>
      <td>{client.id}</td>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.password}</td>
      <td>
        <button onClick={() => handleOnClick(client)}>Send Link</button>
      </td>
    </tr>
  );
};

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    const { clients, prepid } = props;
    this.state = {
      clients,
      prepid
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async handleSendLinkOnClick(client) {
    console.log(client);
    let result = await sendClientEmail(client);
    console.log(result);
  }

  async fetch() {
    const { prepid } = this.state;
    try {
      let result = await fetchClients(prepid);
      this.setState({ clients: result });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>{renderClients(this.state.clients, this.handleSendLinkOnClick)}</div>
    );
  }
}
