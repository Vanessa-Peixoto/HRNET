
function Button({ type, children, onClick} : ButtonProps) {
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}

interface ButtonProps {
    type: "submit";
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Button;