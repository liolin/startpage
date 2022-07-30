import { useState } from "react";
import './App.css';
import Bookmarks from "./components/Bookmarks";

function App() {
    const [sections, setSections] = useState([
	{
	    name: "reddit",
	    pages: [
		{name: "unixporn", url: "https://reddit.com/r/unixporn"},
		{name: "emacs", url: "https:://reddit.com/r/emacs"}
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
      <div>
	  <Bookmarks sections={sections} />
      </div>
  );
}

export default App;
