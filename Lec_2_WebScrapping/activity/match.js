let request = require("request");
let cheerio = require("cheerio");

function getMatch(link){
    request(link , cb);
}

function cb(error , response , data){
    myFun(data);
}

function myFun(html){
    let ch = cheerio.load(html);

    let bothInnings = ch('.card.content-block.match-scorecard-table .Collapsible');
    // [ <div class="Collapsible"> </div> , <div class="Collapsible"> </div>   ]
    console.log(bothInnings.length);
    for(let i=0 ; i<bothInnings.length ; i++){
        let teamName = ch(bothInnings[i]).find("h5").text();
        // teamName.split("Innings"); => [ "Delhi Capitals " , " (20 overs maximum)"  ];
        teamName = teamName.split("Innings")[0].trim();
        console.log(teamName);
        let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
        // [ <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr>]
        for(let j=0 ; j<allTrs.length-1; j++){
            let allTds = ch(allTrs[j]).find("td");
            // [  <td></td> ,<td></td> ,<td></td> ,<td></td> ,<td></td> ,<td></td> ,<td></td> ,<td></td>];
            if(allTds.length > 1){
                let batsmanName = ch(allTds[0]).find("a").text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim();
                let sixes = ch(allTds[6]).text().trim();
                let strikeRate = ch(allTds[7]).text().trim();
                // string interpolation
                console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} SR = ${strikeRate}`)
            }
        }

        console.log("############################################################");

    }

}


module.exports = getMatch;