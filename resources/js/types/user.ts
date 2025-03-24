export type UserRegister = {
  name: string;
  lName?: string;
  email: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
};
