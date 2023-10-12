import { useEffect } from "react";

import "./Alert.scss";

export const Alert = ({ message = "", closeAlert }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 4000);
    return () => {
      clearTimeout(timerId);
    };
    //eslint-disable-next-line
  }, [message]);
  return message && <span className="alert">{message}</span>;
};
