$('document').ready(function() {
    // randomNum();
    let score = 0;
    let wins = 0;
    let lose = 0;
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


    $('.image').on('click', function() {
        console.log(this.value);
        let newScore = score += parseInt(this.value);
        console.log('New: ' + newScore);
        $('#score1').html(newScore);
        if (newScore == number) {
            wins++
            $('#wins').html(wins);
            alert("YOU WON!!!");
            resetPage();
        } else if (newScore > number) {
            lose++;
            $('#lose').html(lose);
            alert("YOU LOSE!!!");
            resetPage();
        }
    });

    function resetPage() {
        let number = Math.floor(Math.random() * (25 + 50)) + 25;
        $('#guess-num').html(number);
        console.log(number);
        crys1 = Math.floor(Math.random() * 15) + 1;
        console.log(crys1);
        $('#image1').val(crys1);
        crys2 = Math.floor(Math.random() * 15) + 1;
        console.log(crys2);
        $('#image2').val(crys2);
        crys3 = Math.floor(Math.random() * 15) + 1;
        console.log(crys3);
        $('#image3').val(crys3);
        crys4 = Math.floor(Math.random() * 15) + 1;
        console.log(crys4);
        $('#image4').val(crys4);
        newScore = 0;
        score = 0;
        $('#score1').html('0');
        $('.image').on('click', function() {
            console.log(this.value);
            let newScore = score += parseInt(this.value);
            console.log('New: ' + newScore);
            $('#score1').html(newScore);
            if (newScore === number) {
                wins++
                $('#wins').html(wins);
                resetPage();
            } else if (newScore > number) {
                lose++;
                $('#lose').html(lose);
                resetPage();
            }
        });
    }
});