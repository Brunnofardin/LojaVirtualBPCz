

const dados = [...document.getElementsByClassName("coleta-dados")]

const mostrar = [...document.getElementsByClassName("amostra-dados")]

const clicaveis = [...document.getElementsByClassName("clicaveis theme")]


theme.addEventListener("click",()=>{
    
    if(theme.style.background == "black"){
        clicaveis.map((el,i,a)=>{
            el.addEventListener("click",()=>{
                dados.map((el,i,a)=>{
                    el.firstElementChild.style.background="";
                    el.style.background="";
                    el.parentNode.firstElementChild.style.background="";
                    
                    mostrar.map((el,i,a)=>{
                        el.style.background="";
                
                    })
                
                    
                })
        
        
            })
        })
        
        
    }else{
        clicaveis.map((el,i,a)=>{
            el.addEventListener("click",()=>{
                dados.map((el,i,a)=>{
                    el.firstElementChild.style.background="#5f4949ab"
                    el.style.background="#02029786"
                    el.parentNode.firstElementChild.style.background="#02029786"
                    
                    mostrar.map((el,i,a)=>{
                        el.style.background="#02029786"
                
                    })
                
                    
                })
        
        
            })
        })
        
       

    }




})

mostrar.map((el1,i,a)=>{

    if(i == 1){

        dados.map((el,i,a)=>{

            if(i == 1){

                var qtd = el.firstElementChild.nextElementSibling
                
                qtd.addEventListener("keypress",()=>{
                    
                    setTimeout(()=>{

                        mostrar.map((e,i,a)=>{
                            
                            if(i == 0){
                                
                                    e.textContent=`Valor a se pago: $${qtd.value}`

                                    el1.textContent=`Total de moedas: ${qtd.value}.000`
        
                                
            
                            }
            
                        })
        
                    },200)
                
        
                })

               

            }

        })

    }

})

dados.map((el,i,a)=>{
    
    if(i == 2){

        var btn_prosseguir = el.firstElementChild

        btn_prosseguir.addEventListener("click",()=>{

            let nick;  

            let valor;

            dados.map((el,i,a)=>{

                

                if(i == 0){
                    nick = el.firstElementChild.nextElementSibling.value;
                    
    
                }else if(i == 1){

                    valor = el.firstElementChild.nextElementSibling.value;
                    
                }


            
            })
            if(nick == 0 || valor == 0){

                alert("Preencha todos os campos e tente novamente!");
                
            }else{

                // VARIAVEIS LOCAIS
                
                let link
                

                const a = document.createElement("a");

                // OCUTANDO BOTAO DE PROSEGUIR

                btn_prosseguir.style.display="none";

                // CRIANDO BOTAO DE CONFIRMAR
                a.style.width="65%";
                a.style.padding="5px";
                a.style.color="white";
                a.style.margin="auto";
                a.innerText="Confirmar";
                a.style.display="block";
                a.style.background="blue";
                a.style.textAlign="center";
                a.style.fontWeight="bolder";
                a.style.textDecoration="none";
                a.style.border="2px solid white";
                a.setAttribute("target","_blank");
                
                // COLETANDO DADOS
                

                // FORMATANDO LINK WHATSSAPP

                link = `https://api.whatsapp.com/send?phone=5527998518659&text=Ol%C3%A1%20meu%20nick%20é%20${nick}%20e%20quero%20comprar%20${valor}%20Mil%20Moedas%20Vip`;
                
                a.setAttribute("href",link);

                btn_prosseguir.parentNode.appendChild(a);
                
                
            }

            
            
        })

    }
    
})


