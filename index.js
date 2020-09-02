function wakeDog(dogName, dogBreed) {
    let sentence = (`Wake ${dogName} the ${dogBreed}`);
    console.log(sentence);
    return sentence
}

function leashDog(dogName, dogBreed) {
    let sentence = (`Leash ${dogName} the ${dogBreed}`);
    console.log(sentence);
    return sentence

}

function walkToPark(dogName, dogBreed) {
    let sentence = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(sentence);
    return sentence


}

function throwFrisbee(dogName, dogBreed) {
    let sentence = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(sentence);
    return sentence


}

function walkHome(dogName, dogBreed) {
    let sentence = `Walk home with ${dogName} the ${dogBreed}`
    console.log(sentence);
    return sentence


}

function unleashDog(dogName, dogBreed) {
    let sentence = `Unleash ${dogName} the ${dogBreed}`;
    console.log(sentence);
    return sentence
}

let routine = [
    wakeDog, 
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]  

function exerciseDog(dogName, dogBreed){
    let arr = []
    for (var i = 0; i < routine.length; i++) {
        arr.push(routine[i](dogName, dogBreed));
    }
    return arr
}