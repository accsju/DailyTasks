
const globalMenuBtn = document.getElementById('globalMenuBtn');
globalMenuBtn.onclick = () => {
    const globalNavigation = document.getElementById('globalNavigation');
    const globalLinks = document.querySelectorAll('.global-link');
    const l = globalLinks.length;
    globalNavigation.classList.toggle('active');
    for (let i=0;i<l;i++) {
        globalLinks[i].classList.toggle('active');                        
    }
    globalMenuBtn.textContent==="開く" ? globalMenuBtn.textContent = "閉じる" : globalMenuBtn.textContent = "開く";
}

window.onresize = () => {
    globalMenuBtn.textContent = "開く";
    const globalHeader = document.getElementById('globalNavigation');
    const globalLinks = document.querySelectorAll('.global-link');
    const l = globalLinks.length;
    globalHeader.classList.remove('active');
    for (let i=0;i<l;i++) {
        globalLinks[i].classList.remove('active');                        
    }
}