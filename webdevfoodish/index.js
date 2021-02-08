window.onload = function () {
    Particles.init({
        selector: '.background',
        connectParticles: true,
        color: '#ffa500'
    });
};

let img1bot = document.querySelector('#image1').querySelector('.bottom');
let img2bot = document.querySelector('#image2').querySelector('.bottom');
let f1 = '';
let f2 = '';
let winsound = new Audio('win.mp3');
let losesound = new Audio('lose.mp3');
let same = document.querySelector('#same');
let different = document.querySelector('#different');
let endtext = document.querySelector('#endtext');
document.querySelector('#tryagain').addEventListener('click', () => { location.reload() });

async function reset() {
    let res1 = await axios.get('https://foodish-api.herokuapp.com/api/');
    let res2 = await axios.get('https://foodish-api.herokuapp.com/api/');
    f1 = res1.data.image;
    f2 = res2.data.image;
    img1bot.setAttribute('src', f1);
    img2bot.setAttribute('src', f2);
    f1 = f1.slice(41);
    f2 = f2.slice(41);
    f1 = f1.slice(0, f1.indexOf('/'));
    f2 = f2.slice(0, f2.indexOf('/'));
}
reset();

same.addEventListener('click', btnClicked);
different.addEventListener('click', btnClicked);

function btnClicked(e) {
    if (e.srcElement === same && f1 == f2) {
        console.log('Yeahhh!');
        winsound.play();
    } else if (e.srcElement === different && f1 != f2) {
        console.log('Yeahhh!');
        winsound.play();
    } else {
        console.log('Boo!');
        endtext.innerHTML = 'Not Expected from you 👎';
        losesound.play();
    }
    document.getElementById("overlay").style.display = "block";
}
