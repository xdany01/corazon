var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: data,
};

var anim;
var cerrar = false;
var e = document.getElementById('corazon');
anim = lottie.loadAnimation(params);
e.addEventListener('click', () => {
    if (cerrar == false) {
        anim.setSpeed(3);
        anim.playSegments([0,59], true);
        cerrar = true;
    } else {
        anim.playSegments([30,0], true);
        cerrar = false
    }
});
