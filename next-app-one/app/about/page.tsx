import Link from "next/link"
import styles from "./styles.module.css"
const About = () => {
  return (
    <div className={styles.div}>
      About
      <Link href="/">Home Page</Link>
    </div>
  )
}
export default About
