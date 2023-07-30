const modalController = ({ modal, btnOpen, time = 300}) => {
    const buttonElem = document.querySelector(btnOpen);
    const modalElem = document.querySelector(modal);
    console.log(modalElem);
    modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = (event) => {
        const target = event.target;
        const code =  event.code;

        if (target === modalElem || code === 'Escape') {
            modalElem.style.opacity = 0;
        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, time);

        window.removeEventListener('keydown', closeModal);
        }
    };

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    };

    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);

    return { openModal, closeModal };
}

const init = async () => {
    modalController({
        modal: ".modal__order",
        btnOpen: ".header__btn-order",   
    });
}

 init();