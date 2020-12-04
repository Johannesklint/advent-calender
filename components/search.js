import styles from "../styles/Home.module.css"

export default function Search({ data, handlePagination, pagination }) {
  if (!data) {
    return (
      <>
        <div className="tree">
          <svg viewBox="0 0 120 140">
            <polygon
              className="p"
              fill="none"
              stroke-width="1"
              points="60,10 10,110 110,110 "
            />
            <circle
              className="c c1"
              cx="30"
              cy="100"
              r="4"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="c c2"
              cx="65"
              cy="40"
              r="4"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="c c3"
              cx="90"
              cy="90"
              r="4"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="c c4"
              cx="50"
              cy="60"
              r="4"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="c c5"
              cx="69"
              cy="102"
              r="4"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="c c6"
              cx="45"
              cy="80"
              r="4"
              fill="none"
              stroke-width="1"
            />
            <circle
              className="c c7"
              cx="75"
              cy="70"
              r="4"
              fill="none"
              stroke-width="1"
            />
          </svg>
        </div>
        <Styles />
      </>
    )
  }

  if (data.results.length === 0) {
    return <p className={styles.searchList}>There is no result</p>
  }

  return (
    <>
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
    </>
  )
}

function Styles() {
  return (
    <style global jsx>
      {`
        @keyframes svganimation {
          0% {
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .tree {
          width: 150px;
          height: auto;
          margin: 50px auto;
        }

        .tree svg {
          stroke-width: 1px;
          stroke: #d52d36;
          width: 100%;
          height: 100%;
        }

        .tree svg .p {
          stroke-dashoffset: 700;
          stroke-dasharray: 70;
          animation: svganimation 20s linear forwards infinite;
        }

        .tree svg .c {
          stroke-dashoffset: 1000;
          stroke-dasharray: 13;
        }

        .tree svg .c1 {
          animation: svganimation 100s linear forwards infinite;
        }

        .tree svg .c2 {
          animation: svganimation 100s linear forwards infinite;
          animation-delay: 0.05s;
        }

        .tree svg .c3 {
          animation: svganimation 100s linear forwards infinite;
          animation-delay: 0.25s;
        }

        .tree svg .c4 {
          animation: svganimation 100s linear forwards infinite;
          animation-delay: 0.3s;
        }

        .tree svg .c5 {
          animation: svganimation 100s linear forwards infinite;
          animation-delay: 0.2s;
        }

        .tree svg .c6 {
          animation: svganimation 100s linear forwards infinite;
          animation-delay: 0.1s;
        }

        .tree svg .c7 {
          animation: svganimation 100s linear forwards infinite;
          animation-delay: 0.15s;
        }
      `}
    </style>
  )
}
