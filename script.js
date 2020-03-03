var points = 0;


function my_func() {
var answer = ["Parijs", "8", "Ijsselmeer"];
var answer2 =  ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"];
var answer3 =  ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"];
var arr = [];
var arr2 = [];
var arr3 = [];
var ans1 = document.getElementById("fr").value;
var ans2 = document.getElementById("sp").value;
var ans3 = document.getElementById("nl").value;
var ans4 = document.getElementById("de").value;
var ans5 = document.getElementById("wadden").value;
arr.push(ans1, ans2, ans3);
arr2.push(ans4);
arr3.push(ans5);


for (let i= 0; i < arr.length; i++) {
    if (answer[i] == arr[i]) {
        points++;
    }else{
        
    }
}

for (let i= 0; i < arr2.length; i++) {
    for (let j = 0; j < answer2.length; j++) {
        if (arr2[i] == answer2[j]) {
            points++;
        }
    }
}


if (points == 3) {
  document.write("Je hebt alles goed");
}else {
    document.write("Je hebt een fout");
}

document.write(points);
}




