// callback function
// high order function
let request = require("request");
let cheerio = require("cheerio");
const getAllMatches = require("./allMatches");


request( "https://www.espncricinfo.com/series/_/id/8048/season/2020/indian-premier-league" , cb );


function cb(error , response , data){
    fun(data);
}


function fun(html){

    let ch = cheerio.load(html);
    let aTag = ch(".widget-items.cta-link a");
    // <a data-hover="View All Results" class="label blue-text blue-on-hover" target="_self" rel="" href="/scores/series/8048/season/2020/indian-premier-league?view=results">View All Results</a>
    let link = aTag.attr("href");
    let completeLink = "https://www.espncricinfo.com"+link;
    getAllMatches(completeLink);
}
