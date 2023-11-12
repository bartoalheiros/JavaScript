class Book {
    constructor(id, title, description, author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    
    constructor(books) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
        return book;
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        const book = this.getBookById(id);
        this.books.splice(book, 1);
    }

    getBookById(id) {
        return this.books.findIndex((obj) => obj.id === id);
    }

}

books = [
            {
                id: '1',
                title: 'O senhor dos anéis - a sociedade do anel',
                description: 'O "Um Anel" é o elemento central da saga. No anel, em inscrições no alfabeto Tengwar com versos na língua proibida de Mordor, pode-se ler: "Um Anel que a todos rege, Um Anel para achá-los, Um Anel que a todos traz, para na escuridão atá-los". Palavras em contínuo tanto na parte de dentro do anel, como na parte externa do anel. Isso se apresenta no início do livro, na apresentação da trilogia, no original em primeira edição em Inglês. Na saga, os vilões se autodestroem pelo próprio porte do anel.',
                author: 'R.R.Tolkien'
            },
        ];

const library = new Library(books);
//listar
console.log(library.getBooks());

//criar novo livro
const capitaes_de_ar = new Book('2','Capitães de Areia','Capitães da Areia é um romance de autoria do escritor brasileiro Jorge Amado, escrito em 1937. A obra retrata a vida de um grupo de menores abandonados, que crescem nas ruas da cidade de Salvador, Bahia, vivendo em um trapiche, roubando para sobreviver, chamados de "Capitães da Areia."','Jorge Amado');
// capitaes_de_ar = {
//             id: '2',
//             title: 'Capitães de Areia',
//             description: 'Capitães da Areia é um romance de autoria do escritor brasileiro Jorge Amado, escrito em 1937. A obra retrata a vida de um grupo de menores abandonados, que crescem nas ruas da cidade de Salvador, Bahia, vivendo em um trapiche, roubando para sobreviver, chamados de "Capitães da Areia."',
//             author: 'Jorge Amado'
//         };

//adicionar novo livro
library.addBook(capitaes_de_ar);

console.log(library.getBooks());

//remover livro
library.removeBookById('1');
console.log(library.getBooks());

//localizar livro pelo 'id'
console.log(library.getBookById('1'));