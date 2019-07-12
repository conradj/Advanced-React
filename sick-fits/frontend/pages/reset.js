import Reset from "../components/Reset";

const Sell = props => {
  return (
    <div>
      <Reset resetToken={props.query.resetToken} />
    </div>
  );
};

export default Sell;
