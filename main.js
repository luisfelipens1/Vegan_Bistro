//Classe de menu ativa enquanto o usuário rola a janela
const li = document.querySelectorAll(".nav-link")
const sec = document.querySelectorAll("section")

function activeMenu(){
	let len = sec.length
	while(--len && window.scrollY + 75 < sec[len].offsetTop){}
	li.forEach(ltx => ltx.classList.remove("active"))
	li[len].classList.add("active")
}
activeMenu()
window.addEventListener('scroll', activeMenu)