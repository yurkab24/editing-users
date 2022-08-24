export interface IUser {
  id: number;
  name: string;
  username: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
  email: string;
  phone: string;
  website: string;
}

export interface IUsersState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}
