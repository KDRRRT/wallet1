const ch1 = document.querySelector('.chose1');
const ch2 = document.querySelector('.chose2');
const ch3 = document.querySelector('.chose3');
ch2.addEventListener('click', (event) => {
          ch2.style.fontWeight = "600";
          ch3.style.fontWeight = "400";
          ch1.style.fontWeight = "400";
        })
    ch3.addEventListener('click', (event) => {
            ch2.style.fontWeight = "400";
            ch3.style.fontWeight = "600";
            ch1.style.fontWeight = "400";
          })
          ch1.addEventListener('click', (event) => {
            ch2.style.fontWeight = "400";
            ch3.style.fontWeight = "400";
            ch1.style.fontWeight = "600";
          })


document.querySelector('.themetoggle').addEventListener('click', (event) => {
event.preventDefault();
if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
}
else {
    localStorage.setItem('theme','dark');
}
addDarkClass();
})
function addDarkClass () {
   try {
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.themetoggle').textContent = 'Light theme';
        document.querySelector('.acc_img').src = './pic/account blackRoyale.png';
        document.querySelector('.sett').src = './pic/settings blackRoyale.png';
        document.querySelector('.search_btn_img').src = './pic/lupa blackRoyale.png';
        document.querySelector('.list1').src = './pic/buysell blackRoyale.png';
        document.querySelector('.list2').src = './pic/send (1) blackRoyale.png';
        document.querySelector('.list3').src = './pic/swap blackRoyale.png';
        document.querySelector('.list4').src = './pic/stat blackRoyale.png';
        document.querySelector('.ac1').src = './pic/account blackRoyale.png';
        document.querySelector('.ac2').src = './pic/account blackRoyale.png';
        document.querySelector('.ac3').src = './pic/account blackRoyale.png';
        document.querySelector('.opt1').src = './pic/import blackRoyale.png';
        document.querySelector('.opt2').src = './pic/clear blackRoyale.png';
    }
else {
    document.querySelector('html').classList.remove('dark');
        document.querySelector('.themetoggle').textContent = 'Dark theme';
        document.querySelector('.sett').src = './pic/settings.png';
        document.querySelector('.acc_img').src = './pic/account.png';
        document.querySelector('.search_btn_img').src = './pic/lupa.png';
        document.querySelector('.list1').src = './pic/buysell.png';
        document.querySelector('.list2').src = './pic/send (1).png';
        document.querySelector('.list3').src = './pic/swap.png';
        document.querySelector('.list4').src = './pic/stat.png';
        document.querySelector('.ac1').src = './pic/account.png';
        document.querySelector('.ac2').src = './pic/account.png';
        document.querySelector('.ac3').src = './pic/account.png';
        document.querySelector('.opt1').src = './pic/import.png';
        document.querySelector('.opt2').src = './pic/clear.png';
}
} catch(err) {} 
}
addDarkClass();

const pop = document.querySelector('.popup');
const popBtn = document.querySelector('.listpop')
popBtn.addEventListener('click', (event) => {

    pop.style.display = 'block';

})
document.querySelector('.navbar-toggler-icon').onclick = function() {
    pop.style.display = 'none';
}


document.querySelector('.form_btn').addEventListener('click', function(e){
    e.preventDefault();
    // Показываем блок с заранее сделанной анимацие загрузки
    document.querySelector('.form_btn').style.display = 'none';
    document.querySelector('.loading').style.display = 'block';
    // Через 2 секунды запускаем функцию в которой скрываем блок с анимацией
    // и показываем нужный текст
    setTimeout(showText, 3000);
  });
function showText() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.load_fin').style.display = 'block';
}
