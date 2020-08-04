import React from "react";
import "./Tab.css";

export default function Tab({ children, active, onClick }) {
  return (
    <div className={`tab tab_${children} ${active ? "active" : ""}`} onClick={onClick} role="tab">
      {children}
    </div>
  );
}
