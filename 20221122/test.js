let letter = {
    value1:["A", "E", 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    value2:['D', 'G'],
    value3:['B', 'C', 'M', 'P'],
    value4:['F', 'H', 'V', 'W', 'Y'],
    value5:['K'],
    value8:['J', 'X'],
    value10:['Q', 'Z']
}
let scrabble = function(word){
   x = Array.from(word.split("").toUpperCase())
   counter = 0
   for(i = 0 ; i<=letter.length ; i++){
    for(y = 0 ; y<=letter[i][y] ; y++){
        if(x[y] == value1[y]){
          counter++
        }
        else if(x[y] == value2[y]){
            counter+=2
        }
        else if(x[y] == value3[y]){
            counter+=3
        }
        else if(x[y] == value4[y]){
            counter+=4
        }
        else if(x[y] == value5[y]){
            counter+=5
        }
        else if(x[y] == value8[y]){
            counter+=8
        }
        else if(x[y] == value10[y]){
            counter+=10
        }
    }
   }
   console.log(counter)
}
console.log(scrabble("cabbage"))