
import ButtonProps from "./type"

export const Button: React.FC<ButtonProps> = ({children,  type, classes, onClick, ...restProps}) => {
  return (
    <>
    
      <button type={type} className={classes} onClick={onClick} {...restProps}>
        <span className="flex justify-center items-center gap-3">
          {children}
        </span>
      </button>
    </>
  );
}
