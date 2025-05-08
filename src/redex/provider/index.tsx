import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

interface Props {
  children: ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
