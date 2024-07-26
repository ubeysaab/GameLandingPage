import React from "react";
import "../sass/components/_section.scss";

function Section(props) {

  return <div className={` section ${props.className}`}>{props.children}</div>;
}

export const SectionContent = (props) => {
  const bgImg = props.bgImage ? {backgroundImage:`url(${props.bgImage})`} : {};
  return (
    <div className={`section__content ${props.className}`} style={bgImg}>
      {props.children}
    </div>
  );
};

export default Section;
