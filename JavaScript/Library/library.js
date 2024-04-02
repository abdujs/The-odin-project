// Define the Book class
class Book {
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    // Method to toggle the read status of a book
    toggleReadStatus(){
        this.isRead = !this.isRead;
    }
}

//Define the Library class  
class Library {
    constructor() {
        this.books = [];
    }

// Method to add a new book to the library
addBook(title, author, pages, isRead){
    const newBook = new Book(title, author, pages, isRead);
    this.books.push(newBook);
    console.log('Book added to the library successfully!');
    this.displayBooks();
}

  // Method to remove a book from the library
removeBook(index){
    this.books.splice(index, 1);
    console.log('Book removed from the library successfully!');
    this.displayBooks();
}

  // Method to toggle the read status of a book
  toggleReadStatus(index){
    this.books[index].toggleReadStatus();
    console.log('Read status of the book toggled successfully!');
    this.displayBooks();
}

  // Method to display all books on the page
displayBooks(){
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ''; //Clear the previous content

    this.books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `By ${book.author}`;

        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${book.pages}`;

        const readElement = document.createElement('p');
        readElement.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Read Status';
        toggleButton.classList.add('toggle-button');
        toggleButton.setAttribute('data-index');

        toggleButton.addEventListener('click', (event) => {
            const indexToToggle = event.target.getAttribute('data-index');
            this.toggleReadStatus(indexToToggle);
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.setAttribute('data-index', index);

        removeButton.addEventListener('click', (event) => {
            const indexToRemove = event.target.getAttribute('data-index');
            this.removeBook(indexToRemove);
        });

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readElement);
        bookCard.appendChild(toggleButton);
        bookCard.appendChild(removeButton);

        bookContainer.appendChild(bookCard);
        
    });
  }
}

// Create an instance of the Library class
library.displayBooks();

// Function to handle the form submission
function handleFormSubmit(event){
    event.preventDefault();
    
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const isRead = readInput.checked;
    
    library.addBook(title, author, pages, isRead);

      // Reset the form
titleInput.value = '';
authorInput.value = '';
pagesInput.value = '';
readInput.checked = false; 

}

// Add event listener to the form
const form = document.getElementById('new-book-form');
form.addEventListener('submit', handleFormSubmit);


