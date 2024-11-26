function Pagination({ currentPage, onPageChange, totalEntries, entriesPerPage }: PaginationProps) {

  //Calculate total pages
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  //Calculate the limits of the displayed range
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  //Function manages page change (next & previous)
  const handlePrevious = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

  return (
    <div className="flex justify-between min-w-full p-4">
      <div className="text-gray-600">
        Showing <span className="font-semibold">{startEntry}</span> to{" "}
        <span className="font-semibold">{endEntry}</span> of{" "}
        <span className="font-semibold">{totalEntries}</span> entries
      </div>

      <div className="flex space-x-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="px-2 text-gray-700 font-semibold flex items-center">
          {currentPage}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalEntries: number;
  entriesPerPage: number;
}

export default Pagination;