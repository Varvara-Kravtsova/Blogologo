export interface IBook {
 title: string;
 subtitle: string;
 isbn13: string;
 price: string;
 image: string;
 url: string;
}

export interface IUserStore {
 isAuth: boolean;
 email: string | null;
}
