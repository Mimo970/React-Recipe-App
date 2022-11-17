import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items-container">
        <div className="copyright">
          &copy; Alexander 2022. All rights reserved.
        </div>
        <div className="social-icons">
          <FaFacebook className="social-icons" size={"25"} />
          <AiFillTwitterCircle className="middle-icon" size={"25"} />
          <AiFillInstagram className="social-icons" size={"25"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import {
//   CDBFooter,
//   CDBBox,
//   // CDBFooterLink,
//   // CDBBtn,
//   // CDBIcon,
//   // CDBContainer,
// } from "cdbreact";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
// export const Footer = () => {
//   return (
//     <CDBFooter className="shadow">
//       <CDBBox
//         display="flex"
//         justifyContent="between"
//         alignItems="center"
//         className="mx-auto py-4 flex-wrap"
//         style={{ width: "80%" }}
//       >
//         <CDBBox display="flex" alignItems="center" justifyContent="start">
//           <small className="d-flex ml-2 align-items-center p-0">
//             &copy; Alexander 2022. All rights reserved.
//           </small>
//         </CDBBox>

//         <CDBBox display="flex" alignItems="center" justifyContent="end">
//           <FaFacebook size="4%" className="p-2" />
//           <AiFillTwitterCircle size="4.3%" className="mx-3 p-2" />
//           <AiFillInstagram size="4.3%" className="mr-0 p-2" />
//           {/* <FaInstagram size="4%" className="mr-0 p-2" /> */}
//         </CDBBox>
//       </CDBBox>
//     </CDBFooter>
//   );
// };
