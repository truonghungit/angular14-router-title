export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}
