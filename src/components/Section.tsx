import React from "react";
import Page, {Prop as PageProp} from "./Page";

export interface Prop {
    name: string,
    pages: PageProp[],
}

const Section: React.FC<Prop> = ({name, pages}) => {
    return (
	<div>
	<h1>{name}</h1>
	    {pages.map((page, index) => (
		<Page name={page.name} url={page.url} key={index} />
	    ))}
	</div>
    )
}

export default Section;
