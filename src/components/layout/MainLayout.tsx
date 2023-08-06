import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
export type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="p-1 sm:ml-64 dark:bg-gray-900">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </div>
  );
};
