import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { useServerData } from "../../utils/useServerData"
import styles from "../../styles/Home.module.css"

export default function Date() {
  const router = useRouter()
  const [showAnswer, setShowAnswer] = useState(false)
  const { data, error } = useServerData(router.query.id)

  if (error) {
    return <div>Something went terribly wrong…</div>
  }

  if (!data) {
    return null
  }
  if (data.tooEarly) {
    return (
      <div className={styles.tooEarly}>
        <h3>
          ah, ah, ah, you are too early, you gotta wait for the date
        </h3>
        <Image src="/giphy.gif" alt="elf" width={200} height={200} />
      </div>
    )
  }

  const { joke, answer } = data
  return (
    <div className={styles.main}>
      <Link href="/">
        <a className={styles.link}>Back</a>
      </Link>
      <h2 className={styles.text}>{joke}</h2>
      <h3 className={styles.h3}>{showAnswer ? answer : null}</h3>
      {answer ? (
        <button
          className={styles.btn}
          onClick={() => {
            setShowAnswer((p) => !p)
          }}
        >
          Tell me!
        </button>
      ) : null}
    </div>
  )
}
