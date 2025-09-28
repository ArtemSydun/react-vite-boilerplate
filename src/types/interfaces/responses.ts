export interface ISignInResponse {
  user: IUserResponse;
  accessToken: string;
}

export interface IUserResponse {
  id: string;
  username: string;
  createdAt: string;
}
