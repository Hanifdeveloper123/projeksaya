import { feedback } from "../constants"
import styles from "../style"
import Feedbackcard from './FeedbackCard'

const Testimonials = () =>(
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id="clients">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div className="w-full flex justify-between items-center md:flex md:flex-row flex-col sm:mb-16 m-6 relative z-[1]">
        <h1 className={styles.heading2}>What peopple are <br className="sm:block"/> sayying about us</h1>
        <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}> Everything you need to accept card payments and grow your bussines anywhre on the planet.</p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-content w-full feedback-container relative z-[1]">
          {feedback.map((card) => (
            <Feedbackcard key={card.id} {...card}/>
          ))}
      </div>
      
  </section>
  )

export default Testimonials