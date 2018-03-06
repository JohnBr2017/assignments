var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// output
//  18-25: n%
//  26-35: n%
//  36-55: n%

// plan
//  1.  group by the age groups
//  2.  seperate the ones that voted
//  3.  calculate the % of voters out of total
//  4.  output to the console the out put

//carry out

var young = [];
var mid = [];
var experienced = [];

function ageSort(){
    var youngTot = 0;
    var youngVoted = 0;
    var midTot = 0;
    var midVoted = 0;
    var experiencedTot = 0;
    var experiencedVoted = 0;

    for (let i = 0; i < voters.length; i++) {
        if (voters[i].age < 26){
            youngTot++
            if(voters[i].voted){
                youngVoted ++;
            }
        }else if (voters[i].age < 36){
            midTot++
            if(voters[i].voted){
                midVoted ++;
            }
        }else if (voters[i].age < 56) {
            experiencedTot++
            if(voters[i].voted){
                experiencedVoted ++;
            }
        }
    }
    console.log("18-25: " + ((youngVoted / youngTot) * 100).toFixed(0) + "%")
    console.log("26-35: " + ((midVoted / midTot) * 100).toFixed(0) + "%")
    console.log("36-55: " + ((experiencedVoted / experiencedTot) * 100).toFixed(0) + "%")
}
ageSort();

