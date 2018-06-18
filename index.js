var text1 = document.querySelector("text1")
var text2 = document.querySelector("text2")
var text3 = document.querySelector("text3")



function findLongestWord(x,y,z) {
  const stringArray = (text1,text2,text3).split(" ");
  const orderedArray = stringArray.sort(() => {
  return text1.length - text2.length - text3.length
  });
  return orderedArray[0].length;
}

var a = function() {}
text1.a('onclick', findLongestWord);
