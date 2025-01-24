type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonVariantType = "outline" | "solid";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  variantType?: ButtonVariantType;
  classes?: string;
  isLoading?: boolean;
}

export default ButtonProps;
