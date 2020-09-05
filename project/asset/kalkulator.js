/*
Langkah pertama adalah buatlah sebuah objek
dengan nama calculator.
Di dalamnya terdapat properti yang menggambarkan data dan kondisi dari kalkulatornya,
 seperti displayNumber, operator, firstNumber, dan waitingForSecondNumber.
 Sehingga kodenya akan nampak seperti ini:
*/

const kalkulator = {
  displayNumber : '0',
  operator : null,
  firstNumber : null,
  waitingforsecondnumber : false
};

/*
Setelah membuat object calculator, selanjutnya kita buat fungsi - fungsi umum yang dilakukan
 kalkulator seperti meng-update angka pada layar dan menghapus data pada kalkulator.
*/

function updateDisplay() {

document.querySelector('#displayNumber').innerText = kalkulator.displayNumber;

}



function inputDigit(digit) {
  if (kalkulator.displayNumber==='0'){
    kalkulator.displayNumber=digit;
  }else {
kalkulator.displayNumber+=digit;
  }



}

function inverseNumber() {

  if (kalkulator.displayNumber==='0'){
    return;
  }else{
    kalkulator.displayNumber*= -1;
  }

}

function handleOperator(operator) {
    if (!kalkulator.waitingForSecondNumber) {
        kalkulator.operator = operator;
        kalkulator.firstNumber = kalkulator.displayNumber;
        kalkulator.waitingforsecondnumber=true;
        // mengatur ulang nilai display number supaya tombol
        //selanjutnya dimulai dari angka pertama lagi
        kalkulator.displayNumber = '0';

    } else {
        alert('Operator sudah ditetapkan')
    }
}

function performCalculation() {
   if (kalkulator.firstNumber == null || kalkulator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }

   let result = 0;
   if (kalkulator.operator === "+") {
       result = parseInt(kalkulator.firstNumber) + parseInt(kalkulator.displayNumber);
   } else {
       result = parseInt(kalkulator.firstNumber) - parseInt(kalkulator.displayNumber)
   }

   kalkulator.displayNumber = result;
   kalkulator.waitingforsecondnumber=false;
}

function clearkalkulator() {

  kalkulator.displayNumber = '0';
  kalkulator.operator = null;
  kalkulator.firstNumber = null;
  kalkulator.waitingforsecondnumber=false;

}

const buttons = document.querySelectorAll(".tombol");
for (let button of buttons) {
   button.addEventListener('click', function(event) {

       // mendapatkan objek elemen yang diklik
       const target = event.target;

       if(target.classList.contains('clear')) {
           clearkalkulator();
           updateDisplay();
           return;
       }

       if(target.classList.contains('negative')) {
          inverseNumber();
          updateDisplay();
          return;
      }

      if(target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;

     }

     if(target.classList.contains('equals')) {
          performCalculation();
          updateDisplay();
          return;
      }

       inputDigit(target.innerText);
       updateDisplay()
   });


}
