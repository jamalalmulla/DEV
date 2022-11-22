
let stations = {

    Red : ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
    Green : ["Alewife","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
    Orange : ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
}

let stopsBetweenStations = function(startLine, startStation, endLine, endStation){

        if (startLine === endLine){
            // return stations.Red.indexOf(endStation)-stations.Red.indexOf(startStation)
            console.log(Math.abs(stations[startLine].indexOf(endStation)-stations[startLine].indexOf(startStation)))
        }
        else if (startLine !== endLine){
            console.log(Math.abs(stations[startLine].indexOf(startStation)-stations[startLine].indexOf("Park Street"))+ Math.abs(stations[endLine].indexOf(endStation)-stations[endLine].indexOf("Park Street")) )
        }

        
    }
 

stopsBetweenStations("Orange", "Back Bay", "Red", "South Station");
stopsBetweenStations("Green", "Kenmore", "Red", "South Station");
stopsBetweenStations("Red", "Davis", "Green", "Chinatown");
stopsBetweenStations("Green", "Kenmore", "Red", "Harvard");