let category;

async function settingUp() {
    let data = await fetchingData();
    buildMenu(data.links);
    buildPage(data.settings);

    return data;
}

async function fetchingData() {
    let response = await fetch("settings.json");
    return await response.json();
}

function buildMenu(links) {
    links.forEach(function(v, i) {
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	let link = "";

	v.pages.forEach(function(v, i) {
	    link += "<a href=\"" + v.url + "\">" + v.name + "</a> | ";
	});

	td.innerHTML = link.substring(0, link.length-3);
	tr.innerHTML = "<th>" + v.name + "</th>";
	tr.appendChild(td);
	document.getElementById("table").appendChild(tr);
    });
}

function buildPage(settings) {
    document.getElementById("header").innerText = settings.header;
}

function resetCategory() {
    if ((category !== undefined && category !== null) && category.children !== undefined) {
	category.children[0].style.color = "";
	category = undefined;
    }
}

let data = settingUp();
document.onkeydown = function(e) {
    console.log(e.key);
    if (e.key == "Escape") {
	resetCategory();
	return;
    }

    if (isNaN(e.key)) {
	resetCategory();
	return;
    }

    if (category === undefined) {
	category = document.querySelector("#table > tr:nth-child("+e.key+")");
	if (category === null) {
	    resetCategory();
	    return;
	}
	console.log(category);
	category.children[0].style.color = "red"
    } else {
	let page = category.querySelector("td > a:nth-child("+e.key+")");
	console.log(page);
	resetCategory();

	let win = window.open(page.href, '_blank');
	win.focus();
    }
}
