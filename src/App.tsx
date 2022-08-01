import { useState } from "react";
import './App.css';
import Bookmarks from "./components/Bookmarks";

function App() {
    const [sections] = useState([
	{
	    name: "reddit",
	    pages: [
		{name: "unixporn", url: "https://reddit.com/r/unixporn"},
		{name: "emacs", url: "https://reddit.com/r/emacs"}
	    ]
	},
	{
	    name: "news",
	    pages: [
		{name: "NZZ", url: "https://nzz.ch"}
	    ]
	}
    ]);

  return (
      <div className="h-screen bg-zinc-800 p-8">
	  <h1 className="fonto-mono text-8xl text-slate-50">Welcome to startpage</h1>
	  <Bookmarks sections={sections} />
      </div>
  );
}

export default App;
