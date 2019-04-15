import style from "./style";
import ClientConfig from "../../components/clientconfig";

const Client = props => {
  const { name } = props;
  return (
    <div class={style.client}>
      <h1>Welcome</h1>
      <ClientConfig clientid={props.clientid} />
    </div>
  );
};

export default Client;
