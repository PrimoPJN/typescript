import { Category } from './enums'
import { type Book } from './interfaces'

function GetAllBooks (): Book[] {
  const books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ]

  return books
}

console.log(GetAllBooks())
