"use strict";


jQuery.get("https://www.reddit.com/r/aww/.json").then(function(d){
    let hits = d.data.children;
    for (let i = 1; i <= 10; i++) {

        $("#reddits").append(`
        <div>
            <span>${[i]}</span>
            <img src="${hits[i].data.thumbnail}" />
            <a href="http://www.reddit.com/${hits[i].data.permalink}">
                <h2>${hits[i].data.title}</h2>
            </a>
        </div>
        `);
    }
    $("#reddits").after(`<div id="bottom"><a href="https://www.reddit.com/r/aww/"><button>/r/aww ></button></a></div>`);

    

    console.log(hits[0].data)
})


 
