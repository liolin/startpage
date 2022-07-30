import React from "react";

export interface Prop {
    name: string,
    url: string,
}

const Page: React.FC<Prop> = ({name, url}) => {
    return (
	<div>
	    <a href={url}>{name}</a>
	</div>
    )
}

export default Page;
