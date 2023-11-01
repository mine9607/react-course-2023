import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";
import SectionDivider from "../SectionDivider";

export default function CoreConcepts() {
  return (
    <SectionDivider title={"Core Concepts"} id={"core-concepts"}>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </SectionDivider>
  );
}
