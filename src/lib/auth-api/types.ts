export type AuthUser = {
  id: string;
  email: string;
  roleUser: "ADMIN" | "USER";
};

export type UserResponse = {
  data: {
    token: string;
  };
};
