const contentDisplayElementsHTML = `
                <div class="upper">
                 <a class="go-back-tuto" href="index.html">
                                     <span class="material-symbols-outlined arrow">
                        keyboard_arrow_left
                    </span>
                    Voltar
                </a>
                <h2>Todos os conteúdos</h2>
                <a class="add-tuto" href="adicionar-tutorial.html">
                    Adicionar Conteúdo
                    <span class="material-symbols-outlined">
                        add_circle
                        </span>
                </a>
            </div>
            <div class="grid-upper">
                <h2>
                    Tutorial
                </h2>
                <h2>
                    Tipo
                </h2>
            </div>
            <div class="content-grid">
            </div>
`

const container = document.querySelector('.container');

container.innerHTML = contentDisplayElementsHTML;

const contentGrid = document.querySelector('.content-grid');

let contentGridHTML = '';

function gerarHTMLpaginaTutos() {
    botoes.forEach((botao) => {
        contentGridHTML += `
                
        <div class="tuto-content">
            <span class="tuto-title">
                ${botao.nome}
            </span>
            <div class="options">
                <div class="type">
                </div>
                <div class="tuto-edit">
                    <span class="material-symbols-outlined">
                        edit
                        </span>
                </div>
                <div class="tuto-delete">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </div>
            </div>
        </div>
`

contentGrid.innerHTML = contentGridHTML;
})
}

function funcionamentoDeletarTutoriais() {
    const deleteBtns = document.querySelectorAll('.tuto-delete');
    deleteBtns.forEach((deleteBtn, dBtnIndex) => {
        deleteBtn.addEventListener('click', () => {
            // let confirmar gerar html de confirmacao
            botoes.forEach((btn, btnIndex) => {
               if (!btn.botaoPai) {
                if (btnIndex === dBtnIndex) {
                    const btnId = btn.id;
                    fetch(`http://localhost:3512/botoes/${btnId}`,{
                        method: 'DELETE'
                    })
                }
            loadTutos(() => {
                tutoriais.forEach((tuto, tutoIndex) => {
                    if (tutoIndex === dBtnIndex && tutoIndex === btnIndex) { 
                        const tutoId = tuto.id;
                        fetch(`http://localhost:3512/tutoriais/${tutoId}`,{
                            method: 'DELETE'
                        }).then(() => {
                            location.reload();                        })
                    }
                })
            })
               }
               else if (btn.botaoPai) {
                if (btnIndex === dBtnIndex) {
                    botoes.forEach((b, bi) => {
                        if (btn.dropDownIndex === b.dropDownIndex) {
                            const bId = b.id;
                            loadTutos(() => {
                                tutoriais.forEach((t,ti) => {
                                    if (bi === ti) {
                                        const tId = t.id;
                                        fetch(`http://localhost:3512/botoes/${bId}`,{
                                            method: 'DELETE'
                                        }).then(() => {
                                        fetch(`http://localhost:3512/tutoriais/${tId}`,{
                                            method: 'DELETE'
                                        })
                                        })       
                                    }
                                })
                            })
                        }
                    })
                    setTimeout(() => {
                        location.reload()
                    }, 1500)
                }
               }
            })


        })
    })
}

loadBotoes(() => {
    gerarHTMLpaginaTutos();
    funcionamentoDeletarTutoriais();
    setarTipoBotoes();
});




function setarTipoBotoes() {
    const btnsType = document.querySelectorAll('.type');

btnsType.forEach((type, typeIndex) => {
    botoes.forEach((btn, btnIndex) => {
        if (typeIndex === btnIndex) {
            if (btn.botaoFilho) {
                type.innerHTML = `
                <span>
                    Botão Filho
                 </span> 
                `
            }
            else if (btn.botaoPai) {
                type.innerHTML = `
                <span>
                    Botão Pai
                 </span> 
                `
            }
            else {
                type.innerHTML = `
                <span>
                    Botão Normal
                 </span> 
                `
            }
        }
            
    })
})
}



