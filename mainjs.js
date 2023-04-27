const tab1=document.querySelectorAll('.centerBody .middle .prompt ul li')
const tab2=document.querySelector('.centerBody .middle .center')
for(let i=0;i<tab1.length;i++){
    tab1[i].addEventListener('click',function(){
        document.querySelector('.centerBody .middle .prompt ul .activefont').classList.remove('activefont')
        document.querySelector('.centerBody .middle .center .active').classList.add('none')
        document.querySelector('.centerBody .middle .center .active').classList.remove('active')
        this.classList.add('activefont')
        tab2.children[i].classList.remove('none')
        tab2.children[i].classList.add('active')
    })
}