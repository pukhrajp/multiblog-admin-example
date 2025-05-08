export interface AuthUser {
  accessToken?: string;
  user?: {
    name: string;
    email: string;
  };
}

export interface AuthUserContext extends AuthUser {
  updateAuthUser?: (user: AuthUser) => void;
}
