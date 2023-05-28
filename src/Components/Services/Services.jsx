import { servicesData } from "../Data";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <>
    <section id={styles['services']} className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {
            servicesData.map((item, index) => 
              <>
                <div key={index} className="col-lg-4 col-md-6 my-2">
                  <div className={`${styles['srvCard']} text-center`}>
                    <div className={styles['icon']}>
                      <img src={item.icon} alt="" className="w-100" />
                    </div>
                    <div className={`${styles['desc']}`}>
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </section>
    </>
  )
}
