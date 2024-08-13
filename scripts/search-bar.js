const searchItemsContainer = document.querySelector('.search-items-display');

const tutorialContainer2 = document.querySelector('.tutorial-container');

let itemsHTML = '';

function renderizarSugestoesPesquisa () {
    
    tutoriais.forEach((tutorial, tutoIndex) => {
        if (tutorial.descricao) {
            itemsHTML += `<a class="search-item js-search-item" href="${tutoIndex}.html">
            <h2 class="search-item-title" href="">
                ${tutorial.titulo}
            </h2>
            <p>
                ${tutorial.descricao}
            </p>
            </a>`
        }
    })
    searchItemsContainer.innerHTML = itemsHTML;
}

loadTutos(() => {
    renderizarSugestoesPesquisa();
});

const searchContainsCont = document.querySelector('.search-contains-container');
let spanContent;

function atualizarContem(input) {
    spanContent = `<span><strong>Com base na sua pesquisa:</strong> ${input}</span>`;
    searchContainsCont.innerHTML = spanContent;
}

const searchItems = document.querySelectorAll('.js-search-item');
const searchItemTitle = document.querySelectorAll('.search-item-title');

searchItems.forEach((searchItem, siIndex) => {
    searchItem.addEventListener('click', () => {
        searchItemTitle.forEach((itemTitle, itIndex) => {
            if (siIndex === itIndex) {
                gerarHTMLtutorialSearchItem(itemTitle);
            }
            
        })
    })
})
const searchInput = document.querySelector('.js-search-input');

searchItems.forEach((searchItem) => {
    searchItem.addEventListener('click', () => {
        searchItem.classList.add('hide');
        searchItemsContainer.classList.add('hide-default');
        searchContainsCont.classList.add('hide-default');
    })
})



searchInput.addEventListener('click', () => {
    searchItems.forEach((searchItem) => {
        searchItem.classList.toggle('hide-default');
    })
})

tutorialContainer2.addEventListener('click', () => {
    searchItemsContainer.classList.add('hide-default');
    searchItems.forEach((searchItem) => {
        searchItem.classList.add('hide-default');
        searchContainsCont.classList.add('hide-default');
    })
})

leftNavMenu.addEventListener('click', () => {
    searchItemsContainer.classList.add('hide-default');
    searchItems.forEach((searchItem) => {
        searchItem.classList.add('hide-default');
        searchContainsCont.classList.add('hide-default');
    })
})

    let timeout = null;
    searchInput.addEventListener('keyup', e => {
            searchItems.forEach((searchItem) => {
                searchItem.classList.remove('hide-default');
            })
            searchItems.forEach((searchItem) => {
                searchItem.classList.remove('hide');
            })
            searchItemsContainer.classList.remove('hide-default');
            const pesquisa = e.target.value.toLowerCase();
            clearTimeout(timeout);
            if (!pesquisa) {
                searchItemsContainer.classList.add('hide-default');
                searchContainsCont.classList.add('hide-default');
            }
            if(pesquisa) {
                searchContainsCont.classList.remove('hide-default');
            }
            atualizarContem(pesquisa);
            timeout = setTimeout(function () {
                loadTutos(() => {
                    const searchItems = document.querySelectorAll('.js-search-item');
                    const searchItemTitle = document.querySelectorAll('.search-item-title');
                    tutoriais.forEach((tutorial) => {
                        if (tutorial.descricao) {
                            searchItems.forEach((searchItem, siIndex) => {     
                                searchItemTitle.forEach((searchItitle, stIndex) => {
                                    const eVisivel =
                                    tutorial.titulo.toLowerCase().includes(pesquisa) || 
                                    tutorial.descricao.toLowerCase().includes(pesquisa) ||
                                    tutorial.palavraschave.toLowerCase().includes(pesquisa); 
                                    if (eVisivel && tutorial.titulo == searchItitle.innerText.trim() && siIndex === stIndex) {
                                        searchItem.classList.remove('hide');
                                    }
                                    else if (!eVisivel && tutorial.titulo == searchItitle.innerText.trim() && siIndex === stIndex) {
                                        searchItem.classList.add('hide');
                                    }
                                })
                        })
                        }    
                    })
                })    
            }, 250);

    })








