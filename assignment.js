function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}
var result =feetToMile(5280);
console.log(result);



//woodcalculate

function woodCalculator (chair, table, bad){
    var chairCalculate = chair * 1;
    var tableCalculate = table * 3;
    var badCalculate = bad * 5;
    var allAddition = chairCalculate + tableCalculate + badCalculate;
    return allAddition;
}
var result = woodCalculator(1, 1, 1);
console.log(result);


//brickCalculator

function brickCalculator (height){
    var brickcount = height *1000;
    var addition = brickcount *15;
    var element = addition;

    if(height >= 21){
        addition = brickcount * 10;
        var element = addition +70000;
    }

    
    else if (height >=11){
        addition = brickcount* 12;
        var element = addition + 30000;

        
    }
    else if(height <=10){
        addition = brickcount * 15;

    }
    return element;

    
 

}
var result = brickCalculator(1);
console.log(result);

//TinyFriend

function tinyFriend (name){
    var smallname = name[0].length;
    for (var i =0; i <name.length; i++){
        var currentname = name[i].length;
        if(currentname <smallname){
            smallname = currentname;
            
        }
    }
    return smallname;
}
var result = tinyFriend(["robiul hoq", "abdul", "mamun", "tom"]);
console.log(result);