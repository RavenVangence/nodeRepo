class Cars {
    constructor(brand, modelName, year) {
        this.brand = brand;
        this.modelName = modelName;
        this.year = year;   
    }
}

let g = 5;
class AdminCar extends Cars {} // inherited From User Class

AdminCar.prototype.giveRating = (carModelName,carRating) => {
    function carNameHolderFunc(carNameHolderPar){
        carModelName = carNameHolderPar;
        while (carModelName != carArray.forEach((item) => {return item.modelName;})) {
            return carModelName;         
    }}

    if (carModelName === carNameHolderFunc(carModelName)) {
        console.log(carModelName,'car has rating of ${g}');
    } else {
        console.log('This code was not supposed to fail but, meh it failed');
    }
} 

let carOne = new Cars('Ford', 'Mustang', 2003);
let carTwo = new Cars('Ford', 'Shelby', 1996)
let carThree = new Cars('Aston Martin', 'Valhala', 2016)

let carArray = [];

carArray.push(carOne);
carArray.push(carTwo);
carArray.push(carThree);

let adminCar = new AdminCar('Judge', 'Macron', 2016);
adminCar.giveRating('Himla', 5);