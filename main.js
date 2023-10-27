// CALCULADORA DE PARTIDAS RANQUEADAS

let wins = 200
let loses = 120
let heroClass = ""

function result(win, lose) {
    let res = win - lose
    return res
}

function classification(heroWins) {
    
    if (heroWins <= 10) {
        heroClass = "Ferro"
    } else if (heroWins > 10 && heroWins <= 20) {
        heroClass = "Bronze"
    } else if (heroWins > 20 && heroWins <= 50) {
        heroClass = "Prata"
    } else if (heroWins > 50 && heroWins <= 80) {
        heroClass = "Ouro"
    } else if (heroWins > 80 && heroWins <= 90) {
        heroClass = "Diamamte"
    } else if (heroWins > 90 && heroWins <= 100) {
        heroClass = "Lendário"
    } else {
        heroClass = "Imortal"
    }

    return heroClass
}

console.log(`O Herói tem de saldo de vitórias de ${result(wins, loses)}. E está no nível ${classification(result(wins, loses))}`)