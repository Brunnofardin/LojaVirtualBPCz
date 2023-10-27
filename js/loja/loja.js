

const dados = [...document.getElementsByClassName("coleta-dados")]
const mostrar = [...document.getElementsByClassName("amostra-dados")]
const clicaveis = [...document.getElementsByClassName("clicaveis theme")]




mostrar.map((el1,i,a)=>{

    if(i == 1){

        dados.map((el,i,a)=>{

            if(i == 1){

                var qtd = el.firstElementChild.nextElementSibling
                
                qtd.addEventListener("keypress",()=>{
                    
                    setTimeout(()=>{

                        mostrar.map((e,i,a)=>{
                            
                            if(i == 0){
                                
                                    e.textContent=`Valor a ser pago: $${qtd.value}`

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
                const div = document.createElement("div");

                // OCUTANDO BOTAO DE PROSEGUIR

                btn_prosseguir.style.display="none";

                // CRIANDO BOTAO DE CONFIRMAR
                a.style.color="white";
                a.style.margin="auto";
                a.innerText="Confirmar";
                a.style.display="block";
                a.style.textAlign="center";
                a.style.fontWeight="bolder";
                a.style.textDecoration="none";
                
                div.setAttribute("class","btn")
                a.setAttribute("target","_blank");
                
                // COLETANDO DADOS
                

                // FORMATANDO LINK WHATSSAPP

                link = `https://api.whatsapp.com/send?phone=5527998518659&text=Ol%C3%A1%20meu%20nome%20é%20${nick}%20eu%20gostaria%20de%20comprar%20${valor}%20Mil%20Moedas%20Vip%20%20em%20seu%20servidor,%20poderia%20me%20ajudar?`;
                
                a.setAttribute("href",link);

                div.appendChild(a);

                btn_prosseguir.parentNode.appendChild(div);
                
                
            }

            
            
        })

    }
    
})


