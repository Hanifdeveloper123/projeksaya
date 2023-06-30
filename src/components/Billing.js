import { apple, bill, google } from "../assets"
import styles,{layout} from "../style"

const Billing = () => (
 <section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

      <div className="absolute z-[3px] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient">
      <div className="absolute z-[0px] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient">
      </div>
      </div>
  </div>
  <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your<br className="sm:block hidden"/> Billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          saya hanif saya seorang web developer di perusahaan ternama di indonesia
          pekerjaan saya sehari hari adalah membuat web. saya bekerja di divisi front end developer
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="gogle_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        </div>
      </div>

 </section>
  )


export default Billing