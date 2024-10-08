async function cadastrarProduto(event) {
    event.preventDefault();
    const nomeProduto = document.querySelector('#nome').value;
    const precoProduto = document.querySelector('#preco').value;
    const descricao = document.querySelector('#descricao').value;
    const qtdDisponivel = document.querySelector('#quantidade').value;
    const imagemProduto = document.querySelector('#file').files[0];
    

    let formData = new FormData();

    formData.append('nomeProduto', nomeProduto);
    formData.append('precoProduto', precoProduto);
    formData.append('descricao', descricao);
    formData.append('qtdDisponivel', qtdDisponivel);
    formData.append('imagemProduto', imagemProduto);

        const response = await fetch('http://localhost:3002/cadastrar/produto', {
            method: "POST",
            body: formData
        });


        const results = await response.json();

        if (results.success) {
            alert(results.message);
        } else {
            alert(results.message);
        }
}