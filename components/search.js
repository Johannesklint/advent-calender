import styles from "../styles/Home.module.css"

export default function Search({ data, handlePagination, pagination }) {
  if (!data) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles["lds-ripple"]}>
          <div />
          <div />
        </div>
      </div>
    )
  }

  if (data.results.length === 0) {
    return <p className={styles.searchList}>There is no result</p>
  }

  return (
    <ul>
      {data.results.map(({ id, joke }) => (
        <li key={id} className={styles.searchList}>
          {joke}
        </li>
      ))}
      <div className={styles.pagination}>
        {data.previous_page < pagination ? (
          <button
            className={styles.searchList}
            onClick={() => handlePagination("back")}
          >
            Back
          </button>
        ) : (
          <div />
        )}
        {data.next_page > pagination ? (
          <button
            className={styles.searchList}
            onClick={() => handlePagination("next")}
          >
            Next
          </button>
        ) : (
          <div />
        )}
      </div>
    </ul>
  )
}
