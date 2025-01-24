import classNames from "classnames";
import ButtonProps from "./type";


const getButtonClasses = ({variant, variantType, classes, isLoading,}: ButtonProps) =>{


    const btnClasses = classNames(
      "py-2 px-4 cursor-pointer rounded text-white font-bold",
      {
        "bg-primary  ": variant === "primary" && variantType === "solid",
        "bg-secondary ": variant === "secondary" && variantType === "solid",
        "bg-tertiary ": variant === "tertiary" && variantType === "solid",
        "border-2 border-primary ":
          variant === "primary" && variantType === "outline",
        "border-2 border-secondary ":
          variant === "secondary" && variantType === "outline",
        "border-2 border-tertiary ":
          variant === "tertiary" && variantType === "outline",
        "cursor-not-allowed opacity-50": isLoading,
      },
      classes
    );

    return btnClasses;

}

export default getButtonClasses;

