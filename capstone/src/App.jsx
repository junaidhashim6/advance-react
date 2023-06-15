import "./categories.scss";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/Shop";
import SignIn from "./routes/SignIn";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
