export interface IBook {
 image: string;
 isbn13: string;
 price: string;
 subtitle: string;
 title: string;
 url: string;
}

export interface INewBooks {
 books: IBook[];
 error: any;
 total: string;
 status: RequestStatusType;
}

export interface INewBooksApi {
 books: IBook[];
 error: string;
 total: string;
 page: string;
}

export interface IBookDetailsApi {
 authors: string;
 desc: string;
 error: string;
 image: string;
 isbn10: string;
 isbn13: string;
 language: string;
 pages: string;
 pdf: { [key: string]: string };
 price: string;
 publisher: string;
 rating: string;
 subtitle: string;
 title: string;
 url: string;
 year: string;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";

export interface IBookApi {
 books: IBook[];
 error: any;
 status: RequestStatusType;
 total: string;
 result: IBookDetailsApi;
}

export interface IBooks {
 response: boolean | null;
 results: IBook[];
 totalResults: number;
 currentPage?: number;
 totalPages: number;
}

export interface ISearchBooksApi extends INewBooksApi {
 page: string;
}

export interface IUser {
 sortMode: "asc" | "desc";
 favorites: IBook[];
 isAuth: boolean;
 email: string | undefined;
 name: string | undefined;
 password: string | undefined;
}

export interface IFavorites {
 favorites: IBook[];
}

export interface ICartInfo {
 image: string;
 isbn13: string;
 price: string;
 subtitle: string;
 title: string;
 url: string;
 year: string;
 publisher: string;
 rating: string;
 authors: string;
}

export interface IBookCartApi extends ICartInfo {
 amount: number;
}

export interface ICarts {
 cart: IBookCartApi[];
 total: number;
 isLoading: boolean;
}

// export interface ICart {
//  cart: IBookCartApi[];
//  total: number;
// }

export interface ICartPage {
 results: ICarts[];
 vat: number;
 sumTotal: number;
 total: number;
}

export interface IArguments {
 title: string;
 page: string;
}
