import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButtons/TabButton";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data-with-examples";

function App() {
  const [tabContent, setTabContent] = useState();

  const buttonArray = Object.keys(EXAMPLES);

  const showCode = (selectedButton) => {
    setTabContent(selectedButton);
  };
  console.log(tabContent);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {buttonArray.map((item) => (
              <TabButton key={item} isSelected={tabContent === item} onClick={() => showCode(item)}>
                {item.length <= 3 ? item.toUpperCase() : item.slice(0, 1).toUpperCase() + item.slice(1)}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            <p>{!EXAMPLES[tabContent] && "Please select a topic"}</p>
            <h3>{EXAMPLES[tabContent]?.title}</h3>
            <p>{EXAMPLES[tabContent]?.description}</p>
            <pre>
              <code className="code">{EXAMPLES[tabContent]?.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
