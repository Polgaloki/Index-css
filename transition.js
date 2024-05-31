document.addEventListener("DOMContentLoaded", function(){
    const homeLink = document.getElementById('home');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('home.html');
    });

    const mapaLink = document.getElementById('mapa');
    mapaLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('index.html');
    });

    const infra1Link = document.getElementById('infra1');
    infra1Link.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('infra1.html');
    });

    const infra2Link = document.getElementById('infra2');
    infra2Link.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('infra2.html');
    });


    

    function fadeOutEffect(destination) {
        const body = document.body;
        body.style.filter = 'blur(3px)'; 
        setTimeout(function() {
            setTimeout(function() {
                window.location.href = destination;
            }, 700); 
        }, 100); 
    }
});
 