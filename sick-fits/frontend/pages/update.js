import UpdateItem from "../components/UpdateItem";

const Update = ({ query: { id } }) => {
  return (
    <div>
      <UpdateItem id={id} />
    </div>
  );
};

export default Update;
