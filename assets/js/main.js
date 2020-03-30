// Animation to appear after care sequence
const animation = function() {
    const header = document.querySelector('.site-header');
    const banner = document.querySelector('.cars-intro');

    var tl = new TimelineMax({delay: 15});
    tl
    .to(header, 1, {opacity: 1})
    .to(banner, 2, {opacity: 1}, '+2');
}

animation();

// Skip content
document.querySelector('.skip-content').addEventListener('click', function(e) {
    e.preventDefault();
    const animCars = document.querySelector('.animation');
    animCars.style.display = "none";

    const animation = function() {
        const header = document.querySelector('.site-header');
        const banner = document.querySelector('.cars-intro');
    
        var tl = new TimelineMax({});
        tl
        .to(header, 1, {opacity: 1})
        .to(banner, 1, {opacity: 1}, 0);
    }
    
    animation();

});

// Reload page
document.querySelector('.reload-animation').addEventListener('click', function() {
    location.reload();
});