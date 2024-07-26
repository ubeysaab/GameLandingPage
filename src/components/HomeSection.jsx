import React from "react";

import Section, { SectionContent } from "./Section";

function HomeSection(props) {
  return (
    <Section className={props.className}>
      <SectionContent
        className={props.contentClassName}
        bgImage={props.bgImage}
      >
        {props.children}
      </SectionContent>
    </Section>
  );
}

export default HomeSection;
