// ================================
// CARRINHO
// ================================

const botoes = document.querySelectorAll(".comprar");
const lista = document.getElementById("listaCarrinho");
const total = document.getElementById("total");
const contador = document.getElementById("contador");

const abrir = document.getElementById("abrirCarrinho");
const fechar = document.getElementById("fechar");
const carrinho = document.getElementById("carrinho");

let quantidade = 0;
let valorTotal = 0;

// ================================
// ABRIR CARRINHO
// ================================

abrir.addEventListener("click", () => {
    carrinho.classList.add("ativo");
});

// ================================
// FECHAR CARRINHO
// ================================

fechar.addEventListener("click", () => {
    carrinho.classList.remove("ativo");
});

// ================================
// ADICIONAR PRODUTOS
// ================================

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const card = botao.parentElement;

        const nome = card.querySelector("h3").innerText;

        const precoTexto = card.querySelector("p").innerText;

        const preco = Number(
            precoTexto
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );

        quantidade++;

        valorTotal += preco;

        contador.innerText = quantidade;

        total.innerText =
            "R$ " +
            valorTotal.toFixed(2).replace(".", ",");

        const item = document.createElement("li");

        item.innerHTML = `
            ${nome}<br>
            ${precoTexto}
            <br><br>
            <button class="remover">Remover</button>
        `;

        lista.appendChild(item);

        alert(nome + " adicionado ao carrinho!");

    });

});

// ================================
// REMOVER PRODUTO
// ================================

lista.addEventListener("click", function(e){

    if(e.target.classList.contains("remover")){

        const li = e.target.parentElement;

        const texto = li.innerText;

        const precoTexto = texto.match(/R\$ ?[\d.,]+/)[0];

        const preco = Number(
            precoTexto
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );

        valorTotal -= preco;

        quantidade--;

        if(quantidade < 0){
            quantidade = 0;
        }

        if(valorTotal < 0){
            valorTotal = 0;
        }

        contador.innerText = quantidade;

        total.innerText =
            "R$ " +
            valorTotal.toFixed(2).replace(".", ",");

        li.remove();

    }

});

// ================================
// PESQUISA
// ================================

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", function(){

    const texto = pesquisa.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const titulo = card.querySelector("h3").innerText.toLowerCase();

        if(titulo.indexOf(texto) > -1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// ================================
// SCROLL SUAVE DOS LINKS
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const voltar = document.createElement("button");

voltar.innerHTML = "↑";

voltar.style.position="fixed";
voltar.style.bottom="20px";
voltar.style.right="20px";
voltar.style.width="50px";
voltar.style.height="50px";
voltar.style.borderRadius="50%";
voltar.style.border="none";
voltar.style.background="#111";
voltar.style.color="white";
voltar.style.fontSize="22px";
voltar.style.cursor="pointer";
voltar.style.display="none";

document.body.appendChild(voltar);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        voltar.style.display="block";

    }else{

        voltar.style.display="none";

    }

});

voltar.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
