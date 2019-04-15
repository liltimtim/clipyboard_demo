import ClientList from "../../components/clientlist";
import style from "./style";

const Clients = props => {
  console.log(props);
  const { prepid } = props;

  var prepName = "";
  if (prepid) {
    switch (prepid) {
      case "0":
        prepName = "Dave's Tax Service LLC";
        break;
      case "1":
        prepName = "Bryan's Tax Service and Beyond!";
        break;
      case "2":
        prepName = "Tim's FabTax Preping";
        break;
      default:
        break;
    }
  }
  return (
    <div class={style.clients}>
      <h1>{prepName}</h1>
      <ClientList clients={[]} prepid={prepid} />
    </div>
  );
};

export default Clients;
