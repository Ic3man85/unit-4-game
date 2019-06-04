$('document').ready(function() {
    randomNum();
    setEventListeners();

})

function randomNum() {
    let number = Math.floor(Math.random() * (25 + 50)) + 25;
    $('#guess-num').html(number);
    console.log(number);
    let crys1 = Math.floor(Math.random() * 15) + 1;
    console.log(crys1);
    $('#image1').val(crys1);
    let crys2 = Math.floor(Math.random() * 15) + 1;
    console.log(crys2);
    $('#image2').val(crys2);
    let crys3 = Math.floor(Math.random() * 15) + 1;
    console.log(crys3);
    $('#image3').val(crys3);
    let crys4 = Math.floor(Math.random() * 15) + 1;
    console.log(crys4);
    $('#image4').val(crys4);
}

function setEventListeners() {
    $('.image').on('click', function() {
        console.log(this.value);

    });
}