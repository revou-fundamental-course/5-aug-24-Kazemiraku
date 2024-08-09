// Mendapatkan element element penting untuk perhitungan BMI
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Menggunakan fungsi rumus Function calculate untuk menghitung hasil BMI
function calculate(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  }else{
    countBmi();
  }
}

// Bagaimana cara mendapatkan hasil BMI dari jumlah : umur, berat, tinggi dan jenis kelamin
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

// Pembagian BMI berdasarkan function countBmi
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
// Hasil yang didapatkan dari penjumlahan yang akan ditampilkan pada komen/bagian bawah hasil BMI
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat Badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal (Ideal)';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan Berat Badan';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Kegemukan (Obesitas)';
     }else if(35<=bmi){
    result = 'Obesitas Tinggi';
     }

// Bagian area yang akan menampilkan hasil perhitungan BMI
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Ketika user melakukan clicks pada <span> (x), akan menutup website tersebut
span.onclick = function() {
  modal.style.display = "none";
}

// Ketika user melakukan clicks dimanapun diluar website, akan tertutup secara otomatis
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}