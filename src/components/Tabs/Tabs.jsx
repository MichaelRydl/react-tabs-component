import React, { useState } from "react";
import Tab from "../Tab/Tab";
import "./Tabs.css";

export default function Tabs(props) {
  const tabs = props.tabNames;

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="tablist" role="tablist">
        {tabs.map((tab, i) => (
          <Tab key={i} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </div>
      <p>{activeTab}</p>
    </div>
  );
}
