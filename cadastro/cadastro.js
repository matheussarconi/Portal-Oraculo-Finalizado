async function cadastrar(event) {
    event.preventDefault();

    const nomeUsuario = document.querySelector('#nomeUsuario').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    const data ={nomeUsuario, email, senha}
    
    const response = await fetch('http://localhost:3002/usuario/cadastrar', {
        method: "POST",
        headers:{
            "Content-Type":"appLication/json"
        },
        body:JSON.stringify(data)
    })
    
        const results = await response.json()

        if(results.success){
            alert(results.message)
            window.location.href ="../paginaInicial/index.html"
        } else{
            alert(alert.message)
        }
    };
