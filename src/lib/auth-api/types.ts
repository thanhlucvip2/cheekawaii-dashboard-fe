export type AuthUser = {
  id: string;
  mailaddress: string;
  username: string;
  role: 'ADMIN' | 'USER';
};

export type UserResponse = {
  data: {
    token: string;
  };
};
