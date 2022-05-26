let backpack = [];

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

//backpack.shift()
backpack.splice(0, 1)

let foundItem = 'waterstone'
backpack.push(foundItem)

backpack.pop()

let itemCount = backpack.length

backpack.push('great ball', 'antidote', 'revive')

let satchel = backpack.splice(2, 3)

//console.log(backpack, satchel)

//for (let i = 0; i < backpack.length; i++) {
//    console.log(backpack[i])
// }

// if(backpack.length > 3) {
//     for (let i = 0; i < 3; i++) {
//         console.log(backpack[i])
//     }
// } else {
//     for (let i = 0; i < backpack.length; i++) {
//         console.log(backpack[i])
//     }
// }

let guess = 54

while (guess < 100) {
    console.log('--------', guess)
    if (guess % 4 === 0 || guess % 5 === 0) {
        guess += 25
        console.log('guess is divisible by 4 or 5, added 25')
    } else if (guess % 3 === 0) {
        guess -= 27
        console.log('guess is divisible by 3, subtracted 27')
    } else {
        guess += 3
        console.log('guess hit else, added 3')
    }
    guess += 22
    console.log(`Added 22, guess is now ${guess}`)
}

console.log('final value', guess)

