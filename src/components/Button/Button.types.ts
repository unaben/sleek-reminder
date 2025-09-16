import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "danger" | "success" | "secondary";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
