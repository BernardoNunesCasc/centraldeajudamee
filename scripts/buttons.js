let btnIndex;
let allBtns;


// GERANDO BOTOES

const leftNavMenu = document.querySelector('.left-nav-menu');

let botoesHTML = '';
let botoesFilhoHTML0 = '';
let botoesFilhoHTML1 = '';
let botoesFilhoHTML2 = '';
let botoesFilhoHTML3 = '';
let botoesFilhoHTML4 = '';
let botoesFilhoHTML5 = '';

function gerarHTMLbotoes() {
    botoes.forEach((botao, botaoIndex) => {
        if (!botao.botaoPai && !botao.botaoFilho) {
            botoesHTML += `<a class="left-nav-menu-button menu-option-btn" href="${botaoIndex}.html">${botao.nome}</a>`;
        }
        else if (botao.botaoPai) {
            botoesHTML += `
            <div class="dropdown-container">
                    <button class="left-nav-menu-button left-nav-dropdown-button dropdown-option-btn">
                    ${botao.nome}
                    <span class="material-symbols-outlined arrow">
                        keyboard_arrow_down
                    </span>
                    </button>
                <ul class="dropdown-elements">
                </ul>
            </div>
            `;
        }
        else if (botao.botaoFilho) {
            if (botao.dropDownIndex == 0) {
                botoesFilhoHTML0 += `<li><a class="left-nav-menu-button dropdown-el-btn" href="${botaoIndex}.html">${botao.nome}</a></li>`;
            }
            else if (botao.dropDownIndex == 1) {
                botoesFilhoHTML1 += `<li><a class="left-nav-menu-button dropdown-el-btn" href="${botaoIndex}.html">${botao.nome}</a></li>`;
            }
            else if (botao.dropDownIndex == 2) {
                botoesFilhoHTML2 += `<li><a class="left-nav-menu-button dropdown-el-btn" href="${botaoIndex}.html">${botao.nome}</a></li>`;
            }
            else if (botao.dropDownIndex == 3) {
                botoesFilhoHTML3 += `<li><a class="left-nav-menu-button dropdown-el-btn" href="${botaoIndex}.html">${botao.nome}</a></li>`;
            }
            else if (botao.dropDownIndex == 4) {
                botoesFilhoHTML4 += `<li><a class="left-nav-menu-button dropdown-el-btn" href="${botaoIndex}.html">${botao.nome}</a></li>`;
            }
            else if (botao.dropDownIndex == 5) {
                botoesFilhoHTML5 += `<li><a class="left-nav-menu-button dropdown-el-btn" href="${botaoIndex}.html">${botao.nome}</a></li>`;
            }
        }
        leftNavMenu.innerHTML = botoesHTML;
        const dropdowns = document.querySelectorAll('.left-nav-dropdown-button');
        const arrows = document.querySelectorAll('.arrow');

        dropdowns.forEach((dropdown, index) => {
            dropdown.addEventListener('click', () => {
                desativarBotaoAtivo();
                dropdown.classList.toggle('menu-active-btn');
                arrows.forEach((arrow, indexArrow) => {
                    arrow.classList.remove('arrow-active');
                    if (indexArrow === index) {
                        arrow.classList.toggle('arrow-active')
                    }
                })
            })
            })
    })
}

new Promise((resolve) => {
    loadBotoes(() => {
        resolve();
    })
}).then(() => {
    gerarHTMLbotoes();
    gerarDropDownContent();
})


function desativarBotaoAtivo() {
    const buttons = document.querySelectorAll('.left-nav-menu-button');
    buttons.forEach((button) => {
        if (button.classList.contains('menu-active-btn')) {
            button.classList.remove('menu-active-btn')
        }

    })
}
// DROPDOWN BUTTONS

function gerarDropDownContent () {
    const dropdowns = document.querySelectorAll('.left-nav-dropdown-button');
    const dropdownsContent = document.querySelectorAll('.dropdown-elements');
    dropdowns.forEach((dropdown, index) => {
        dropdown.addEventListener('click', () => {
            console.log(dropdownsContent);
    dropdownsContent.forEach((dropCont, dpIndex) => {
        dropCont.classList.remove('dropdown-elements-active');
        dropCont.classList.add('dropdown-elements')
        if (dpIndex == index) {
            dropCont.classList.toggle('dropdown-elements-active');
            dropCont.classList.toggle('dropdown-elements');
        }
    })
    })
        })    
        dropdowns.forEach((dropdown, index) => {
            dropdownsContent.forEach((dropCont, dpIndex) => {
                dropCont.classList.remove('dropdown-elements-active');
                dropCont.classList.add('dropdown-elements')
                if (dpIndex == index) {
                    dropCont.classList.add('dropdown-elements-active');
                    dropCont.classList.remove('dropdown-elements');
                }
                if (dropCont.classList.contains('dropdown-elements-active')) {
                    dropCont.classList.remove('dropdown-elements-active');
                    dropCont.classList.add('dropdown-elements')
                }
                botoes.forEach((botao, index1) => {
                    if (dpIndex == `${botao.dropDownIndex}` && botao.botaoFilho) {
                        if (botao.dropDownIndex == 0) {
                            dropCont.innerHTML = botoesFilhoHTML0;
                        }
                        else if (botao.dropDownIndex == 1) {
                            dropCont.innerHTML = botoesFilhoHTML1;
                        }
                        else if (botao.dropDownIndex == 2) {
                            dropCont.innerHTML = botoesFilhoHTML2;
                        }
                        else if (botao.dropDownIndex == 3) {
                            dropCont.innerHTML = botoesFilhoHTML3;
                        }
                        else if (botao.dropDownIndex == 4) {
                            dropCont.innerHTML = botoesFilhoHTML4;
                        }
                        else if (botao.dropDownIndex == 5) {
                            dropCont.innerHTML = botoesFilhoHTML5;
                        }
        
                    }
                })
            })
        })
        
    
}

/* function ativarBotaoTelaNova() {
    botoes.forEach((botao, botaoIndex) => {
        if (botaoIndex == numTutorialGerado) {
            if (botao.classList.contains('menu-option-btn')) {
                console.log('chegou');
                botao.classList.add('menu-active-btn')
            }
            else if (botao.classList.contains('dropdown-el-btn')) {
                botoes.forEach((btn) => {
                    if (btn.botaoPai && botao.dropDownIndex === btn.dropDownIndex) {
                        btn.classList.add('menu-active-btn');
                        const arrows = document.querySelectorAll('.arrow');
                        const dropdownsContent = document.querySelectorAll('.dropdown-elements');
                        arrows.forEach((arrow, indexArrow) => {
                            arrow.classList.remove('arrow-active');
                            if (indexArrow === botao.dropDownIndex) {
                                arrow.classList.toggle('arrow-active')
                            }
                        })
                        dropdownsContent.forEach((dropCont, dcIndex) => {
                            if (dcIndex === botao.dropDownIndex) {
                                dropCont.classList.add('dropdown-elements-active');
                                dropCont.classList.remove('dropdown-elements');
                            }
                        })
                        
                    }
                })
                botao.classList.add('dropdown-el-btn-active');
                
            }
        }
    })
} */

// menu dropdown celulares

const menuIconEl = document.querySelector('.menu-icon');
const leftNavMenuEl = document.querySelector('.left-nav-menu');
const tutorialContainerEl = document.querySelector('.tutorial-container');

menuIconEl.addEventListener('click', () => {
    leftNavMenuEl.classList.toggle('cellphone-menu-active');
    tutorialContainerEl.classList.toggle('cellphone-screen-active');
})

function fecharMenuCelular() {
    leftNavMenuEl.classList.remove('cellphone-menu-active');
    tutorialContainerEl.classList.remove('cellphone-screen-active');
}

// fechar menu ao clicar na tela

tutorialContainerEl.addEventListener('click', () => {
    fecharMenuCelular();
})