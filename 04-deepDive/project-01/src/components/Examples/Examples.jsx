import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButtons/TabButton";
import SectionDivider from "../SectionDivider";
import Tabs from "../TabButtons/Tabs";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  const buttonArray = Object.keys(EXAMPLES);

  const showCode = (selectedButton) => {
    setTabContent(selectedButton);
  };
  console.log(tabContent);

  return (
    <SectionDivider title="Examples" id={"examples"}>
      {/* Defined a "Tabs" component with multiple slots and passed the entire code for generating tabs or buttons to the buttons={} prop to the Tabs wrapper which then wraps the tab-content displayed below -- this allows us to maintain the state (tab content) in the component where we use the tabs to control state but also have a reusable component to build a menu of tabs that displays content  */}
      <Tabs
        buttons={buttonArray.map((item) => (
          <TabButton key={item} isSelected={tabContent === item} onClick={() => showCode(item)}>
            {item.length <= 3 ? item.toUpperCase() : item.slice(0, 1).toUpperCase() + item.slice(1)}
          </TabButton>
        ))}
      >
        <div id="tab-content">
          <p>{!EXAMPLES[tabContent] && "Please select a topic"}</p>
          <h3>{EXAMPLES[tabContent]?.title}</h3>
          <p>{EXAMPLES[tabContent]?.description}</p>
          <pre>
            <code className="code">{EXAMPLES[tabContent]?.code}</code>
          </pre>
        </div>
      </Tabs>
    </SectionDivider>
  );
}
