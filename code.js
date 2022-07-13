const form = document.querySelector('.contactForm')
const emailBtn = document.querySelector('.emailBtn')

form.addEventListener('submit', (e) => {
  
  DataForm = new FormData(form)
  
  emailBtn.setAttribute('href', `mailto:franciscocortezdev@gmail.com?subject=${DataForm.get('Name')} - ${DataForm.get('Email')}&body=Subject: ${DataForm.get('Subject')} Message: ${DataForm.get('Message')}`)
  
  emailBtn.click()
})



