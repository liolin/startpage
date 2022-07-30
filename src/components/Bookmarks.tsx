import React from "react";
import Section, {Prop as SectionProp} from "./Section";

interface Prop {
    sections: SectionProp[],
}

const Bookmarks: React.FC<Prop> = ({sections}) => {
    return (
	<>
	    {sections.map((section, index) => (
		<Section name={section.name} pages={section.pages} key={index} />
	    ))}
	</>
    )
}

export default Bookmarks;
