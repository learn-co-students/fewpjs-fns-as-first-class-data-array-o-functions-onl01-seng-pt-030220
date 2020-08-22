// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");

function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    let response = `Wake ${dogName} the ${dogBreed}`;
    return response 
  }

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    let response = `Leash ${dogName} the ${dogBreed}`;
    return response
  }

function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    let response = `Walk to the park with ${dogName} the ${dogBreed}`
    return response
  }

function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    let response = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return response
  }

  function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    let response = `Walk home with ${dogName} the ${dogBreed}`
    return response
  }

  function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    let response = `Unleash ${dogName} the ${dogBreed}`
    return response
  }

let routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ]

function exerciseDog(dogName, dogBreed) {
    // return routine.forEach( element => element(dogName, dogBreed));
    return routine.map( element => element(dogName, dogBreed));
  }