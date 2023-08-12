document.getElementById('findCgpa').addEventListener('click', function(){
    const semester1 = document.getElementById('Semester1');
    const semester1Value = semester1.value ;
    if(semester1Value > 4){
        alert('1st Semester : '+' Result number is not valid')
    }
    const semester1Cgpa = semester1Value / 100 * 5;

    const semester2 = document.getElementById('Semester2');
    const semester2Value = semester2.value ;
    if(semester2Value > 4){
        alert('2nd Semester : '+' Result number is not valid')
    }
    const semester2Cgpa = semester2Value / 100 * 5;

    const semester3 = document.getElementById('Semester3');
    const semester3Value = semester3.value ;
    if(semester3Value > 4){
        alert('3rd Semester : '+' Result number is not valid')

    }
    const semester3Cgpa = semester3Value / 100 * 5;

    const semester4 = document.getElementById('Semester4');
    const semester4Value = semester4.value ;
    if(semester4Value > 4){
        alert('4th Semester : '+' Result number is not valid')

    }
    const semester4Cgpa = semester4Value / 100 * 10;
    

    const semester5 = document.getElementById('Semester5');
    const semester5Value = semester5.value ;
    if(semester5Value > 4){
        alert('5th Semester : '+' Result number is not valid')

    }
    const semester5Cgpa = semester5Value / 100 * 15;

    const semester6 = document.getElementById('Semester6');
    const semester6Value = semester6.value ;
    if(semester6Value > 4){
        alert('6th Semester : '+' Result number is not valid')

    }
    const semester6Cgpa = semester6Value / 100 * 20;

    const semester7 = document.getElementById('Semester7');
    const semester7Value = semester7.value ;
    if(semester7Value > 4){
        alert('7th Semester : '+' Result number is not valid')

    }
    const semester7Cgpa = semester7Value / 100 * 25;
    

    const semester8 = document.getElementById('Semester8');
    const semester8Value = semester8.value ;
    if(semester8Value > 4){
        alert('8th Semester : '+' Result number is not valid')

    }
    const semester8Cgpa = semester8Value / 100 * 15;
    
    
    const totalCgpa = semester1Cgpa + semester8Cgpa + semester7Cgpa + semester6Cgpa + semester5Cgpa + semester4Cgpa + semester3Cgpa + semester2Cgpa ;
    const totalCgpafloat = totalCgpa.toFixed(2);
    const Yourresult = document.getElementById('Your-result');
    Yourresult.innerText = totalCgpafloat;


})