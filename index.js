// Code your solution in this file!
let headquarters = 42;
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let blocks
    blocks = Math.abs(someValue - headquarters);
    return blocks;
  }

function distanceFromHqInFeet(someValue) {
    let feet
    feet = distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return feet;
}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let travel
    travel = Math.abs(start - destination) * 264;
    return travel;
  }
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let fare
    fare = distanceTravelledInFeet(start,destination);
    if (fare <= 400) {
        fare = 0;
    }
    else if (fare > 400 && fare < 2001) {
        fare = (fare - 400) * .02;
    }
    else if (fare > 2000 && fare < 2501) {
        fare = 25;
    }
    else {
        fare = 'cannot travel that far'
    }
    return fare;
  }