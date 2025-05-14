export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthUserContext {
  authUser: AuthUser | null;
  authLogin: (accessToken: string, user: AuthUser) => void;
  authLogout: () => void;
}
