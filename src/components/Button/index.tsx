import { ButtonProps } from "./types"

const Button = ({children, className, testName, ...props}: ButtonProps) => {
    return (
        <button data-test={`${testName}`} className={`button-base ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;