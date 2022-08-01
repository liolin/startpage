import React from "react";
import Page, {Prop as PageProp} from "./Page";

export interface Prop {
    name: string,
    pages: PageProp[],
}

const Section: React.FC<Prop> = ({name, pages}) => {
    return (
	<div className="pl-4 first:pl-0 first:pr-4">
	    <h3 className="font-mono font-bold text-2xl pb-2 text-slate-50">{name}</h3>
	    {pages.map((page, index) => (
		<Page name={page.name} url={page.url} key={index} />
	    ))}
	</div>
    )
}

export default Section;
