import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = (): React.ReactElement => {
  return (
    <div className="flex min-h-screen flex-col relative">
      Header

      <main className="flex-1 w-full">
        <div className="flex flex-col flex-1 w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
