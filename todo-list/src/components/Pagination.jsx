const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="d-flex align-items-center">
        <label className="me-2">Rows per page:</label>
        <select className="form-select form-select-sm" style={{ width: "60px" }}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>
      <div>
        <button
          className="btn btn-sm btn-light me-2"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt; Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-sm btn-light ms-2"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
  
  export default Pagination;
  