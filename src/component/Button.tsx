
function Button({ type, children} : ButtonProps) {
    return(
        <button type={type} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
            {children}
        </button>
    )
}

interface ButtonProps {
    type: "submit";
    children: React.ReactNode;
}

export default Button;