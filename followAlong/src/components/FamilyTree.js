import React, { useContext } from "react";

import Parents from "./Parents";
import Siblings from "./Siblings";

import FamilyContext from "./../contexts/FamilyContext";

export default function FamilyTree(props) {
  const activeFamily = useContext(FamilyContext);

  return (
    <section className="FamilyTree">
      <h1>{activeFamily.familyName}</h1>
      <h2>Parents</h2>

      <Parents family={activeFamily} />

      <div className="spacer" />
      <h2>Siblings</h2>
      
      <Siblings family={activeFamily} />
    </section>
  );
}
