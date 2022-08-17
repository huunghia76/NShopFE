import { useEffect } from "react";
import "../../assets/css/styleFooter.css";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
setInterval(function () {//lặp lại
    // 500 là tọa độ tính từ nút khi lăng xuống
    if (window.pageYOffset < 500) {
        document.getElementById('content').style.display = "none";
    }
    else {
      document.getElementById('content').style.display = "block";
    }
}, 200)
useEffect(()=>{
  
})
  return (
    <>
      <div className="container-fluid border border-end-0 border-start-0 pt-5 bg-light">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 px-5 ">
          <div className="">
            <h1 className="fw-bold">NSHOP</h1>
            <p>
              Signup to be the first to hear about exclusive deals, special
              offers and upcoming collections.
            </p>
            <p>111 Wall Stree, USA, New York</p>
            <p>(+84) 0123456789</p>
          </div>
          <div>
            <b>Information</b>
            <ul>
              <li>
                <a to="#">Home</a>
              </li>
              <li>
                <a to="#">Blog</a>
              </li>
              <li>
                <a to="">Shop</a>
              </li>
              <li>
                <a to="">About</a>
              </li>
            </ul>
          </div>
          <div>
            <b>Categories</b>
            <ul>
              <li>
                <a to="">Accessories</a>
              </li>
              <li>
                <a to="">Man</a>
              </li>
              <li>
                <a to="">Women</a>
              </li>
              <li>
                <a to="">Kids</a>
              </li>
            </ul>
          </div>
          <div className="px-0">
            <b>Newsletter</b>
            <p>
              Get Tethys. and discover streamlined website construction today!
            </p>
            <div className="d-flex">
              <input
                type="email"
                placeholder="Your email address"
                className="input-ft  w-75"
              />
              <button className="input-ft w-25">Sign up</button>
            </div>
            <div>
              <span>
                <i className="fa-brands fs-3 pe-3 mt-3 fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fs-3 pe-3 mt-3 fa-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fs-3 pe-3 mt-3 fa-youtube"></i>
              </span>
              <span>
                <i className="fa-brands fs-3 pe-3 mt-3 fa-tiktok"></i>
              </span>
              
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-2"><p className="text-black-50">NSHOP<b>©</b>2022 Create by Hoang Huu Nghia</p></div>
      {/* <div className=" bottom-0 top-0 end-0"> */}
            <button onClick={scrollToTop} id="content" className="border border-0 text-success bg-light bg-opacity-10 position-fixed bottom-0 end-0  "><i
                    className="fa-solid fa-circle-up fs-1 p-2 bg-opacity-10 "></i></button>
        {/* </div> */}
    </>
  );
}
export default Footer;