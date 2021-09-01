import { IName } from './name.interface';
import { ILogin } from './login.interface';

export interface IDob {
  date: Date;
  age: number;
}

export interface IRegistered {
  date: Date;
  age: number;
}

export interface IId {
  name: string;
  value: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  gender: string;
  name: IName;
  location: Location;
  email: string;
  login: ILogin;
  dob: IDob;
  registered: IRegistered;
  phone: string;
  cell: string;
  id: IId;
  picture: IPicture;
  nat: string;
}
