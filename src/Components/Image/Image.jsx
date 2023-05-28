import pic from "../../assets/images/image-devices.png";

export default function Image() {
  return (
    <>
      <section id="img" className="py-5">
        <div className="contanier">
          <div className="image text-center">
            <img src={pic} alt="" className="w-75" />
          </div>
        </div>
      </section>
    </>
  )
}
