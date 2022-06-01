function forms () {
        //Forms
        const forms = document.querySelectorAll('form');
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
    
        forms.forEach(item => {
            bindPostData(item);
        });
    
        const postData = async (url, data) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=utf-8' },
                body: data
            });
    
            return await res.json();
        };
    
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                /* срабатывает каждый раз когда мы пытаемся отправить какуюто форму */
                e.preventDefault(); /* отмена стандартного поведения браузера */
    
                let statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `;
                form.append(statusMessage);
    
                /*             const request = new XMLHttpRequest();
                            request.open('POST', 'server.php'); */
    
                /* request.setRequestHeader('Content-type','multipart/form-data'); */
                /*  request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); */
                const formData = new FormData(form);
                /* важный момент в html в теге input тег name всегда
                            должен быть, чтобы все сработало */
    
                
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
          /*       const object = {};
                formData.forEach(function (value, key) {
                    object[key] = value;
                });
     */
                /*             request.send(json); */
    /*             fetch('server.php', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                        },
                        body: JSON.stringify(object)
                    }) */
                    postData('http://localhost:3000/requests',/*  JSON.stringify(object) */json)
    
                    .then(data => {
                        console.log(data);
                        showThanksModal(message.success);
                        statusMessage.remove();
                    }).catch(() => {
                        showThanksModal(message.failure);
                    }).finally(() => {
                        form.reset();
                    });
    
                /*             request.addEventListener('load', () => {
                                if (request.status === 200) {
                                    console.log(request.response);
                                    showThanksModal(message.success);
                                    form.reset();
                                    statusMessage.remove();
                                } else {
                                    showThanksModal(message.failure);
                                }
                            }); */
            });
        }
    
        function showThanksModal(message) {
            const previousModalDialogue = document.querySelector('.modal__dialog');
            previousModalDialogue.classList.add('hide');
            openModal();
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class ="modal__content">
            <div class ="modal__close" data-close>×</div>
            <div class ="modal__title">${message}</div>
            </div>`;
    
            document.querySelector(".modal").append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                previousModalDialogue.classList.add('show');
                previousModalDialogue.classList.add('hide');
                closeModal();
            }, 4000);
        }
    
    /*     fetch("http://localhost:3000/menu").then(data => data.json())
            .then(res => console.log(res));
     */
        /*     fetch(fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify({name: "Alex"}),
                headers: {
                    "Content-type": 'application/json'
                }
            })
                .then(response => response.json())
                .then(json => console.log(json))); */
     
    
}

module.exports = forms;