
function Pagination( {currentPage, onPageChange} : PaginationProps) {

    const handlePrevious = () => onPageChange(currentPage - 1);
    const handleNext = () => onPageChange(currentPage + 1)

    return(
        <div>
            <button onClick={handlePrevious}>
                Previous
            </button>
            <span>{currentPage}</span>
            <button onClick={handleNext}>
                Next
            </button>
        </div>
    )
}

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default Pagination;