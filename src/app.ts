console.log("Heyoo");
//------Zad1 Zliczającą, ile samogłosek ma podany ciąg znaków ( string ).---------------

/*function isIt( letter ):boolean{
    if ( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
        return true;
    return false;

}

//var str = new String("samogloski"); 
let str: string = "samogloski";
let counter: number = 0;
for(var i = 0; i < str.length ; i++) {
  if( isIt( str.charAt(i) )){
    counter++;
  }
}
console.log(counter);


//-----------Sprawdzającą, czy podana tablica jest posortowana rosnąco-----------------
let check1:number = 0;


var nums:number[] = [1,2,3,3,5,9,9,10,11,20]
for( var i = 1; i < nums.length; i++){
  if(nums[i] >= nums[i-1]){
    check1++;
  }
  else{
    i=nums.length;
  }
}
if(check1 == (nums.length - 1 )){
  console.log("yup for first array")
}
else{
  console.log("nope for first array")
}


//------------------Druga tablica-----------------------------------------

var nums2:number[] = [1,5,7,8,9,11,10,9,12,15]
let check2:number = 0;
for( var i = 1; i < nums2.length; i++){
  if(nums2[i] >= nums2[i-1]){
    check2++;
  }
  else{
    i=nums2.length;
  }
}
if(check2 == (nums2.length - 1 )){
  console.log("yup for second array")
}
else{
  console.log("nope for second array")
}

console.log(check1)
console.log(nums.length)
console.log(check2)
console.log(nums2.length)*/



//-------------------------------------------------
function counting(word:string):number{
  let counter: number = 0
  for (var i = 0; i < word.length; i++) {
      if (isIt(word.charAt(i))) {
          counter++;
      }
  }
  return counter;
}

function isIt(letter) {
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "y")
      return true;
  return false;
}


let myWord:string = "mojwyrazdotestu"
let numberOfSam:number  = counting(myWord)
console.log("Liczba samoglosek wynosi: " + numberOfSam)
//--------------------------------------------------
let check1:number = 0
let nums:number[] = [1,2,3,3,4,9,9,10,11,20]


function isGreater(tab):boolean{
  for( var i = 1; i < tab.length; i++){
    if(tab[i] >= tab[i-1]){
      check1++;
    }
    else{
      i=tab.length;
    }
  }
  if(check1 == (tab.length - 1 )){
    return true
  }
  else{
    return false
  }
}


if(isGreater(nums)){
  console.log("Tablica jest posortowana rosnaco")
}
else {
  console.log("Tablica nie jest posortowana rosnaco")
}