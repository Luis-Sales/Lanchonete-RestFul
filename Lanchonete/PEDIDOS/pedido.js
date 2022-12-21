const formPedido = document.querySelector('#formPedidos')
const click = document.querySelector('click')






const API_URL_PEDIDOS = 'http://localhost:8080/api/pedidos'


// Listar Usuarios & Aciona a função status
function obterListaPedidosClientes(){
    //const produtosList = document.querySelector('#produtosList')
    fetch(API_URL_PEDIDOS).then(response =>{
   response.json().then(data => {
    const pedidosClientesHtml = data.map(clientes =>    `    
                    <li class="list-group-item laste" id="liStatus">

                    <div class="col">
                    ${clientes.namePedido}
                    </div>

             
                            <select data-id="${clientes._id}" class=" status form-select " aria-label="Default select example" name="select" id="select" >
                                        <option id="${clientes._id}"  selected="entrega" >${clientes.status}</option>
                                        <option id="${clientes._id}"  value="Pendente" >Pendente</option>
                                        <option id="${clientes._id}"  value="preparo" >Em preparo</option>
                                        <option id="${clientes._id}"  value="entrega" >Em entrega</option>
                                        <option id="${clientes._id}"  value="Entregue" >Entregue</option>
                                        <option id="${clientes._id}"  value="Cancelado" >Cancelado</option>
                            </select>                

                    
                </li>
               
                <li class="list-group-item laste" id="liStatus " style="display: none;">

                <div class="col">
                x-pedro
                </div>

         
                        <select data-id="" class=" status form-select " aria-label="Default select example" name="select" id="select" >
                                    <option id=""  selected="entrega" >Pendente</option>
                                    <option id=""  value="Pendente" >Pendente</option>
                                    <option id=""  value="preparo" >Em preparo</option>
                                    <option id=""  value="entrega" >Em entrega</option>
                                    <option id=""  value="Entregue" >Entregue</option>
                                    <option id=""  value="Cancelado" >Cancelado</option>
                        </select>                   
                </li>

    `).join('')
            pedidosList.innerHTML = pedidosClientesHtml

            
        })
    })
}

// Cadastrar Pedidos
formPedido.onsubmit = function(e){
    e.preventDefault()

    const nameCliente = document.forms['formPedidos'].nameCliente.value
    const namePedido  = document.forms['formPedidos'].namePedido.value
    const status      = document.forms['formPedidos'].status.value

    fetch(API_URL_PEDIDOS, {
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({
         nameCliente, 
         namePedido,
         status,
        })
        }).then(response =>{
            
            response.json().then(data =>{
                if(data.message === 'sucess'){       
                    //obterLista()
                    alert('Cadastro com sucesso')
                    form.reset()
               } else{
                    alert('Cadastro com error')
               }
            }) 
        })
}


//ALterar status do pedido

var formStatus = document.querySelector('#formStatus')


formStatus.onsubmit = function(e){
    e.preventDefault()
    
    const name = document.forms['formStatus'].select

    console.log(name)

    name.forEach(valores => {
        //console.log(valores)
        const status =  valores.value
        const id =  valores.dataset.id

            fetch(`${API_URL_PEDIDOS}/${id}`,{
                method:'PUT',
                headers : {
                'Content-Type':'application/json'
                },
                    body: JSON.stringify({
                        status, 
                    })
            }).then(response =>{
                response.json().then(data =>{
                    if(data.message === 'sucess'){
                    //alert('Alterado')
                    obterListaPedidosClientes()
                    chamarList()
                    }else{
                        alert('Erro')
                    }     
                })
            })

    })

    
    obterListaPedidosClientes()
}

function chamarList(){
    obterListaPedidosClientes()
}

function sumirIntemUmForm(){
    
    const sumirIntemUmForm = document.getElementsByClassName('list-group-item laste')
    

    //sumirIntemUmForm.style.display = "none";
    
    console.log(sumirIntemUmForm)

}

sumirIntemUmForm()
    

    


obterListaPedidosClientes()