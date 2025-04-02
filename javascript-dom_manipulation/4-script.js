const addItemButton = document.getElementById('add_idem');
const myList = document.querySelector('.my_list');

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');

    newItem.textContent = 'Item';

    myList.appendChild(newItem);
});
