

const mainPageHTML = `<img src="images/main-page-img.png">
            <h1>
                Bem-vindo(a) a central de ajuda do Mee!
            </h1>
            <div class="faq-container">
                <h3>
                    As dúvidas mais frequentes estão abaixo
                </h3>
                <p>
                    Caso não encontre sua dúvida, use o menu lateral para navegar entre as sessões, ou 
                    utilize a barra de pesquisa.
                </p>
                <div class="faq-grid">
                </div>
            <div class="main-page-footer">
                <p>Não encontrou sua dúvida? Entre em contato através do chat.</p>
            </div>`;

const tutorialContainer = document.querySelector('.tutorial-container');



function gerarHTMLfaqs() {
tutorialContainer.innerHTML = mainPageHTML;
const faqGrid = document.querySelector('.faq-grid');
let faqGridHTML = `<div class="faq-box">
                        <span class="faq-box-title">
                            ${faqs[0].categoria}
                        </span>
                        <a class="faq-box-question" href="${faqs[0].index}.html">
                        ${faqs[0].pergunta}
                        </a>
                    </div>
                    <div class="faq-box">
                        <span class="faq-box-title">
                            ${faqs[1].categoria}
                        </span>
                        <a class="faq-box-question" href="${faqs[1].index}.html">
                            ${faqs[1].pergunta}
                        </a>
                    </div>
                    <div class="faq-box">
                        <span class="faq-box-title">
                            ${faqs[2].categoria}
                        </span>
                        <a class="faq-box-question" href="${faqs[2].index}.html">
                            ${faqs[2].pergunta}
                        </a>
                    </div>
                    <div class="faq-box">
                        <span class="faq-box-title">
                            ${faqs[3].categoria}
                        </span>
                        <a class="faq-box-question" href="${faqs[3].index}.html">
                            ${faqs[3].pergunta}
                        </a>
                    </div>
                    <div class="faq-box">
                        <span class="faq-box-title">
                            ${faqs[4].categoria}
                        </span>
                        <a class="faq-box-question" href="${faqs[4].index}.html">
                            ${faqs[4].pergunta}
                        </a>
                    </div>
                    <div class="faq-box">
                        <span class="faq-box-title">
                            ${faqs[5].categoria}
                        </span>
                        <a class="faq-box-question" href="${faqs[5].index}.html">
                            ${faqs[5].pergunta}
                        </a>
                    </div>
                </div>`

                faqGrid.innerHTML = faqGridHTML;
}   



loadFaqs(gerarHTMLfaqs);





let faqBoxes = document.querySelectorAll('.faq-box');
let faqCategories = document.querySelectorAll('.faq-box-title');

