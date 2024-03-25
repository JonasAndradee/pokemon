import { Header } from "@organisms/Header";
import { PropsWithChildren } from "react";

export const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
