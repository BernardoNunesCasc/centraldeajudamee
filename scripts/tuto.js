// FUNCAO DE GERAR HTML TUTOS
numTutorialGerado = document.querySelector('.numTuto').innerHTML;

function desativarDropDown() {
    dropdownsContent.forEach((el) => {
        if (el.classList.contains('dropdown-elements-active')) {
            el.classList.remove('dropdown-elements-active');
            el.classList.add('dropdown-elements');
        }
    })
    arrows.forEach((arrow) => {
        if (arrow.classList.contains('arrow-active')) {
            arrow.classList.remove('arrow-active');
        }
        
})
}
function gerarHTMLtutoriais () {
    tutoriais.forEach((tutorial, tutoIndex) => {
            if (tutoIndex == numTutorialGerado && tutorial.titulo) {
                document.title = `${tutorial.titulo}`;
                if (!tutorial.passo3) {
                    document.getElementById(numTutorialGerado).innerHTML = `<div class="go-back-container">
                    <span class="material-symbols-outlined arrow">
                        keyboard_arrow_left
                    </span>
                    <a class="go-back-btn" href="index.html">
                        Voltar
                    </a>
                </div>
                <div class="top-section">
                    <h2>
                    ${tutorial.titulo}
                    </h2>
                    <p>
                    ${tutorial.descricao}
                    </p>
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo1titulo}
                    </h2>
                    <p>
                    ${tutorial.passo1}                
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage1}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo2titulo}
                    </h2>
                    <p>
                    ${tutorial.passo2}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage2}">
                </div>`;
                } else if (!tutorial.passo4) {
                    document.getElementById(numTutorialGerado).innerHTML = `<div class="go-back-container">
                    <span class="material-symbols-outlined arrow">
                        keyboard_arrow_left
                    </span>
                    <a class="go-back-btn" href="index.html">
                        Voltar
                    </a>
                </div>
                <div class="top-section">
                    <h2>
                    ${tutorial.titulo}
                    </h2>
                    <p>
                    ${tutorial.descricao}
                    </p>
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo1titulo}
                    </h2>
                    <p>
                    ${tutorial.passo1}                
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage1}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo2titulo}
                    </h2>
                    <p>
                    ${tutorial.passo2}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage2}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo3titulo}
                    </h2>
                    <p>
                    ${tutorial.passo3}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage3}">
                </div>
                `;
                } else if (!tutorial.passo5) {
                    document.getElementById(numTutorialGerado).innerHTML = `<div class="go-back-container">
                    <span class="material-symbols-outlined arrow">
                        keyboard_arrow_left
                    </span>
                    <a class="go-back-btn" href="index.html">
                        Voltar
                    </a>
                </div>
                <div class="top-section">
                    <h2>
                    ${tutorial.titulo}
                    </h2>
                    <p>
                    ${tutorial.descricao}
                    </p>
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo1titulo}
                    </h2>
                    <p>
                    ${tutorial.passo1}                
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage1}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo2titulo}
                    </h2>
                    <p>
                    ${tutorial.passo2}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage2}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo3titulo}
                    </h2>
                    <p>
                    ${tutorial.passo3}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage3}">
                </div>
                 <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo4titulo}
                    </h2>
                    <p>
                    ${tutorial.passo4}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage4}">
                </div>`
                } else if (tutorial.passo5) {
                    document.getElementById(numTutorialGerado).innerHTML = `<div class="go-back-container">
                    <span class="material-symbols-outlined arrow">
                        keyboard_arrow_left
                    </span>
                    <a class="go-back-btn" href="index.html">
                        Voltar
                    </a>
                </div>
                <div class="top-section">
                    <h2>
                    ${tutorial.titulo}
                    </h2>
                    <p>
                    ${tutorial.descricao}
                    </p>
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo1titulo}
                    </h2>
                    <p>
                    ${tutorial.passo1}                
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage1}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo2titulo}
                    </h2>
                    <p>
                    ${tutorial.passo2}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage2}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo3titulo}
                    </h2>
                    <p>
                    ${tutorial.passo3}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage3}">
                </div>
                 <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo4titulo}
                    </h2>
                    <p>
                    ${tutorial.passo4}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage4}">
                </div>
                <div class="tutorial-section">
                    <h2>
                        ${tutorial.passo5titulo}
                    </h2>
                    <p>
                    ${tutorial.passo5}
                    </p>
                </div>
                <div class="gif-container">
                    <img src="tutoimages/${tutorial.tutoimage5}">
                </div>`;
                }
                window.scrollTo(0, 0);
            }
    })
}

new Promise((resolve) => {
    loadTutos(() => {
        resolve();
    })
}).then(() => {
    gerarHTMLtutoriais();
})

loadBotoes(() => {
const buttons = document.querySelectorAll('.left-nav-menu-button');
buttons.forEach((button, buttonIndex) => {
    if (buttonIndex == numTutorialGerado) {
        if (button.classList.contains('menu-option-btn')) {
            button.classList.add('menu-active-btn')
        }
        else if (button.classList.contains('dropdown-el-btn')) {
            button.classList.add('dropdown-el-btn-active')
            botoes.forEach((botao, botaoIndex) => {
                if (buttonIndex === botaoIndex) {
                    botoes.forEach((btn, btnInd) => {
                        console.log(btn.dropDownIndex)
                        console.log(botao.dropDownIndex)
                        if (btn.botaoPai && btn.dropDownIndex == botao.dropDownIndex) {
                            buttons.forEach((b, bi) => {
                                if (bi == btnInd) {
                                    b.classList.add('menu-active-btn');
                                }
                            })
                            const arrows = document.querySelectorAll('.arrow');
                            const dropdownsContent = document.querySelectorAll('.dropdown-elements');
                            arrows.forEach((arrow, indexArrow) => {
                                if (indexArrow == botao.dropDownIndex) {
                                    arrow.classList.toggle('arrow-active')
                                }
                            })
                            dropdownsContent.forEach((dropCont, dcIndex) => {
                                if (dcIndex == botao.dropDownIndex) {
                                    dropCont.classList.add('dropdown-elements-active');
                                    dropCont.classList.remove('dropdown-elements');
                                }
                            
                            })
                        }
                    })
                }
            })
        }
    }
})
});

