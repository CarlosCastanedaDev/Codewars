// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list / array of distances(miles) from one station to the next along the Pony Express route.

// Implement the riders method / function, to return how many riders are necessary to get the mail from one end to the other.

//     NOTE: Each rider travels as far as he can, but never more than 100 miles.

function riders(stations) {
    let miles = 0
    let riders = 1
    for (let i = 0; i < stations.length; i++) {
        miles += stations[i]
        if (miles > 100) {
            riders += 1
            miles = 0
        }
    }
    return riders
}