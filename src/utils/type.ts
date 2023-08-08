import { ROLES } from "./enums";

export type Roles = keyof typeof ROLES;

export type Sidebar = {
  LABEL: string;
  ICON: string;
  ROUTES: string;
  ROLE: Roles;
  CHILDREN?: Sidebar[];
  IS_SHOW_MENU?: boolean;
};
