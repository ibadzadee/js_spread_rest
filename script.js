const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [

        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [

            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],],

    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

// 1. Her komanda oyunculari ucun ayrica array yaradin.

// let [...oyuncular] = game.players

let [team1 , team2] = game.players

console.log(team1 , team2)

// 2. Birinci komandanin birinci oyuncusu qapicidir , onun goalkeeper adli deyisene teyin edin , 
// diger futbolcular fieldPlAYERS ADLI ARRAYDA QALSIN

let [goalKeeper, ...fieldplayers] = team1;
console.log(goalKeeper);
console.log(fieldplayers);

// 3. butun oyuncular allPlayers adli arrayda saxlayin.

let allPlayers = [...team1 , ...team2]
console.log(allPlayers)

// 4.
// Oyunda birinci komandada 3 deyisiklik olub , firstFinalPlayer adli arraya ilkin heyeti ve 
// Thiago , Coutincho , Perisic -i elave edin (spread operator)

let firstFinalPlayer = [...team1 , "Thiago" ,"Coutincho" , "Perisic" ]
console.log(firstFinalPlayer);

// 5. odds adli obyektin deyisenlerini team1win , draw , team2win adli deyisenlere menimsedin. 

let {team1: team1win, x: draw , team2: team2win } = game.odds

console.log(team1win , draw , team2win);

