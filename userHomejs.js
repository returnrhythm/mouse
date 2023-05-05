const bottom=document.querySelector('.centerBody .middle .center .user-home .bottom')
const userPrompt=document.querySelector('.centerBody .middle .center .user-home .bottom .user-prompt')
const userPromptdiv=document.querySelectorAll('.centerBody .middle .center .user-home .bottom .user-prompt div')

bottom.addEventListener('scroll',function(){
    
    if(bottom.scrollTop>=200){
        userPrompt.classList.add('userPromptscroll')
        for(let i=0;i<userPromptdiv.length;i++){
            userPromptdiv[i].style.display='block'
        }
    }
})
bottom.addEventListener('scroll',function(){
    if(bottom.scrollTop<200){
        userPrompt.classList.remove('userPromptscroll')
        for(let j=0;j<userPromptdiv.length;j++){
            userPromptdiv[j].style.display='none'
        }
    }
})