// Animate Smooth Scroll
$('#view-explore').on('click', function () {
    const ex = $('#explore').position().top;
    $('html,body').animate({scrollTop: ex}, 900);
});
$('#view-showcase').on('click', function () {
    const sh = $('#showcase').position().top;
    $('html, body').animate({scrollTop:sh},900)
});
$('#view-create').on('click', function () {
    const cr = $('#create').position().top;
    $('html, body').animate({scrollTop:cr},900)
});
$('#view-share').on('click', function () {
    const sh = $('#share').position().top;
    $('html, body').animate({scrollTop:sh},900)
});
// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.reveal-img', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    viewFactor: 0.5
});