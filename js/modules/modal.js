function modal() {

    //Modal window
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');




    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
        /* если пользователь откроет модальное окно сам, мы больше не будем ему 
               выводить сообщение */
        /* убрать прокрутку при мобильном окне */
        /*       modal.classList.toggle("show"); второй способ выполнения */
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal); /* используем forEach чтобы вторая кнопка тоже работала */
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = ''; /* вернуть прокрутку */
    }



    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, '50000');

    function showModalByScroll() {
        /* при скролле до конца выводит модалку, */
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;