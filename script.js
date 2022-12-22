// Here the value is stored in new variable x 
function myFunction() {
                    var img= document.getElementById('image');
                    var x = document.getElementById("myText").value;
                    var fruits = ["Banana", "Orange", "Apple", "Mango"];
                    var kepek = ["banan.jpeg", "or.jpeg", "alma.jpeg", "kemia.png"];
                    var listaLength = fruits.length;
                    for (var i = 0; i < listaLength; i++) {
                      if (fruits[i] == x) {
                        img.src = kepek[i]
                      }
                      
                    }
                    }


                    let soMany = 10;
                    document.getElementById("demo").innerHTML = (`This is ${soMany} times easier! ${x}`);
      