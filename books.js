const form = document.querySelector('form')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const isbnInput = document.querySelector('#isbn')
const deleteBooks = document.querySelector('.newtable')

form.addEventListener('submit', addBook)
deleteBooks.addEventListener('click', deleteBook)

function addBook(e){
    const title = titleInput.value
    const author = authorInput.value
    const mudel = isbnInput.value

// Title

    const td = document.createElement('td')
    td.className = 'table-div'
    const text = document.createTextNode(title)
    td.appendChild(text)

    const link = document.createElement('td')
    link.className = 'secondary-content'
    link.setAttribute('href', '#')
    link.appendChild(document.createTextNode('X'))

// Table and table row

    const tr = document.createElement('tr')
    tr.className = 'table-row'
    tr.appendChild(td)

    const tbl = document.querySelector('.newtable')
    tbl.appendChild(tr)

// Author

    const td2 = document.createElement('td')
    td2.className = 'table-div'
    const text2 = document.createTextNode(author)
    td2.appendChild(text2)
    tr.appendChild(td2)

// ISBN

    const isbn = document.createElement('td')
    isbn.className = 'isbn'
    const text3 = document.createTextNode(mudel)
    isbn.appendChild(text3)
    tr.appendChild(isbn)

    tr.appendChild(link)

    e.preventDefault()

}

function deleteBook(e){
    if(e.target.textContent == 'X'){
        e.target.parentElement.remove();
    }
}