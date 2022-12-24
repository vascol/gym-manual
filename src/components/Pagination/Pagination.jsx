import React from "react"
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.scss"

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={2}
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
    </>
  )
}

export default Pagination
