
const fs = require("fs");
fs.readFile("./playersdata.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Problem with data, please try again later");
        return
    }
    const allPlayers = JSON.parse(jsonString);

    const maxPlayersTournament = 64;
    const N = 64;
    const optimalNumOfPlayers = [2, 4, 8, 16, 32, 64];

    //sredili smo za 2 igraca
    // sredili smo za 4 igraca
    // sredili smo za 8 igraca
    // sredili smo za 16 igraca
    // sredili smo za 32 igraca
    //sredili smo za 64 igraca
    // ostalo je samo da promenim string koji se prikazuje


    // Pravila za zreb:
    // napraviti vise funkcija za runde
    // prva runda 64 igraca * teniseri ne mogu igrati sa igracem koji je za jedan rang visi/nisi od njih
    // druga runda 32 igraca
    // treca runda 16 igraca
    // quater finals runda 8 igraca
    // semi finals runda 4 igraca
    // final 2 igraca

    try {
        if (N > maxPlayersTournament) {
            throw 'Too much number of players';
        }
        if (optimalNumOfPlayers.indexOf(N) === -1) {
            throw 'Optimal Numbers of players is 2,4,8,16,32,64';

        }

    } catch (Exception) {
        console.log(Exception)
    }


    //separate rankings from all the players arr;
    const rankingsArr = allPlayers.reduce((rankings, player) => {
        rankings.push(player.rang);
        return rankings;// very important
    }, []);




    let currentIndex = rankingsArr.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [rankingsArr[currentIndex], rankingsArr[randomIndex]] = [rankingsArr[randomIndex], rankingsArr[currentIndex]];
    }



    while (rankingsArr.length > N) { // ne sme biti vise od N igraca za turnir
        rankingsArr.pop();

    }
    firstRound(allPlayers, N)
    function firstRound(players, N) {

        const firstRoundPairsRanking = rankingsArr.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
        // prebacujemo brojeve pojedinacne brojeve u nizu, u par
        let firstPairsFullInfo = []
        firstRoundPairsRanking.forEach(rangFE => {

            let firstPair = rangFE[0] - 1;// which 3 for example ///-1 je da bi se slozili brojevi koji shuffle dobio sa rangiranjem igraca 
            let secondPair = rangFE[1] - 1;// which is 43 for example

            firstPairsFullInfo.push([allPlayers[firstPair], allPlayers[secondPair]]);
        });
        let firstRoundPairsString = ``;
        for (firstPairs of firstPairsFullInfo) {
            firstRoundPairsString += `${firstPairs[0].player} (${firstPairs[0].country} #${firstPairs[0].rang}) - ${firstPairs[1].player} (${firstPairs[1].country} #${firstPairs[1].rang}) \n`;
        }
        console.log(`Parovi prve runde su:\n${firstRoundPairsString}`);




        let firstRoundWin = []// those who random num choses is pushed into this arr
        for (let firstWin of firstPairsFullInfo) {
            let winners = Math.floor(Math.random() + 0.5);//choses winner not loser!
            firstRoundWin.push(firstWin[winners]);//winners go to new round

        }


        if (firstRoundWin.length > 1) {
            secondRound(firstRoundWin);// znaci ako pobednika ima vise od jednog pobednika, ulaze u sledecu funkciju(rundu)
        } else {
            console.log(`Pobednik Internship2021 turnira je: ${firstRoundWin[0].player} (${firstRoundWin[0].country}, #${firstRoundWin[0].rang}) !!!`);
        }

        function secondRound(players) {

            
            const secondRoundPairs = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])

            let secondRoundPairsString = ``;
            for (let secPairs of secondRoundPairs) {
                secondRoundPairsString += `${secPairs[0].player} (${secPairs[0].country} #${secPairs[0].rang}) - ${secPairs[1].player} (${secPairs[1].country} #${secPairs[1].rang}) \n`;
            }
            console.log(`Parovi druge runde su:\n${secondRoundPairsString}`)


            let secondRoundWinners = [];
            for (let secWin of secondRoundPairs) {
                let secondRoundWinnerAlg = Math.floor(Math.random() + 0.5);
                secondRoundWinners.push(secWin[secondRoundWinnerAlg]);
            }

            if (secondRoundWinners.length > 1) {
                thirdRound(secondRoundWinners);// znaci ako pobednika ima vise od jednog pobednika, ulaze u sledecu funkciju(rundu)
            } else {
                console.log(`Pobednik Internship2021 turnira je: ${secondRoundWinners[0].player} (${secondRoundWinners[0].country}, #${secondRoundWinners[0].rang}) !!!`);
            }


            function thirdRound(players) {

                const thirdRoundPairs = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
                //napravljeni parovi za igranje trece runde
                let thirdRoundPairsString = ``;
                for (thrPairs of secondRoundPairs) {
                    thirdRoundPairsString += `${thrPairs[0].player} (${thrPairs[0].country} #${thrPairs[0].rang}) - ${thrPairs[1].player} (${thrPairs[1].country} #${thrPairs[1].rang}) \n`;
                }
                console.log(`Parovi trece runde su:\n${thirdRoundPairsString}`)

                let thirdRoundWinners = [];
                for (let thirdWin of thirdRoundPairs) {
                    let thirdRoundWinnerAlg = Math.floor(Math.random() + 0.5)
                    thirdRoundWinners.push(thirdWin[thirdRoundWinnerAlg]);
                }
                // console.log(thirdRoundWinners.length);
                if (thirdRoundWinners.length > 1) {
                    QuarterFinals(thirdRoundWinners);// znaci ako pobednika ima vise od jednog pobednika, ulaze u sledecu funkciju(rundu)
                } else {
                    console.log(`Pobednik Internship2021 turnira je: ${thirdRoundWinners[0].player} (${thirdRoundWinners[0].country}, #${thirdRoundWinners[0].rang}) !!!`);
                }


                function QuarterFinals(players) {

                    const quaterFinalPairs = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])

                    let quaterFinalPairsString = ``;
                    for (let qtrPairs of quaterFinalPairs) {
                        quaterFinalPairsString += `${qtrPairs[0].player} (${qtrPairs[0].country} #${qtrPairs[0].rang}) - ${qtrPairs[1].player} (${qtrPairs[1].country} #${qtrPairs[1].rang}) \n`;
                    }
                    console.log(`Parovi osmine finala su:\n${quaterFinalPairsString}`)

                    let quarterFinalWinners = [];
                    for (let quartWin of quaterFinalPairs) {
                        let quartRoundWinnerAlg = Math.floor(Math.random() + 0.5)
                        quarterFinalWinners.push(quartWin[quartRoundWinnerAlg]);

                    } //console.log(quarterFinalWinners);

                    if (quarterFinalWinners.length > 1) {
                        SemiFinals(quarterFinalWinners);// znaci ako pobednika ima vise od jednog pobednika, ulaze u sledecu funkciju(rundu)
                    } else {
                        console.log(` Pobednik Internship2021 turnira je: ${quarterFinalWinners[0].player} (${quarterFinalWinners[0].country}, #${quarterFinalWinners[0].rang}) !!!`);
                    }

                    function SemiFinals(players) {
                        let stringSemiFinals = `\n Ucesnici polu finala: ${players.length} `

                        const semiFinPars = players.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
                        let semiFinParsString = ``;
                        for (let semiPairs of semiFinPars) {
                            semiFinParsString += `${semiPairs[0].player} (${semiPairs[0].country} #${semiPairs[0].rang}) - ${semiPairs[1].player} (${semiPairs[1].country} #${semiPairs[1].rang}) \n`;
                        }
                        console.log(`Parovi polovine finala su:\n${semiFinParsString}`)

                        let semiFinalsWinners = [];
                        for (semiWin of semiFinPars) {
                            let semiQuarterWinAlg = Math.floor(Math.random() + 0.5)
                            semiFinalsWinners.push(semiWin[semiQuarterWinAlg])
                        }
                        if (semiFinalsWinners.length > 1) {
                            Finals(semiFinalsWinners);// znaci ako pobednika ima vise od jednog pobednika, ulaze u sledecu funkciju(rundu)
                        } else {
                            console.log(` Pobednik Internship2021 turnira je: ${semiFinalsWinners[0].player} (${semiFinalsWinners[0].country}, #${semiFinalsWinners[0].rang}) !!!`);
                        }
                        //Finals(semiFinalsWinners)
                        function Finals(players) {


                            let finParsString = ``;
                            // for(let players of players){
                            finParsString += `${players[0].player} (${players[0].country} #${players[0].rang}) - ${players[1].player} (${players[1].country} #${players[1].rang}) \n`;
                            // }
                            console.log(`Parovi finala su:\n${finParsString}`)

                            const wAlg = Math.round(Math.random());

                            console.log(`Pobednik Internship2021 turnira je: ${players[wAlg].player} (${players[wAlg].country}, ${players[wAlg].rang}) !!!`);
                        }
                    }
                }

            }


        }
    }


});


