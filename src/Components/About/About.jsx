import pic from "../../assets/images/image-computer.png";
import {aboutList} from "../Data";
import {Title} from "../index";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <section id={styles['about']} className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-6 ">
              <div className={styles['img']}>
                <img src={pic} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              <div className={styles['content']}>
                  {
                    aboutList.map((item, i) => 
                      <>
                        <div key={i} className={`${styles['txt']}`}>
                          <Title title={item.title} txt={item.desc} align="text-lg-start text-md-start text-sm-center text-center" padding="py-2"/>
                        </div>
                      </>
                    )
                  }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
