let perfilData = localStorage.getItem('infoUsuario')

    document.addEventListener("DOMContentLoaded", () => {
        let perfil = JSON.parse(perfilData).perfil
        listarProdutosAdimin()

        if(perfil === 'admin'){
            alert('Você é admin')
        }else{
            alert('Você não é admin')
            window.location.href='../login/login.html'
        }
    });
    async function listarProdutosAdimin() {
        const response = await fetch('http://localhost:3002/produtos/listar', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const results = await response.json();
    
        if (results.success) {
            let productData = results.data;
            const images = 'http://localhost:3002/uploads/';
            let html = document.getElementById('main');
    
            if (html) { // Verifica se o elemento existe
                console.log(productData);
    
                productData.forEach(product => {
                    let card = `
                    <div class="bordaProdutos">
                        <div class="divProdutos">
                            <button class="botaoImagem">
                                <a href="../paginaDeUmProduto/Charrado.html">
                                    <img class="produtosImagem" src="${images + product.imagemProduto}" alt="">
                                </a>
                            </button>
                        <button class="botaoEditar" onclick='editarProduto(${JSON.stringify(product)})'><img class="editarIcon" src="../Imagens/editar.png" alt="carrinho de compras"></button>
                    </div>
                <p class="nomeProduto">${product.nomeProduto}<strong class="preco">R$${product.precoProdutos}</strong></p>
            </div>
            <div class="divEditar" id="modalEditarProduto">
                <form class="form">
                    <input type="hidden" id="id_produtos" value="">
                    <input type="text" placeholder="Alterar o nome do produto:" id="nomeProduto">
                    <input type="number" placeholder="Quantidade disponível:" id="qtdDisponivel">
                    <input type="text" placeholder="Alterar descrição:" id="descricao">
                    <input type="number" placeholder="Preço atual: R$${product.precoProdutos} " id="precoProdutos">
                    <input type="file" placeholder="Nova imagem" id="imagemProduto">
                    <button onclick="atualizarProduto(event)">Atualizar</button>
                </form>
            </div>
                    `;
                    html.innerHTML += card;
                });
            } else {
                console.error('Elemento com ID "main" não encontrado.');
            }
        } else {
            alert(results.message);
        }
    }
    


    function editarProduto(product){
        let modal = document.getElementById('modalEditarProduto')
        // modal.style.display = "block";
        let divEditar = document.querySelector('.divEditar')
        let styleModalEditar = window.getComputedStyle(divEditar);
        let displayModalEditarProdutos = styleModalEditar.getPropertyValue('display');
        let images = 'http://localhost:3002/uploads/'
    
        if(displayModalEditarProdutos == "none"){
            divEditar.style.display = "flex";
        } else {
            divEditar.style.display = "none";
        }
    
        document.getElementById('id_produtos').value = product.id_produtos
        document.getElementById('nomeProduto').value = product.nomeProduto
        document.getElementById('qtdDisponivel').value = product.qtdDisponivel
        document.getElementById('descricao').value = product.descricao
        document.getElementById('precoProdutos').value = product.precoProduto    
        document.getElementById('imagemProduto').src = images + product.image
    }
    
    async function atualizarProduto(event) {
        event.preventDefault();
    
        let id_produtos = document.getElementById('id_produtos').value
        let nomeProduto = document.getElementById('nomeProduto').value 
        let qtdDisponivel = document.getElementById('qtdDisponivel').value 
        let descricao = document.getElementById('descricao').value 
        let precoProdutos = document.getElementById('precoProdutos').value
        let imagemProduto = document.getElementById('imagemProduto').files

        
        let formData = new FormData()
    
        formData.append('id_produtos', id_produtos);
        formData.append('nomeProduto ', nomeProduto);
        formData.append('qtdDisponivel', qtdDisponivel);
        formData.append('descricao', descricao);
        formData.append('precoProdutos', precoProdutos);
        formData.append('imagemProduto', imagemProduto);

    
        // alert((formData.get('titulo') +  '' + formData.get('novaQtd') +  '' + formData.get('novaDescricao') + '' + formData.get('novoPreco')));
        // alert('aaaaa')
        const response = await fetch(`http://localhost:3002/produto/${id_produtos}`, {
            method: "PUT",
            body: formData
        })
    
        const results = await response.json()
    
        if(results.success){
            alert(results.message)
        } else {
            alert(results.message)
        }
    }
    