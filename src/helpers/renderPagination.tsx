import { NavLink } from 'react-router-dom';

export function renderPagination(pageNumber: string, pages: number) {
  function buildPaginationScheme() {
    const prevPageNumber = +pageNumber - 1;
    const nextPageNumber = +pageNumber + 1;
    const scheme = [1, prevPageNumber, +pageNumber, nextPageNumber, pages];
    const filteredScheme = scheme.filter((item) => item > 0 && item <= pages);
    const set = new Set(filteredScheme);
    const result = Array.from(set);

    if (result[0] + 1 !== result[1]) {
      result.splice(1, 0, NaN);
    }

    if (result[result.length - 2] + 1 !== result[result.length - 1]) {
      result.splice(result.length - 1, 0, NaN);
    }

    return result;
  }
  const paginationScheme = buildPaginationScheme();
  return paginationScheme.map((numberPage, index) => {
    if (Number.isNaN(numberPage)) {
      return (
        <li className="page-item" key={index}>
          <span className="page-link pe-none">...</span>
        </li>
      );
    }

    return (
      <li className="page-item" key={index}>
        <NavLink
          to={`/search-page/${numberPage}`}
          className={({ isActive }) =>
            isActive ? 'page-link active' : 'page-link'
          }
        >
          {numberPage}
        </NavLink>
      </li>
    );
  });
}
