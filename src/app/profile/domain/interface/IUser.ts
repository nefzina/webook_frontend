import {Book} from "./Book";
import {Category} from "./Category";

export interface IUser {
  username: string,
  email: string,
  zip_code: number,
  city: string,
  preferences: Category[],
  books: Book[],
}
