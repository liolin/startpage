import React from "react";

export interface Prop {
    name: string,
    url: string,
}

const Page: React.FC<Prop> = ({name, url}) => {
    return (
	<div>
	    <a className="font-mono text-slate-50 hover:text-green-700" href={url}>{name}</a>
	</div>
    )
}

export default Page;
