const INPUT_INDEX = 0;
let ul = document.getElementById('cat-todo-items');
let inputItem = document.getElementsByTagName('input')[INPUT_INDEX];
let addButton = document.getElementById('add-button');
const MAX_ITEM = 10;
addButton.disabled = true;
inputItem.onkeyup = () => {
    addButton.disabled = !inputItem.value;
}

function checkItem() {
    let checkBox = document.createElement('button');
    let unchecked = document.createElement('i');
    unchecked.className = 'material-icons checkbox';
    unchecked.appendChild(document.createTextNode('check_box_outline_blank'));
    checkBox.appendChild(unchecked);
    return checkBox
}

function deleteButtonCreation() {
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'material-icons del-button';
    deleteIcon.appendChild(document.createTextNode('delete'));
    deleteButton.appendChild(deleteIcon);
    return deleteButton
}

function removeItem(e) {
    let listItem = e.target.parentElement.parentElement;
    listItem.parentElement.removeChild(listItem);
    let notification = document.getElementById('max-item-massage');
    notification.style.visibility = 'hidden';
    inputItem.disabled = false;
}

function newItem() {

    let li = document.createElement('li');
    let checkBox = checkItem();
    let itemBlock = document.createElement('div');
    itemBlock.className = 'item-block';
    let todoItem = document.createElement('span');
    todoItem.appendChild(document.createTextNode(inputItem.value));
    itemBlock.appendChild(todoItem);
    inputItem.value = '';
    inputItem.focus();
    addButton.disabled = true;
    let createdDeleteButton = deleteButtonCreation();

    li.draggable = true;
    li.className = 'listItem';
    createdDeleteButton.addEventListener('click', removeItem);
    li.appendChild(checkBox);
    li.appendChild(itemBlock);
    li.appendChild(createdDeleteButton);
    addDnDHandlers(li);
    ul.appendChild(li);
    if (document.getElementsByTagName('li').length >= MAX_ITEM) {
        let notification = document.getElementById('max-item-massage');
        notification.style.visibility = 'visible';
        inputItem.disabled = true;
        addButton.disabled = true;
    }
}

let chosenItem = null;

function handleDragStart(e) {
    chosenItem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.classList.add('dragElem');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    this.classList.add('over');
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (chosenItem !== this) {
        this.parentNode.removeChild(chosenItem);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropElem = this.previousSibling;
        addDnDHandlers(dropElem);
    }
    this.classList.remove('over');
    return false;
}

function handleDragEnd() {
    this.classList.remove('over');
}

const CHECK_BOX_NUM = 0;
const DELETE_BUTTON_NUM = 2;

function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);
    elem.childNodes[DELETE_BUTTON_NUM].addEventListener('click', removeItem);
    let checkBox = elem.childNodes[CHECK_BOX_NUM];
    checkBox.addEventListener('click', () => {
 checkBox.childNodes[CHECK_BOX_NUM].innerHTML = 'check_box' 
});
}






