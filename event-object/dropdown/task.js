let dropDown = document.querySelector('.dropdown__value');
let dropDownList = document.querySelector('.dropdown__list');
let dropDownItem = document.querySelectorAll('.dropdown__item');
let dropDownLink = document.querySelectorAll('.dropdown__link');

dropDown.addEventListener('click', () => {
    dropDownList.classList.add('dropdown__list_active');
});


for (let i = 0; i < dropDownItem.length; i++) {
    dropDownItem[i].addEventListener('click', function (e) {
        e.preventDefault();
        dropDown.textContent = dropDownItem[i].textContent;
        dropDownList.classList.remove('dropdown__list_active');
    });
    dropDown.addEventListener('click', function () {
        dropDownList.classList.remove('.dropdown__list_active');
    })
}