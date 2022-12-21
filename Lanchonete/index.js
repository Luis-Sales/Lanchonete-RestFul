const form = document.querySelector('#form')

//Login

form.onsubmit = (e) =>{
   e.preventDefault();
   
   const name  = document.forms['form'].name.value
   const senha = document.forms['form'].senha.value

   if (name === "Luis" & senha === "123") {
    form.reset()
    window.location = "http://127.0.0.1:5500/painel.html"
   } else {
    alert('Senha incorreta')
    form.reset()
   }

}

