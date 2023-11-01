import React from "react";

export default function Tabs({ children, buttons, ButtonWrapperType = "menu" }) {
  // make a constant with an upperCase character to indicate a Custom component and pass to the element tags
  // const ButtonWrapperType = buttonWrapperType;

  // shortcut - name the prop in the component starting with an Uppercase
  return (
    <>
      <ButtonWrapperType>{buttons}</ButtonWrapperType>
      {children}
    </>
  );
}
