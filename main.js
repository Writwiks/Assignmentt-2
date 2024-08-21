$(document).ready(function() {
    // Responsive navigation menu toggle
    $('.nav-toggle').click(function() {
        $('nav ul').toggleClass('open');
    });

    // Countdown timer for the "Magic Mushrooms" section
    function countdownTimer() {
        var countDownDate = new Date().getTime() + (60 * 60 * 1000); // 1 hour from now

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $('#countdown').text(hours + ":" + minutes + ":" + seconds);

            if (distance < 0) {
                clearInterval(x);
                $('#countdown').text("EXPIRED");
            }
        }, 1000);
    }

    countdownTimer();
});
