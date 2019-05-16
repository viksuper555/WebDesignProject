//
// Updates cars for sale for each category and the randomized main page.

var luxury = document.getElementById("luxury");       
var economy = document.getElementById("economy");
var cheap = document.getElementById("cheap"); 
	let cars = [
	{
		name: 'Mercedes Benz S Class', description: 'The classic luxury car',
		price: 214300,
		type: "lux"
	},
	{
		name: 'Range Rover',
		description: 'The classic luxury car',
		price: 309900,
		type: "lux"
	},
	{
		name: 'Jaguar I-Pace',
		description: 'The classic luxury car',
		price: 121300,
		type: "lux"
	},
	{
		name: 'Tesla Model S',
		description: 'The best electric luxury car',
		price: 156600,
		type: "lux"
	},
	{
		name: 'Audi A8',
		description: 'The classic luxury car',
		price: 148000,
		type: "lux"
	},
	{
		name: 'BMW 7 Series',
		description: 'The classic luxury car',
		price: 146000,
		type: "lux"
	},
	{
		name: 'Jaguar XJ',
		description: 'The classic luxury car',
		price: 133900,
		type: "lux"
	},
	{
		name: 'BMW 6 Series Gran Turismo',
		description: 'The classic luxury car',
		price: 122700,
		type: "lux"
	},
	{
		name: 'Lexus LS',
		description: 'The classic luxury car',
		price: 131500,
		type: "lux"
	},
	{
		name: 'Maserati Quattroporte',
		description: 'The classic luxury car',
		price: 202000,
		type: "lux"
	},
	{
		name: 'Porsche Panamera',
		description: 'The classic luxury car',
		price: 181600,
		type: "lux"
	},
	{
		name: 'Lamborghini Aventador',
		description: 'The classic luxury car',
		price: 687400,
		type: "lux"
	},
	{
		name: 'Mini Cooper',
		description: 'The classic economy car',
		price: 55500,
		type: "eco"
	},
	{
		name: 'Honda Civic Hatchback',
		description: 'The classic economy car',
		price: 43000,
		type: "eco"
	},
	{
		name: 'Honda Accord',
		description: 'The classic economy car',
		price: 41400,
		type: "eco"
	},
	{
		name: 'Volkswagen Up!',
		description: 'The classic economy car',
		price: 9800,
		type: "eco"
	},
	{
		name: 'Ford Fiesta',
		description: 'The classic economy car',
		price: 24900,
		type: "eco"
	},
	{
		name: 'Kia Soul',
		description: 'The classic economy car',
		price: 28800,
		type: "eco"
	},
	{
		name: 'Chevrolet Spark',
		description: 'The classic economy car',
		price: 23100,
		type: "eco"
	},
	{
		name: 'Chevrolet Sonic',
		description: 'The classic economy car',
		price: 31500,
		type: "eco"
	},
	{
		name: 'Volkswagen Golf',
		description: 'The classic economy car',
		price: 38000,
		type: "eco"
	},
	{
		name: 'Hyundai Veloster',
		description: 'The classic economy car',
		price: 51700,
		type: "eco"
	},
	{
		name: 'Fiat 500',
		description: 'The classic economy car',
		price: 35800,
		type: "eco"
	},
	{
		name: 'BMW i3',
		description: 'The classic economy car',
		price: 83200,
		type: "eco"
	},
	{
		name: 'Golf 3',
		description: 'The classic cheap car',
		price: 3600,
		type: "cheap"
	},
	{
		name: 'Volkswagen Polo',
		description: 'The classic cheap car',
		price: 4000,
		type: "cheap"
	},
	{
		name: 'Ford Escort',
		description: 'The classic cheap car',
		price: 6800,
		type: "cheap"
	},
	{
		name: 'Renault Megan',
		description: 'The classic cheap car',
		price: 4200,
		type: "cheap"
	},
	{
		name: 'Renault Clio',
		description: 'The classic cheap car',
		price: 7000,
		type: "cheap"
	},
	{
		name: 'Moskwitsch',
		description: 'The classic cheap car',
		price: 1400,
		type: "cheap"
	},
	{
		name: 'Citroen C2',
		description: 'The classic cheap car',
		price: 3600,
		type: "cheap"
	},
	{
		name: 'Audi A3',
		description: 'The classic cheap car',
		price: 3300,
		type: "cheap"
	},
	{
		name: 'BMW M3',
		description: 'The classic cheap car',
		price: 12000,
		type: "cheap"
	},
	{
		name: 'Peugeot 206',
		description: 'The classic cheap car',
		price: 3000,
		type: "cheap"
	},
	{
		name: 'Opel Astra',
		description: 'The classic cheap car',
		price: 5700,
		type: "cheap"
	},
	{
		name: 'Mercedes 190',
		description: 'The classic cheap car',
		price: 3300,
		type: "cheap"
	}			]
luxury.onclick = function() {disappear(), luxuryView()};
function luxuryView() {
    luxury.className = "list-group-item-selected";         
    economy.className = "list-group-item";
    cheap.className = "list-group-item";
    
    let car = cars.filter(c => c.type == "lux");
    for(i=0;i<12;i++)
    {
    document.getElementsByClassName("card-text")[i].innerHTML = car[i].description;
    document.getElementsByClassName("card-title-text")[i].innerHTML = car[i].name;
    document.getElementsByClassName('card-img-top')[i].src="Images/Content/Luxury/" + [i+1] + ".jpg";
    document.getElementsByClassName("card-price")[i].innerHTML = car[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + " лв";
    }                           
}

economy.onclick = function() {disappear(), economyView()};
function economyView() {      
    luxury.className = "list-group-item";         
    economy.className = "list-group-item-selected";
    cheap.className = "list-group-item";
    let car = cars.filter(c => c.type == "eco");
    for(i=0;i<12;i++)
    {
    document.getElementsByClassName("card-text")[i].innerHTML = car[i].description;
    document.getElementsByClassName("card-title-text")[i].innerHTML = car[i].name;
    document.getElementsByClassName('card-img-top')[i].src="Images/Content/Economy/" + [i+1] + ".jpg";
    document.getElementsByClassName("card-price")[i].innerHTML = car[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + " лв";
    }                           
}

cheap.onclick = function() {disappear(), cheapView()};
function cheapView() {         
    luxury.className = "list-group-item";         
    economy.className = "list-group-item";
    cheap.className = "list-group-item-selected";
    
	let car = cars.filter(c => c.type == "cheap");
    for(i=0;i<12;i++)
    {
    document.getElementsByClassName("card-text")[i].innerHTML = car[i].description;
    document.getElementsByClassName("card-title-text")[i].innerHTML = car[i].name;
    document.getElementsByClassName('card-img-top')[i].src="Images/Content/Cheap/" + [i+1] + ".jpg";
    document.getElementsByClassName("card-price")[i].innerHTML = car[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + " лв";
    }                           
}

// Randomized main page content

function randomizeContent()
{
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
	
    document.getElementsByClassName("card-text")[i].innerHTML = cars[arr[i]-1].description;
    document.getElementsByClassName("card-title-text")[i].innerHTML = cars[arr[i]-1].name;
    document.getElementsByClassName('card-img-top')[i].src=str;
    document.getElementsByClassName("card-price")[i].innerHTML = cars[arr[i]-1].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + " лв";
    }
}
// Show more menu
		document.getElementById("show-more").onclick = function() {showMore()};

        function showMore() {
        var moreItems = document.getElementsByClassName("mb-4_more");
        var btn = document.getElementById("show-more");
        btn.style.display = "none";
        for(i=0;i<6;i++)
        {
          moreItems[i].style.display = "inline";
		}
		
        }
        function disappear() {
        var moreItems = document.getElementsByClassName("mb-4_more");
        var btn = document.getElementById("show-more");
        btn.style.display = "inline";
        for(i=0;i<6;i++)
        {
          moreItems[i].style.display = "none";
        }
        }