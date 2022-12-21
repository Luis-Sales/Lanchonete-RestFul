const listarProdutosClientes = document.querySelector('#listarProdutosClientes')
//console.log(listarProdutosClientes)

const API_URL_PRODUTOS = 'http://localhost:8080/api/products'
const API_URL_PEDIDOS = 'http://localhost:8080/api/pedidos'

//Efeito de mostrar a lista de cliente

function obterListProdutosParaClientes(){
    fetch(API_URL_PRODUTOS).then(response =>{
   response.json().then(data => {
    const produtosHtml = data.map(produtos => `

        <li class="list-group-item">
        <div class="container">
            <div class="row my-0">
                <div class="mt-0 col h5">${produtos.name} </div>
                <div class="col"><span class="h6">R$:</span> ${produtos.preco}</div>
                <form class="needs-validation col" id="formPedir">		 
                    <a 
                        class="btn btn-success"
                        class="botao-pedir"
                        value="Pendente" 
                        onclick="pedir()" 
                        data-id="${produtos.name}"  
                        name="${produtos.name}" 
                        id="pedir"
                        type="submit"
                        > Pedir
                    </a>     
                </form>	
            </div>          
        </div>
              
        </li>

    `).join('')
           
            productsListClientes.innerHTML = produtosHtml

            pedir()

            //excluir()
            //Editar()

        })
    })
}
  

function pedir(){

    const botoesPedir  = document.querySelectorAll('#pedir')

    //console.log(botoesPedir)

    botoesPedir.forEach(botao=>{
        botao.onclick = function (e){
            e.preventDefault()
            
            const namePedido = this.dataset.id
            const status  = "Pendente"

            

          //console.log(nameCliente)

            fetch(API_URL_PEDIDOS, {
                method : 'POST',
                headers : {'Content-Type':'application/json'},
                body: JSON.stringify({
                 namePedido,
                 status
                 //nameCliente,
                })
                }).then(response =>{
                    
                    response.json().then(data =>{
                        if(data.message === 'sucess'){       
                            //obterListProdutos()
                            alert('Pedido com sucesso')
                            
                       } else{
                            alert('Cadastro com error')
                       }
                    }) 
                })
            

        }
    })
}


obterListProdutosParaClientes()