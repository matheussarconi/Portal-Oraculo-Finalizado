async function logar(event){
    event.preventDefault(); // Adicionado para evitar o reset da página

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = { email, senha };

    const response = await fetch('http://localhost:3002/logar/usuario', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Corrigido aqui
    });

    let results = await response.json();

    if(results.success){
        let userData = results.data;

        localStorage.setItem('infoUsuario', JSON.stringify(userData)); // Corrigido aqui

        if(userData.perfil === 'admin'){
            window.location.href = "../adiministrador/admin.html";
        }else{
            window.location.href = "../paginaProdutos/produtos.html";
        }

        
        alert(results.message);
    } else {
        alert(results.message);
    }
}
