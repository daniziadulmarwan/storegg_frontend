export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface SignInTypes {
  email: string;
  password: string;
}
