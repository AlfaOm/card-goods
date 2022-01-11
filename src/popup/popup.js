import React, { useEffect } from "react";
import { Wrapper, Header, Close } from "./styled";

export default function PopUp({ isShow, onClose, title, children }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);

  return isShow ? (
    <Wrapper>
      <Header>
        {title}{" "}
        <Close size="small" onClick={onClose}>
          X
        </Close>
      </Header>
      {children}
    </Wrapper>
  ) : null;
}
