
        function getEndereco(cep) {

            fetch(`https://viacep.com.br/ws/${cep}/json/`).
                then(function(data) {
                    data.json().then(function(json){


                        var logradouro = document.getElementById("logradouro")
                        logradouro.innerHTML += `${json.logradouro}`

                        var complemento= document.getElementById("complemento")
                        complemento.innerHTML += `${json.complemento}`

                        var bairro = document.getElementById("bairro")
                        bairro.innerHTML += `${json.bairro}`

                        var cidade = document.getElementById("cidade")
                        cidade.innerHTML += `${json.localidade}`
                        
                        var estado = document.getElementById("estado")
                        estado.innerHTML += `${json.uf}`

                        var textCep = document.getElementById("textCep")
                        textCep.innerHTML += `${json.cep}`

                        document.getElementById("cep").value = ""
                })
            })
        }

        function dispararPesquisa() {
            var  cep = document.getElementById("cep").value
         
            if(cep !== "") {
                getEndereco(cep)
            }
        }

