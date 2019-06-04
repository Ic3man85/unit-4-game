$('document').ready(function() {
    randomNum();

})

function randomNum() {
    let number = Math.floor(Math.random() * (25 + 50)) + 25;
    $('#guess-num').html(number);
    console.log(number);
    let crys1 = Math.floor(Math.random() * 15) + 1;
    console.log(crys1);
    $('#image1').html('value=' + crys1);
    let crys2 = Math.floor(Math.random() * 15) + 1;
    console.log(crys2);
    $('#image2').html('value=' + crys2);
    let crys3 = Math.floor(Math.random() * 15) + 1;
    console.log(crys3);
    $('#image3').html('value=' + crys3);
    let crys4 = Math.floor(Math.random() * 15) + 1;
    console.log(crys4);
    $('#image4').html('value=' + crys4);
}