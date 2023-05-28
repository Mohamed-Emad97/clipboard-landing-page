import Logo from "../../assets/images/logo.svg";
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <>
      <footer className="py-5 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className={`${styles['img']}`}>
                <img src={Logo} alt="" className="w-50" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <ul className="list-unstyled">
                <li><a href="">FAQs</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <ul className="list-unstyled">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Press Kit</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <ul className="list-unstyled">
                <li><a href="">Install Guide</a></li>
                <li><a href="">{`    `}</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <ul className={`${styles['social']} list-unstyled d-flex align-items-center gap-3`}>
                <li><a href="" className="facebook fs-3"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="" className="twitter fs-3"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="" className="instagram fs-3"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
