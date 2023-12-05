import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  primary: boolean;
  testId: string;
}
export const Button = ({ children, primary, testId }: IButtonProps) => {
  return (
    <button
      style={{
        color: primary ? "blue" : "black",
        backgroundColor: primary ? "black" : "white",
      }}
      data-testid={testId}
    >
      {children}{" "}
    </button>
  );
};
