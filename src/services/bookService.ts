import axios from "axios";
import { IBookDetailsApi, INewBooksApi, ISearchBooksApi } from "../types/index";

class BookService {
 private readonly API_URL = "https://api.itbook.store/1.0/";
 private api = axios.create({
  baseURL: this.API_URL,
 });

 public async getNewBooks(): Promise<INewBooksApi> {
  const { data } = await this.api.get<INewBooksApi>("/new");
  return data;
 }

 public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
  const { data } = await this.api.get<IBookDetailsApi>(`/books/${isbn}`);
  return data;
 }

 public async getBooksBySearch(
  title: string,
  page: string
 ): Promise<ISearchBooksApi> {
  const { data } = await this.api.get<ISearchBooksApi>(
   `/search/${title}/${page}`
  );
  return data;
 }
}
export const bookApi = new BookService();
