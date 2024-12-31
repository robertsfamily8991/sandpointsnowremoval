const scriptURL = 'Your Google App Script URL'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted/n/nWe will contact you very soon with more information." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
