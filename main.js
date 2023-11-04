(() => {
    const selectMain = document.querySelector('.select')
    const selectHeader = document.querySelector('.select__header')
    const selectItem = document.querySelectorAll('.select__item')
    const inputName = document.querySelector('.select__name')
    const buttonCross = document.querySelector('.button__cross')
    const currentText = document.querySelector('.select__current')
    const selectMark = document.querySelectorAll('.select__mark')
    const lessonsButton = document.querySelectorAll('.lessons__button')
    const lesson = document.getElementById('lesson')
    const textarea = document.querySelector('.input__message')
    const count = document.querySelector('.counter')

    function countLetters() {
        const textlength = textarea.value.length;
        count.innerText = `${textlength}`;
    }

    function headerToggle() {
        if (selectMain.classList.contains('is_active')) {
            selectHeader.classList.add('is_active');
            inputName.classList.add('is_active');
        }
        if (!selectMain.classList.contains('is_active')) {
            selectHeader.classList.remove('is_active');
            inputName.classList.remove('is_active');
        }
    }

    function selectToggle() {
        this.parentElement.classList.toggle('is_active');
        headerToggle();
    }

    function selectChoose() {
        let text = this.innerText;

        currentText.innerText = text;

        selectMain.classList.remove('is_active');
        headerToggle();
    }

    function clearInput(e) {
        e.preventDefault();
        const input = document.querySelector('input');
        input.value = '';
    }

    function selectLesson(e) {
        e.preventDefault();
        lesson.value = this.innerText;
    }

    function selectedClass() {
        for (let i = 1; i <= selectItem.length; i++) {
            let text = document.getElementById(`option__${i}`)

            selectMark[i - 1].classList.remove('is_active');
            selectItem[i - 1].classList.remove('is_active');

            if (currentText.innerText == text.innerText) {
                selectMark[i - 1].classList.add('is_active');
                selectItem[i - 1].classList.add('is_active');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        selectHeader.addEventListener('click', selectToggle);
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
            item.addEventListener('click', selectedClass);
        });
        buttonCross.addEventListener('click', clearInput);

        lessonsButton.forEach(item => {
            item.addEventListener('click', selectLesson)
        })

        textarea.addEventListener('input', countLetters)

        selectedClass();
    });

})();