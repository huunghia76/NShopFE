import { Link } from "react-router-dom";
import "../../assets/css/style.css"
import "../../assets/css/styleHeader.css"
import {
  handleClickCloseCart,handleClickOpenCart
} from './handle.js';
function Header() {
  return (
    <div className="container-fluid p-0 sticky-top">
      <div className="row mx-0 bg-light ">
        <div className="col col-9 col-sm-10 col-xl-11 p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid pe-0">
              <Link className="navbar-brand fs-2 fw-bold" to="/">
                NShop
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/contact">
                      Contacts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="col col-3 col-sm-2 col-xl-1 pe-0 ps-3 pt-4 ">
          <Link to="#">
            <i className="fa-solid fa-user fs-4  text-black"></i>
          </Link>
          <Link to="#" onClick={handleClickOpenCart}>
            <i className="fa-solid fa-cart-shopping px-3 fs-4 text-black"></i>
            {/* Giỏ hàng */}
          </Link>
          <div >

          </div>
          <div id="cart" className="position-fixed top-0 end-0 ">
                  <div className=" cart-content border border-1 border-dark">
                    <div className="d-flex justify-content-between border border-1 border-secondary border-start-0 border-top-0 border-end-0">
                        <b className="fs-4 ">Cart Shopping</b>
                        <Link to='#'
                         onClick={handleClickCloseCart} className='px-3 py-2 bg-danger text-black'> X </Link>
                    </div>
                    <div className="row my-4">
                      <div className="col-3">
                          <img src={require('../../assets/image/about/avt.jpg')} className="img-fluid p-0" alt=""/> 
                      </div>
                      <div className="col-8">
                         <p className="p-0">Casual red shirt - Green, M</p>
                         <span className="border border-2 border-dark w-50 text-center" ><span className="px-3 fs-3 ">-</span>1<span className="px-3 fs-3">+</span></span>
                      </div>
                      <div className="col-1 px-0">
                         <button >X</button>
                      </div>
                       
                    </div>
                    <div className="position-absolute bottom-0 w-100 mb-5">
                      <div className="row d-flex justify-content-center mb-4">
                          <Link to='/cart' className="btn btn-outline-info text-black px-0 w-50">View Cart</Link>
                      </div>
                      <div className="row d-flex justify-content-center">
                          <Link to='#' className="btn btn-outline-dark btn-warning px-0 w-50">Check out</Link>
                      </div>
                    </div>
                   </div>
                  
          </div>
        </div>
      </div>
    </div>
  );

}
export default Header;
