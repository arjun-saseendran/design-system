
type ButtonType = 'submit' | 'reset' | 'button'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    
    type?: ButtonType;
    classes?: string;


}

export default ButtonProps