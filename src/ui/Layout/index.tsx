import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
