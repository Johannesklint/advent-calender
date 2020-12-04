import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useSearch } from "../utils/useServerData"
import Search from "../components/search"

export default function Home() {
  const {
    data,
    searchTerm,
    handleChange,
    pagination,
    handlePagination,
  } = useSearch()

  return (
    <div className={styles.container}>
      <Head>
        <title>Advent Joke Calender</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.searchWrapper}>
        <input
          value={searchTerm}
          type="text"
          onChange={handleChange}
          placeholder="Search for a joke"
        />
        <button
          className={styles.reset}
          onClick={() => {
            handleChange("reset")
          }}
        >
          <span>&times;</span>
        </button>
      </div>
      {searchTerm ? (
        <Search
          data={data}
          handlePagination={handlePagination}
          pagination={pagination}
        />
      ) : (
        <ul className={styles.grid}>
          {Array.from({ length: 24 })
            .map((v, i) => i + 1)
            .map((id) => (
              <Link key={id} href="/date/[id]" as={`/date/${id}`}>
                <a>
                  <li className={styles.list}>
                    <Image
                      src="/tree.jpg"
                      alt="christmas tree"
                      width={2000}
                      height={1000}
                    />
                    {id}
                  </li>
                </a>
              </Link>
            ))}
        </ul>
      )}
    </div>
  )
}
