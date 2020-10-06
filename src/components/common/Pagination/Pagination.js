import React from 'react';
import styles from './Pagination.module.css';

function Pagination({ totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize }) {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    let [portionNumber, setPortionNumber] = React.useState(0);
    const leftPortionLimit = portionNumber * portionSize;
    const rightPortionLimit = (portionNumber + 1) * portionSize - 1;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {leftPortionLimit > 0 && (
                <span
                    onClick={() => setPortionNumber(--portionNumber)}
                    className={styles.prev}></span>
            )}
            {pages
                .filter((_, index) => index >= leftPortionLimit && index <= rightPortionLimit)
                .map((page) => {
                    return (
                        <span
                            key={page}
                            className={`${styles.number} ${
                                page === currentPage && styles.number_active
                            }`}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </span>
                    );
                })}
            {rightPortionLimit <= pagesCount && (
                <span
                    onClick={() => setPortionNumber(++portionNumber)}
                    className={styles.next}></span>
            )}
        </div>
    );
}

export default Pagination;
