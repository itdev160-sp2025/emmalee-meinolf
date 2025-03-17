
//Header object with literal notation
var header = {
    title: "The Best VS Code Extensions for Front End Web Developers",
    pageAuthor: "by Emmalee Meinolf",

    getTodaysDate: function(){

        var date = new Date();
        return date.toDateString();
    }

}

//Package data with constructor object
function Package(name, author, description, downloads, stars, id){

    this.name = name;
    this.author = author;
    this.description = description;
    this.downloads = downloads;
    this.stars = stars;
    this.id = id;

    this.downloadToString = function(){

        return this.downloads.toLocaleString();
    }

}

//Initializing package objects
var trailing = new Package("Trailing Spaces", "Shardul Mahadik", "Highlight trailing spaces and delete them in a flash!", 2658293, "* * * * *", "pack_1");
var path = new Package("Path Intellisense", "Christian Kholer","Visual Studio Code plugin that autocompletes filenames.", 15660256, "* * * * *", "pack_2");

//Package array

/*
extensions = {trailing, path}
*/

//Display header info
var getElm = function(id){
    return document.getElementById(id);
}

h_titleElm = getElm("mainTitle");
h_authElm = getElm("author");
h_date = getElm("date");

h_titleElm.textContent = header.title;
h_authElm.textContent = header.pageAuthor;
h_date.textContent = header.getTodaysDate();

//Display package info

/*
Everything is drawn out and done like this because a bunch of code wouldn't function right before the deadline and this was the only way it started working again
*/

nameElm1 = document.getElementById("pack_1_name");
nameElm1.textContent = trailing.name;
authorELm1 = document.getElementById("pack_1_author");
authorELm1.textContent = trailing.author;
descElm1 = document.getElementById("pack_1_description");
descElm1.textContent = trailing.description;
downElm1 = document.getElementById("pack_1_downloads");
downElm1.textContent = trailing.downloadToString() + " downloads!";
starsElm1 = document.getElementById("pack_1_stars");
starsElm1 =  trailing.stars;


nameElm2 = document.getElementById("pack_2_name");
nameElm2.textContent = path.name;
authorELm2 = document.getElementById("pack_2_author");
authorELm2.textContent = path.author;
descElm2 = document.getElementById("pack_2_description");
descElm2.textContent = path.description;
downElm2 = document.getElementById("pack_2_downloads");
downElm2.textContent = path.downloadToString() + " downloads!";
starsElm2 = document.getElementById("pack_2_stars");
starsElm2 =  path.stars;

/*
nameElm1 = document.getElementById("pack_1_name");
nameElm1.textContent = extensions[0].name;
authorELm1 = document.getElementById("pack_1_author");
authorELm1.textContent = extensions[0].author;
descElm1 = document.getElementById("pack_1_description");
descElm1.textContent = extensions[0].description;
downElm1 = document.getElementById("pack_1_downloads");
downElm1.textContent = extensions[0].downloadToString() + " downloads!";
starsElm1 = document.getElementById("pack_1_stars");
starsElm1 =  extensions[0].stars;


nameElm2 = document.getElementById("pack_2_name");
nameElm2.textContent = extensions[0].name;
authorELm2 = document.getElementById("pack_2_author");
authorELm2.textContent = extensions[0].author;
descElm2 = document.getElementById("pack_2_description");
descElm2.textContent = extensions[0].description;
downElm2 = document.getElementById("pack_2_downloads");
downElm2.textContent = extensions[0].downloadToString() + " downloads!";
starsElm2 = document.getElementById("pack_2_stars");
starsElm2 =  extensions[0].stars;
*/


