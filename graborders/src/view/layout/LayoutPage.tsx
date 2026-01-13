import React from "react";
import Header from "./Header";
import TabBottomNavigator from "./TabBottomNavigator";
import "./styles/style.css";
import ScrollToTop from "./ScrollToTop";
function LayoutPage(props) {
  return (
    <div className="">
      <ScrollToTop />
      <div className="children__content">{props.children}</div>
      <div style={{marginTop:60}}></div>
      <TabBottomNavigator />
    </div>
  );
}

export default LayoutPage;
