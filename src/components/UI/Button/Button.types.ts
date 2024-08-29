export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  varian: "sm" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
}
