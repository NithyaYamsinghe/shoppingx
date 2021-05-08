import { ShoppingConsumer } from "./../context/Context";

const UserLogin = () => {
  return (
    <ShoppingConsumer>
      {(value) => {
        const { name } = value;
        return <div>{name}</div>;
      }}
    </ShoppingConsumer>
  );
};

export default UserLogin;
