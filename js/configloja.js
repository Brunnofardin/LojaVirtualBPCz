

const dados = [...document.getElementsByClassName("coleta-dados")]

const mostrar = [...document.getElementsByClassName("amostra-dados")]



dados.map((el,i,a)=>{

    if(i  == 0){
        // Nick
        var nick = el.firstElementChild.nextElementSibling

    }else if(i == 1){
        // Quantidade de moedas
        var qtd = el.firstElementChild.nextElementSibling
        var valor = el.firstElementChild.nextElementSibling

        qtd.addEventListener("keypress",()=>{

            setTimeout(()=>{
                mostrar.map((e,i,a)=>{
                
                    if(i == 0){
    
                        e.firstChild.textContent=`Valor : $ ${valor.value},00` 
    
                    }
    
                })

            },200)
        

        })
        

    }else if(i == 2){
        var btn_prosseguir = el.firstElementChild

        btn_prosseguir.addEventListener("click",()=>{

            alert("Aqui começa a app de compras!")

        })

    }
    
})