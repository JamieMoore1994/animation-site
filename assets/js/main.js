const animation = function() {
    const header = document.querySelector('.site-header');
    const banner = document.querySelector('.cars-intro');
    const animCars = document.querySelector('.animation');

    var tl = new TimelineMax({delay: 15});
    tl
    .to(header, 1, {opacity: 1})
    .to(banner, 2, {opacity: 1}, '+2');
}

animation();