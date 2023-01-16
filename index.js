function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    let number_of_feet = distanceTravelledInFeet(start, destination)
    if(number_of_feet <= 400) {
        return 0
    }
    else if(number_of_feet > 400 && number_of_feet <= 2000) {
        return (number_of_feet - 400) * .02
    }
    else if (number_of_feet > 2000 && number_of_feet < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}