import { Button } from "../ui/button";

type TPaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pagesToShow?: number;
};

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  pagesToShow = 3,
}: TPaginationProps) {
  /* -------------------------------------------------------------------------- */
  /*                                  Constants                                 */
  /* -------------------------------------------------------------------------- */

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const pageNumbers = [];

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Button
          variant="secondary"
          onClick={() => onPageChange(currentPage - 1)}
          className="w-15"
          disabled={currentPage === 1}
        >
          قبلی
        </Button>
      )}

      {/* Page Buttons */}
      {pageNumbers.map((page, index) => (
        <Button
          key={index}
          onClick={() => page !== "..." && onPageChange(Number(page))}
          variant={page === currentPage ? "default" : "secondary"}
          disabled={page === "..."}
        >
          {page.toLocaleString("fa")}
        </Button>
      ))}

      {/* Next Button */}
      {currentPage !== totalPages && (
        <Button
          variant="secondary"
          onClick={() => onPageChange(currentPage + 1)}
          className="w-15"
          disabled={currentPage === totalPages}
        >
          بعدی
        </Button>
      )}
    </div>
  );
}

export default Pagination;
