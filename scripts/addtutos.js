const cadastroInicialTutoHTML = `
                <div class="upper">
                <a class="go-back-tuto" href="tutoriais">
                                    <span class="material-symbols-outlined arrow">
                        keyboard_arrow_left
                    </span>
                    Voltar
                </a>
                
                <h2>
                    Adicionar Novo Tutorial
                </h2>
                <div class="create-options">
                    <div class="name-option">
                        <span>
                           <strong> Título</strong>
                        </span>
                        <input type="text" id="titulo" placeholder="Título do Tutorial">
                    </div>
                    <div class="type-option">
                     <span>
                            <strong>Tipo do Botão</strong>
                        </span>
                    <form>
                        <input class="btn-type-input" type="radio" id="botaoPai" name="btn-type" value="">
                        <label for="botaoPai">Botão Pai</label><br>
                        <input class="btn-type-input" type="radio" id="botaoFilho" name="btn-type" value="">
                        <label for="botaoFilho">Botão Filho</label><br>
                        <input class="btn-type-input" type="radio" id="botaoNormal" name="btn-type" value="">
                        <label for="botaoNormal">Botão Normal</label>
                    </form>
                    <div class="choose-btn-pai">                      
                            <select class="select-el bhidden" id="botoes-pai" required>
                            </select>
                        </div>
                    <div class="desc-option">
                        <span>
                        <strong>    Descrição</strong>
                        </span>
                        <input type="text" id="descricao" placeholder="Descrição do Tutorial">
                    </div>
                    <div class="id-option">
                        <span>
                       <strong>     ID </strong>(Imagens)
                        </span>
                        <input type="text" id="tutoid" placeholder="ID">
                    </div>
                    </div>
                    <div class="passo-option">
                        <span>
                            <strong>Passo 1</strong>
                        </span>
                        <input type="text" id="passo1titulo" placeholder="Título Passo 1">
                        <input class="passoText" id="passo1" type="text" placeholder="Texto Passo 1 (Insira break para quebrar linhas)">
                        <span>
                            Imagem ou GIF
                        </span>
                        <input class="imgInput" id="tutoimage1" type="file">
                    </div>
                    <div class="passo-option">
                        <span>
                            <strong>Passo 2</strong>
                        </span>
                        <input type="text" id="passo2titulo" "placeholder="Título Passo 2">
                        <input class="passoText" id="passo2" type="text" placeholder="Texto Passo 2 (Insira break para quebrar linhas)">
                        <span>
                            Imagem ou GIF
                        </span>
                        <input class="imgInput" id="tutoimage2"type="file">
                    </div>
                    <div class="passo-option">
                        <span>
                            <strong>Passo 3</strong>
                        </span>
                        <input type="text" id="passo3titulo" placeholder="Título Passo 3">
                        <input class="passoText" id="passo3" type="text" placeholder="Texto Passo 3 (Insira break para quebrar linhas)">
                        <span>
                            Imagem ou GIF
                        </span>
                        <input class="imgInput" id="tutoimage3"type="file">
                    </div>
                    <div class="passo-option">
                        <span>
                            <strong>Passo 4</strong>
                        </span>
                        <input type="text" id="passo4titulo" placeholder="Título Passo 4">
                        <input class="passoText" id="passo4" type="text" placeholder="Texto Passo 4 (Insira break para quebrar linhas)">
                        <span>
                            Imagem ou GIF
                        </span>
                        <input class="imgInput" id="tutoimage4" type="file">
                    </div>
                    <div class="passo-option">
                        <span>
                            <strong>Passo 5</strong>
                        </span>
                        <input type="text" id="passo5titulo" placeholder="Título Passo 5">
                        <input class="passoText" id="passo5" type="text" placeholder="Texto Passo 5 (Insira break para quebrar linhas)">
                        <span>
                            Imagem ou GIF
                        </span>
                        <input class="imgInput" id="tutoimage5" type="file">
                    </div>
                    <div class="palavras-chave-option">
                            <span>
                            <strong>    Palavras-Chave </strong> (Melhorar mecanismo de pesquisa)
                            </span>
                            <input type="text" id="palavraschave" placeholder="Insira palavras-chave">
                        </div>
                    </div>
                            <div class="create-btn">
                <button class="create-tuto-btn">
                    Criar Tutorial
                </button>
            </div>
`

const container = document.querySelector('.container');

container.innerHTML = cadastroInicialTutoHTML;

const criarBtn = document.querySelector('.create-tuto-btn');

function criarTutorial() {
    const tituloInput = document.getElementById("titulo").value;
    const descricaoInput = document.getElementById("descricao").value;
    const passo1TituloInput = document.getElementById("passo1titulo").value;
    const passo1Input = document.getElementById("passo1").value;
    const passo2TituloInput = document.getElementById("passo2titulo").value;
    const passo2Input = document.getElementById("passo2").value;
    const passo3TituloInput = document.getElementById("passo3titulo").value;
    const passo3Input = document.getElementById("passo3").value;
    const passo4TituloInput = document.getElementById("passo4titulo").value;
    const passo4Input = document.getElementById("passo4").value;
    const passo5TituloInput = document.getElementById("passo5titulo").value;
    const passo5Input = document.getElementById("passo5").value;
    const idTeste = document.getElementById("tutoid").value;
    const palavrasChave = document.getElementById("palavraschave").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3512/botoes', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        nome: `${tituloInput}`,
        botaoPai: eBotaoPai,
        botaoFilho: eBotaoFilho,
        dropDownIndex: `${dropDownIndex}`
    }));

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3512/tutoriais', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        titulo: `${tituloInput}`,
        descricao: `${descricaoInput}`,
        passo1titulo: `${passo1TituloInput}`,
        passo1: `${passo1Input}`,
        tutoimage1: `${idTeste}1.gif`,
        passo2titulo: `${passo2TituloInput}`,
        passo2: `${passo2Input}`,
        tutoimage2: `${idTeste}2.gif`,
        passo3titulo: `${passo3TituloInput}`,
        passo3: `${passo3Input}`,
        tutoimage3: `${idTeste}3.gif`,
        passo4titulo: `${passo4TituloInput}`,
        passo4: `${passo4Input}`,
        tutoimage4: `${idTeste}4.gif`,
        passo5titulo: `${passo5TituloInput}`,
        passo5: `${passo5Input}`,
        tutoimage5: `${idTeste}5.gif`,
        passos: 0,
        palavraschave: `${palavrasChave}`
    }));
}

const tBtns = document.querySelectorAll('.btn-type-input');
const selectElBtn = document.querySelector('.select-el');
let eBotaoPai = false;
let eBotaoFilho = false;
let maiorDropDownIndex = -1;
let dropDownIndex = '';

tBtns.forEach((tbtn) => {
    tbtn.addEventListener('click', () => {
        tBtns.forEach((btn, bi) => {
            if (bi === 0) {
                if (btn.checked) {
                    selectElBtn.classList.add('bhidden');
                    eBotaoPai = true;
                    eBotaoFilho = false;
                    // gerar dropdown index novo
                    loadBotoes(() => {
                        botoes.forEach((botao) => {
                            if(botao.botaoPai) {
                                if (maiorDropDownIndex < botao.dropDownIndex) {
                                    maiorDropDownIndex = botao.dropDownIndex;
                                }
                            }
                        })
                        let dropDownI = '';
                        dropDownI = Number(maiorDropDownIndex) + 1;
                        dropDownIndex = dropDownI;
                        console.log(dropDownIndex);
                    })
                    
                }
            }
            else if (bi === 1) {
                if (btn.checked) {
                    selectElBtn.classList.remove('bhidden');
                    eBotaoFilho = true;
                    eBotaoPai = false;
                    // escolher dropdown index
                    loadBotoes(() => {
                        let botoesPaiHTML = '<option value="" disabled selected hidden>Selecione o Botão Pai</option>';
                        botoes.forEach((botao) => {
                            if (botao.botaoPai) {
                                botoesPaiHTML += `<option class="sel-op" value="${botao.nome}">${botao.nome}</option>`
                            }
                        })
                        const selectEl = document.getElementById("botoes-pai");
                        selectEl.innerHTML = botoesPaiHTML;
                        selectEl.addEventListener('click', () => {
                            botoes.forEach((botao) => {
                                if (selectEl.value == botao.nome) {
                                    let dropDownI = '';
                                    dropDownI = botao.dropDownIndex;
                                    dropDownIndex = dropDownI;
                                    console.log(dropDownIndex);
                                }
                            })
                        })



                    })

                }
            }
            else if (bi === 2) {
                if (btn.checked) {
                    selectElBtn.classList.add('bhidden');
                    eBotaoFilho = false;
                    eBotaoPai = false;
                    dropDownI = '999'
                    dropDownIndex = dropDownI;
                    console.log(dropDownIndex);
                }
            }
        })
    })
})

criarBtn.addEventListener('click', () => {
    criarTutorial();
    setTimeout(() => {
        window.location.href = "tutoriais"
    }, 2000)
})