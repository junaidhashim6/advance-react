// import { Outlet, Link } from "react-router-dom";
// import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
// import "../categories.scss";
// const Navigation = () => {
//   return (
//     <>
//       <div className="navigation">
//         <Link className="" to="/">
//           <CrwnLogo className="logo-container" />
//         </Link>
//         <div className="nav-links-container">
//           <Link className="nav-line" to="/shop">
//             Shop
//           </Link>
//           <Link className="nav-line" to="/signin">
//             SignIn
//           </Link>
//           {/* <Link className="nav-line" to="/cart">
//             Cart
//           </Link> */}
//         </div>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default Navigation;
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";

import "../categories.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
