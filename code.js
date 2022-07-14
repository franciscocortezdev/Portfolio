const form = document.querySelector('.contactForm')
const emailBtn = document.querySelector('.emailBtn')
const labelDown = document.getElementById('btnScrollDown')

form.addEventListener('submit', (e) => {
  
  DataForm = new FormData(form)
  
  emailBtn.setAttribute('href', `mailto:franciscocortezdev@gmail.com?subject=${DataForm.get('Name')} - ${DataForm.get('Email')}&body=Subject: ${DataForm.get('Subject')} Message: ${DataForm.get('Message')}`)
  
  emailBtn.click()
})


window.addEventListener('scroll',()=>{
  
  if(window.scrollY > 100){
    labelDown.style.display = 'none'
  }
  if(window.scrollY < 100){
    labelDown.style.display = 'flex'
  }

})
