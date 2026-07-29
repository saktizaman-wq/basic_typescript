/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

class Book {
  constructor(public isbn: string, 
  public title: string,
  public author: string,
  public totalPages: number,
  public category: string,
  public isAvailable: boolean) {}


    printBook(): void {
      console.log(`Book ISBN: ${this.isbn}`);
      console.log(`Book Title: ${this.title}`);
      console.log(`Book Author: ${this.author}`);
      console.log(`Total Pages: ${this.totalPages}`);
      console.log(`Category: ${this.category}`);
      console.log(`Is Available: ${this.isAvailable}`);
    }
}


const book1 = new Book("978-0-123456-78-9", "TypeScript Programming", "John Doe", 350, "Programming", true);
const book2 = new Book("978-0-987654-32-1", "Web Development Basics", "Jane Smith", 280, "Web Development", false);
const book3 = new Book("978-0-456789-01-2", "Data Structures and Algorithms", "Bob Johnson", 420, "Computer Science", true);

book1.printBook();
book2.printBook();
book3.printBook();