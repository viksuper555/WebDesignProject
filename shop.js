
var luxury = document.getElementById("luxury");       
var economy = document.getElementById("economy");
var cheap = document.getElementById("cheap"); 

    var luxuryDescriptions = ["Mercedes Benz S Class", "Range Rover", "Jaguar I-Pace", "Tesla Model S", "Audi A8", "BMW 7 Series", "Jaguar XJ",
    "BMW 6 Series Gran Turismo", "Lexus LS", "Maserati Quattroporte", "Porche Panamera", "Lamborghini Aventador"];
    var luxuryTitles = ["Mercedes Benz S Class", "Range Rover", "Jaguar I-Pace", "Tesla Model S", "Audi A8", "BMW 7 Series", "Jaguar XJ",
    "BMW 6 Series Gran Turismo", "Lexus LS", "Maserati Quattroporte", "Porche Panamera", "Lamborghini Aventador"];
    var luxuryPrices = ["200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв", "200.000лв"];
    var economyDescriptions = ["Mini Cooper", "Honda Civic Hatchback", "Honda Accord", "Volkswagen Up!", "Ford Fiesta", "Kia Soul", "Chevrolet Spark",
    "Chevrolet Sonic", "Volkswagen Golf", "Hyundai Veloster", "Fiat 500", "BMW i3"];
    var economyTitles = ["Mini Cooper", "Honda Civic Hatchback", "Honda Accord", "Volkswagen Up!", "Ford Fiesta", "Kia Soul", "Chevrolet Spark",
    "Chevrolet Sonic", "Volkswagen Golf", "Hyundai Veloster", "Fiat 500", "BMW i3"];
    var economyPrices = ["20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв", "20.000лв"];
    var cheapDescriptions = ["Golf 3", "Volkswagen Polo", "Ford Escort", "Renault Megan", "Renault Clio",
    "Moskwitsch", "Citroen C2", "Audi A3", "BMW M3", "Peugeot 203", "Opel Astra", "Mercedes 190"];
    var cheapTitles = ["Golf 3", "Volkswagen Polo", "Ford Escort", "Renault Megan", "Renault Clio",
    "Moskwitsch", "Citroen C2", "Audi A3", "BMW M3", "Peugeot 203", "Opel Astra", "Mercedes 190"];
    var cheapPrices = ["2.000лв", "20.000лв", "2.000лв", "20.000лв", "2.000лв", "20.000лв", "20.000лв", "2.000лв", "2.000лв", "20.000лв", "2.000лв", "2.000лв"];
    
luxury.onclick = function() {reset(), luxuryView()};
function luxuryView() {
    luxury.className = "list-group-item-selected";         
    economy.className = "list-group-item";
    cheap.className = "list-group-item";
    
    for(i=0;i<12;i++)
    {
    document.getElementsByClassName("card-text")[i].innerHTML = luxuryDescriptions[i];
    document.getElementsByClassName("card-title-text")[i].innerHTML = luxuryTitles[i];
    document.getElementsByClassName('card-img-top')[i].src="Images/Content/Luxury/" + [i+1] + ".jpg";
    document.getElementsByClassName("card-price")[i].innerHTML = luxuryPrices[i];
    }                           
}
economy.onclick = function() {reset(), economyView()};
function economyView() {      
    luxury.className = "list-group-item";         
    economy.className = "list-group-item-selected";
    cheap.className = "list-group-item";
    
    for(i=0;i<12;i++)
    {
    document.getElementsByClassName("card-text")[i].innerHTML = economyDescriptions[i];
    document.getElementsByClassName("card-title-text")[i].innerHTML = economyTitles[i];
    document.getElementsByClassName('card-img-top')[i].src="Images/Content/Economy/" + [i+1] + ".jpg";
    document.getElementsByClassName("card-price")[i].innerHTML = economyPrices[i];
    }                           
}
cheap.onclick = function() {reset(), cheapView()};
function cheapView() {         
    luxury.className = "list-group-item";         
    economy.className = "list-group-item";
    cheap.className = "list-group-item-selected";
    
    for(i=0;i<12;i++)
    {
    document.getElementsByClassName("card-text")[i].innerHTML = cheapDescriptions[i];
    document.getElementsByClassName("card-title-text")[i].innerHTML = cheapTitles[i];
    document.getElementsByClassName('card-img-top')[i].src="Images/Content/Cheap/" + [i+1] + ".jpg";
    document.getElementsByClassName("card-price")[i].innerHTML = cheapPrices[i];
    }                           
}
function randomizeContent()
{
    var descriptions = [].concat.apply([], [luxuryDescriptions, economyDescriptions,cheapDescriptions]);
    var titles = [].concat.apply([], [luxuryTitles, economyTitles,cheapTitles]);
    var prices = [].concat.apply([], [luxuryPrices, economyPrices,cheapPrices]);

    var arr = [];
    while(arr.length < 6){
        var r = Math.floor(Math.random()*36) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    for(i=0;i<6;i++)
    {
    if(arr[i] <= 12)             
        var str = "Images/Content/Luxury/" + arr[i] + ".jpg";
    if(arr[i] <= 24 && arr[i] > 12)
        var str = "Images/Content/Economy/" + (arr[i]-12) + ".jpg";
    if(arr[i] <= 36 && arr[i] > 24)
        var str = "Images/Content/Cheap/" + (arr[i]-24) + ".jpg";
    
    document.getElementsByClassName("card-text")[i].innerHTML = descriptions[arr[i]-1];
    document.getElementsByClassName("card-title-text")[i].innerHTML = titles[arr[i]-1];
    document.getElementsByClassName('card-img-top')[i].src=str;
    document.getElementsByClassName("card-price")[i].innerHTML = prices[arr[i]-1];
    }
}
