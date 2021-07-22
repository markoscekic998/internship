
const fs = require("fs");
fs.readFile("./playersdata.json", "utf8",(err, jsonString)=>{
if(err){
    console.log("Problem with data, please try again later");
 return
}
const allPlayers = JSON.parse(jsonString);

const maxPlayersTournament = 64;



// Pravila za zreb:
// napraviti vise funkcija za runde
// prva runda 64 igraca * teniseri ne mogu igrati sa igracem koji je za jedan rang visi/nisi od njih
// druga runda 32 igraca
// treca runda 16 igraca
// quater finals runda 8 igraca
// semi finals runda 4 igraca
// final 2 igraca

function firstRound(players){
 
const rankingsArr= players.reduce((rankings, player)=>{
  rankings.push(player.rang);
  return rankings;// very important
},[]);
//console.log(rankingsArr);

while(rankingsArr.length>maxPlayersTournament){ // ne sme biti vise od 64 igraca za turnir
    rankingsArr.pop();
   
}



function shuffledRankingsArr(arr){
    let currentIndex = arr.length, randomIndex;
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}
shuffledRankingsArr(rankingsArr);

const firstRoundPairsRanking = rankingsArr.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
// prebacujemo brojeve pojedinacne brojeve u nizu, u par
//console.log(firstRoundPairsRanking); /// sad imamo arr of arr parova nasumicnih igraca
 let firstPairsFullInfo= []
firstRoundPairsRanking.forEach(rangFE => {

let firstPair =rangFE[0]-1;// which 3 for example ///-1 je da bi se slozili brojevi koji shuffle dobio sa rangiranjem igraca 
let secondPair = rangFE[1]-1;// which is 43 for example

    
    
    firstPairsFullInfo.push([allPlayers[firstPair], allPlayers[secondPair]]);
 });

 
function firstRoundWinners(players){

let secondRoundPlayers =[]// those who random num choses is pushed into this arr
    for(let firstWin of players){
        let winners = Math.floor(Math.random() +0.5);//choses winner not loser!
        secondRoundPlayers.push(firstWin[winners]);//winners go to new round
    
    }
    secondRound(secondRoundPlayers);
function secondRound(players){
    
   
    let stringSecondRound =`Ucesnici druge runde: ${players.length} 
    `
    for(let i=0;i<players.length;i++){
        let playersString = players[i].player.split(' ');
        let firstName = playersString[0].charAt(0);
        let lastName =playersString[1];
    if(playersString>1){
         lastName =playersString[2];
    }
        
        stringSecondRound +=`  ${firstName}.${lastName} (${players[i].country, players[i].rang }) `;
    }
    console.log(stringSecondRound);
     //donja linija koda je potrebna da se naprave parovi ;
    const secondRoundPairs = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
  SecondRoundWinners(secondRoundPairs);
    function SecondRoundWinners(players){
        let secondRoundWinners =[];
        for(let secWin of players){
            let secondRoundWinnerAlg= Math.floor(Math.random() +0.5);
            secondRoundWinners.push(secWin[secondRoundWinnerAlg]);
            //pobednici druge runde
        }
     
        thirdRound(secondRoundWinners);
        function thirdRound(players){
            let stringThirdRound =`Ucesnici trece runde: ${players.length} 
    `
    for(let i=0;i<players.length;i++){
        let playersString = players[i].player.split(' ');
        let firstName = playersString[0].charAt(0);;
        let lastName =playersString[1];
        if(playersString>1){
            lastName =playersString[2];
       }
        stringThirdRound +=`   ${firstName}.${lastName} (${players[i].country, players[i].rang }) `;
    }
    console.log(stringThirdRound);
            const thirdRoundPairs =players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
            //napravljeni parovi za igranje trece runde
            //console.log(thirdRoundPairs);
            ThirdRoundWinners(thirdRoundPairs);
            function ThirdRoundWinners(players){
                let thirdRoundWinners =[];
                for(let thirdWin of players){
                    let thirdRoundWinnerAlg = Math.floor(Math.random()+0.5)
                    thirdRoundWinners.push(thirdWin[thirdRoundWinnerAlg]);
                }
               // console.log(thirdRoundWinners.length);
                QuarterFinals(thirdRoundWinners);
                function QuarterFinals(players){
                    let stringQuarter =`Ucesnici cetvrt finala: ${players.length} 
                    `
                    for(let i=0;i<players.length;i++){
                        let playersString = players[i].player.split(' ');
                        let firstName = playersString[0].charAt(0);;
                        let lastName =playersString[1];
                        if(playersString>1){
                            lastName =playersString[2];
                       }
                        stringQuarter +=`  ${firstName}.${lastName} (${players[i].country, players[i].rang }) `;
                    }
                    console.log(stringQuarter);
                    const quaterFinalPairs = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
                    let quarterFinalWinners=[];
                    for( let quartWin of quaterFinalPairs ){
                        let quartRoundWinnerAlg = Math.floor(Math.random()+0.5)
                        quarterFinalWinners.push(quartWin[quartRoundWinnerAlg]);

                    }
                    SemiFinals(quarterFinalWinners);
                    function SemiFinals(players){
                      let stringSemiFinals =`Ucesnici polu finala: ${players.length} `
                      for(let i=0;i<players.length;i++){
                        let playersString = players[i].player.split(' ');
                        let firstName = playersString[0].charAt(0);;
                        let lastName =playersString[1];
                        if(playersString>1){
                            lastName =playersString[2];
                       }
                        stringSemiFinals +=`  ${firstName}.${lastName} (${players[i].country, players[i].rang }) `;
                    }
                    const semiFinPars = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
                    console.log(stringSemiFinals);
                    let semiFinalsWinners =[];
                    for (semiWin of semiFinPars){
                        let semiQuarterWinAlg = Math.floor(Math.random()+0.5)
                        semiFinalsWinners.push(semiWin[semiQuarterWinAlg])
                    }
                        Finals(semiFinalsWinners)
                        function Finals(players){
                            let finalPlayers= 'Ucesnici finala';
                            for(let i=0;i<players.length;i++){
                                let playersString = players[i].player.split(' ');
                                let firstName = playersString[0].charAt(0);;
                                let lastName =playersString[1];
                                if(playersString>1){
                                    lastName =playersString[2];
                               }
                                finalPlayers +=`   ${firstName}.${lastName} (${players[i].country, players[i].rang }) `;
                            }
                            console.log(finalPlayers);
                        for(let i=0; i<players.length; i++){
                            let wAlg = Math.round(Math.random()+5);
                            winner = `Pobednik Internship2021 turnira je: ${players[i].player}(${players[i].country, players[i].rang }) `;
                        }
                         console.log(winner);
                        }
                    }
                }
            }
        }

    }
}

} firstRoundWinners(firstPairsFullInfo);



}
firstRound(allPlayers);

});


