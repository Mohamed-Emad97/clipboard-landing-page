import {pics} from "../Data";

export default function Companies() {
  return (
    <>
      <section id="company" className="py-5">
        <div className="container">
          <div className="row justify-content-center gap-3">
            {
              pics.map((pic,i) =>
              <>
                <div key={i} className="col-lg-2 col-md-4 col-sm-6 my-3">
                  <div className="img">
                    <img src={pic} alt="" className="w-75" />
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
