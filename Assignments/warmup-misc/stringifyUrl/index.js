// Example:

let url = "http://localhost:8080/monkeys";
let query = {
    color: "black",
    species: "howler"
}

//returns "http://localhost:8080/monkeys?color=black&species=howler"


function stringifyUrl(url, query) {
    url += "?";
    for(let key in query){
        url += `${key}=${query[key]}&`;
    }
  return url
}
console.log(stringifyUrl(url, query));




