import getButtonClasses from "./utility";
import ButtonProps from "./type";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  variantType = "solid",
  children,
  type,
  classes,
  onClick,
  isLoading,
  ...restProps
}) => {
  // Classes
  const btnClasses = getButtonClasses({
    variant,
    variantType,
    classes,
    isLoading,
  });
  return (
    <>
      <button
        type={type}
        className={btnClasses}
        onClick={onClick}
        {...restProps}
      >
        <span className="flex justify-center items-center gap-3">
          {children}
          {isLoading && (
            <span className="border-gray-300 h-3 w-3 rounded-full animate-spin border-8 border-t-blue-600"></span>
          )}
        </span>
      </button>
    </>
  );
};
