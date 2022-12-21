const formProduto = document.querySelector('#formProdutos')
const listProdutos= document.querySelector('#listarProdutos')

//console.log(listarProdutosClientes)

const API_URL_PRODUTOS = 'http://localhost:8080/api/products'



listProdutos.onclick = ()=>{
    obterListProdutos()
}

 
// Listar Usuarios & Aciona a função de exluir & Aciona a função de Editar
function obterListProdutos(){
    fetch(API_URL_PRODUTOS).then(response =>{
   response.json().then(data => {
    const produtosHtml = data.map(produtos => `

        <li class="list-group-item">
        ${produtos.name}
        </li>

    `).join('')
            //console.log(productsList)
            productsList.innerHTML = produtosHtml
            //excluir()
            //Editar()

        })
    })
}



// Cadastrar Produtos
formProduto.onsubmit = function(e){
    e.preventDefault()

    const name = document.forms['formProdutos'].name.value
    const preco  = document.forms['formProdutos'].preco.value


    console.log(name)
    console.log(preco)


    fetch(API_URL_PRODUTOS, {
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({
         name, 
         preco,

        })
        }).then(response =>{
            
            response.json().then(data =>{
                if(data.message === 'sucess'){       
                    obterListProdutos()
                    alert('Cadastro com sucesso')
                    form.reset()
               } else{
                    alert('Cadastro com error')
               }
            }) 
        })
}

