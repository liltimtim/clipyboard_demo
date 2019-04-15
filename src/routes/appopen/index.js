import style from "./style";
export default (AppOpen = props => {
  return (
    <div class={style.appopen}>
      <h1>Client should be prompted to open this via the app</h1>
    </div>
  );
});
