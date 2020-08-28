function wakeDog(st1, st2) {

    return `Wake ${st1} the ${st2}`
}

function leashDog(a, b) {

    return `Leash ${a} the ${b}`
}

function walkToPark(a, b) {

    return `Walk to the park with ${a} the ${b}`


}

function throwFrisbee(a, b) {

    return `Throw the frisbee for ${a} the ${b}`
}

function walkHome(a, b) {
    return `Walk home with ${a} the ${b}`

}

function unleashDog(a, b) {
    return `Unleash ${a} the ${b}`
}


var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const result = []
    for (var i = 0; i < routine.length; i++) {
        result[i] = routine[i](dogName, dogBreed)
    }
    return result

}