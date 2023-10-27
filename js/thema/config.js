// VARIAVEIS GLOBAIS
const corpo = document.getElementsByTagName("main")[0];

const body = document.getElementsByTagName("body")[0]

const header = document.getElementsByTagName("header")[0];

const btn_menu  = [...document.getElementsByClassName("menuF")];

const menuPc = [...document.getElementsByClassName("menuPc")];

const menuF = [...document.getElementsByClassName("menuF")];


// ELEMENTOS DO HEADER

const hel1 = header.firstElementChild; // Logo
const hel2 = header.firstElementChild.nextElementSibling; // Menu
const hel3 = header.firstElementChild.nextElementSibling.nextElementSibling; // Texto
const theme = header.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling; // btn Thema


// UPDATES ( MENU RESPONSIVO)
function updatesMenuRes(){

    if(window.innerWidth >=480){

        btn_menu.map((el,i,a)=>{

            if(i == 0){
    
                    el.style.display = "none"
                    
              
    
            }
    
        })
        menuPc.map((el,i,a)=>{

            el.style.display = "flex"

        })
        hel2.style.display = "none"
        hel3.style.display = "block"
    
       

 

    }else{
        menuPc.map((el,i,a)=>{
            el.style.display = "none"

        })
        hel2.style.display="flex"
        hel3.style.display = "none"
    }



}
onresize = ()=>{
    updatesMenuRes();
    
}
onload = ()=>{

    updatesMenuRes();
}

// NOVO THEMA ( DARK )

function thema(){


    menuPc.map((el,i)=>{
        if(i == 0){
            el.style.background="#030369"
        }
    })
    menuF.map((el,i)=>{
        if(i == 0){
            el.style.background="#0000007a"
        }
    })
    theme.style.color="white"
    corpo.style.backgroundColor="#aaaaaa"
    header.style.background="darkblue"
    theme.innerHTML="Dark"
    body.style.background="#aaaaaa"
   
   
    theme.style.background="black";
}
function themaNoite(){
    menuPc.map((el,i)=>{
        if(i == 0){
            el.style.background="#030369"
        }
    })
    menuF.map((el,i)=>{
        if(i == 0){
            el.style.background="#0000007a"
        }
    })
    theme.style.color="white"
    corpo.style.backgroundColor="#aaaaaa"
    header.style.background="darkblue"
    theme.innerHTML="Dark"
    body.style.background="#aaaaaa"
    theme.style.background="black";
}

// MUDANDO THEMA AO CLICAR

theme.addEventListener("click",()=>{
  
        if(theme.style.background == "black"){
           
            menuPc.map((el,i)=>{
                if(i == 0){
                    el.style.background=""
                }
            })
            menuF.map((el,i)=>{
                if(i == 0){
                    el.style.background=""
                }
            })

            theme.style.background="";
            theme.style.color=""
            corpo.style.backgroundColor=""
            header.style.background=""
            hel1.style.background=""
            hel1.style.color=""
            hel2.style.background=""
            hel2.style.color=""
            hel3.style.background=""
            hel3.style.color=""
            body.style.background=""
            theme.innerHTML="Light"

        }else{
            
          thema()  

        }

   
   

})

// ABRINDO E FECHANDO MENU FLUTUANTE AO CLICAR OU EM ALTERAÇÃO DE LARGURA DA PÁGINA
header.firstElementChild.nextElementSibling.addEventListener("click",()=>{

    btn_menu.map((el,i,a)=>{

        if(i == 0){
            if(el.style.display == "flex"){

                el.style.display = "none"

            }else{

                el.style.display = "flex"

            }
          

        }

    })

  
})
