
function Button({ type, children} : ButtonProps) {
    return(
        <button type={type}>
            {children}
        </button>
    )
}

interface ButtonProps {
    type: "submit";
    children: React.ReactNode;
}

export default Button;