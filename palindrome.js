
var palList = [];
var minPositionList = [];
var maxPositionList = [];

var findPals = function(){
    
    //resets lists
    document.getElementById("palindromes").innerHTML = " ";
    palList = [];
    minPositionList = [];
    maxPositionList = [];


    var findEvenPals = function(){
        console.log("hii");
        var DNASequence = document.findPalindrome.dnaStrand.value;
        var spacesFromCenter = 1;
                
        for(var i = 1; i<DNASequence.length; i++){
            if(DNASequence.charAt(i) === DNASequence.charAt(i+1)){
                while(DNASequence.charAt(i+(spacesFromCenter+1)) === DNASequence.charAt(i-spacesFromCenter) && (i-spacesFromCenter) > -1 ){
                    var currentPalindrome = DNASequence.slice(i-spacesFromCenter, i+(spacesFromCenter+2));
                    palList.push(currentPalindrome);
                    minPositionList.push(i-spacesFromCenter+1);
                    maxPositionList.push(i+spacesFromCenter+2);
                    spacesFromCenter +=1;
                  }
            }
         
        spacesFromCenter = 1; 
            
        }      
    }
    
    var findOddPals = function(){
        console.log("hii");
        var DNASequence = document.findPalindrome.dnaStrand.value;
        var spacesFromCenter = 1;
                
        for(var i = 1; i<DNASequence.length; i++){
            while(DNASequence.charAt(i+spacesFromCenter) === DNASequence.charAt(i-spacesFromCenter) && (i-spacesFromCenter) > -1){
                    var currentPalindrome = DNASequence.slice(i-spacesFromCenter, i+(spacesFromCenter+1));
                    palList.push(currentPalindrome);
                    minPositionList.push(i-spacesFromCenter+1);
                    maxPositionList.push(i+spacesFromCenter+1);
                    spacesFromCenter +=1;
                  }
            spacesFromCenter = 1;
        }
        
    console.log(palList);    
    }
    
//    displayDNAStrand();
    findEvenPals();
    findOddPals();
    
    console.log(minPositionList);
    console.log(maxPositionList);
    comparePals();
    displayPals();
  
   
}

//adds all palindromes to final palindrome list
var displayPals = function(){
    var counter = 1;
    for(var i=0; i<palList.length; i++){
        if(palList[i] !== ""){
            document.getElementById("palindromes").innerHTML += '<div class = "palDivs" id = "palDivs">' + counter + "." + " " + palList[i] + " " + '</div>';
            var divID = document.getElementById("palDivs");
            divID.id = "palDivs" + counter;
            
            document.getElementById("palDivs" + counter).innerHTML += '<div id = "startPosDivs" class = "posDivs">' + "Start position:" + minPositionList[i] + '</div>';
            document.getElementById("palDivs" + counter).innerHTML += '<div id = "endPosDivs" class = "posDivs">' + "End position:" + maxPositionList[i] + '</div>';
            counter +=1;
        }
    }
}

var displayDNAStrand = function(){
    var DNASequence = document.findPalindrome.dnaStrand.value;
    document.getElementById("dnaStrand").innerHTML = DNASequence;
}


var comparePals = function(){
    
    for(var currentPalIndex = 0; currentPalIndex<palList.length; currentPalIndex++){
        for(var i = 1; i<palList.length; i++){
            if(minPositionList[currentPalIndex+i] <= minPositionList[currentPalIndex] && maxPositionList[currentPalIndex+i] >= maxPositionList[currentPalIndex]){          
                palList[currentPalIndex] = "";
            }
        }
    }
    
     for(var currentPalIndex = 0; currentPalIndex<palList.length; currentPalIndex++){
        for(var i = 1; i<palList.length; i++){
            if(minPositionList[currentPalIndex-i] <= minPositionList[currentPalIndex] && maxPositionList[currentPalIndex-i] >= maxPositionList[currentPalIndex]){          
                console.log(palList.length);
                palList[currentPalIndex] = "";
            }
        }
    }
    
}
                           
                           
