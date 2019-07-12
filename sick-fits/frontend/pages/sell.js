import CreateItems from "../components/CreateItem";
import PleaseSignIn from "../components/PleaseSignIn";

const Sell = () => {
  return (
    <PleaseSignIn>
      <CreateItems />
    </PleaseSignIn>
  );
};

export default Sell;
