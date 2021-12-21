function capitalize(string) {

    let arrString = string.split(' ');


    function methodMap(callback) {
    
        let newArr = [];

        for (let i = 0; i < arrString.length; i++) {

            newArr.push(callback(arrString[i]));
    
        }

        return newArr;
 
    }

    let capitalizedArr = methodMap(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    })

    return capitalizedArr.join(' ')

}


module.exports = capitalize;        
