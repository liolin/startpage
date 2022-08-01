import React from "react";
import Section, {Prop as SectionProp} from "./Section";

interface Prop {
    sections: SectionProp[],
}

const Bookmarks: React.FC<Prop> = ({sections}) => {
    return (
	<div>
	    <h2 className="font-mono font-bold text-4xl pb-4 text-slate-50">Bookmarks</h2>
	    <div className="flex flex-wrap divide-x">
		{sections.map((section, index) => (
		    <Section name={section.name} pages={section.pages} key={index} />
		))}
	    </div>
	</div>
    )
}

export default Bookmarks;
