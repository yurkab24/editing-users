import { IUser } from '../store/reducers/types';

export const sortCity = (a: IUser, b: IUser) => {
  if (a.address.city < b.address.city) {
    return -1;
  }
  if (a.address.city > b.address.city) {
    return 1;
  }
  return 0;
};

export const sortCompany = (a: IUser, b: IUser) => {
  if (a.company.name < b.company.name) {
    return -1;
  }
  if (a.company.name > b.company.name) {
    return 1;
  }
  return 0;
};
