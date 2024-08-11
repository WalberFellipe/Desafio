export type UserModel = {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};

export type SignInDTO = {
  email: string;
  password: string;
};