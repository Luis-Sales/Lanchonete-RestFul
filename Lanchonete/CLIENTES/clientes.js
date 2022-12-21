const form = document.querySelector('#form')
const listarClientes= document.querySelector('#listarClientes')


const API_URL_CLIENTES = 'http://localhost:8080/api/clientes'

//Efeito de mostrar a lista de cliente

listarClientes.onclick = ()=>{
    obterLista()
}

 
// Listar Usuarios & Aciona a função de exluir & Aciona a função de Editar
function obterLista(){
    fetch(API_URL_CLIENTES).then(response =>{
   response.json().then(data => {
    const clientesHtml = data.map(clientes => `

        <li class="list-group-item">
        ${clientes.name}
        </li>

    `).join('')
            //console.log(clientesList)
            clientesList.innerHTML = clientesHtml
            //excluir()
            //Editar()

        })
    })
}

// Cadastrar Usuario
form.onsubmit = function(e){
    e.preventDefault()

    const name     = document.forms['form'].name.value
    const email    = document.forms['form'].email.value
    const endereco = document.forms['form'].endereco.value
    const telefone = document.forms['form'].telefone.value

    console.log(name)
    console.log(email)
    console.log(endereco)
    console.log(telefone)
 

    fetch(API_URL_CLIENTES, {
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({
         name, 
         email,
         endereco,
         telefone,
        })
        }).then(response =>{
            
            response.json().then(data =>{
                if(data.message === 'sucess'){       
                    obterLista()
                    alert('Cadastro com sucesso')
                    form.reset()
               } else{
                    alert('Cadastro com error')
               }
            }) 
        })
}


