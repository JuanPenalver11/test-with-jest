// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = (valueInEuro * 1.2)
    //return the dollar value
    return valueInDollar;

  
}

const fromDollarToYen = function(valueInDollar){
    // cambiar de dolares a euros 

let valueInEuro = valueInDollar/ 1.2 
    // convertir los euros a yenes 

let valueInYen = valueInEuro * 127.9

    // devolver 
    return valueInYen
}

const fromYenToPound = function(valueInYen){
    // cambiar de dolares a euros 

let valueInEuro = valueInYen / 127.9
    // convertir los euros a yenes 

let valueInPound = valueInEuro * 0.8

    // devolver 
    return valueInPound
}



module.exports = { fromEuroToDollar, fromDollarToYen,fromYenToPound}
