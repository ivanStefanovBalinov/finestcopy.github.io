import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Layout/navbar/Navbar";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {navigation.state === "loading" && <h2>Loading...</h2>}
      <Outlet />
    </>
  );
};

export default RootLayout;
