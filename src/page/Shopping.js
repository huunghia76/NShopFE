
import Footer from './../component/defaultLayout/Footer';
import Header from './../component/defaultLayout/Header';
import { Link } from 'react-router-dom';
import ListProducts from './../component/User/ListProducts';
function Shopping() {
  return (
    <>
    <Header></Header>
      <div className=" d-flex justify-content-center bg-info ">
        <nav className="navbar navbar-expand-lg navbar-light bg-info ">
          <div className="container-fluid d-flex justify-content-between">
            <Link className="navbar-brand py-0" to="#">
              Categories
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active py-0" aria-current="page" to="#">
                    Women
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-0" to="#">
                    Man
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-0" to="#">
                    Kids
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-0" to="#">
                    Accessories
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Product */}
      <div className='container'>
            <div className='row '>
                <div className='col-12 col-lg-3 '>
                    <div className='row  py-3'>
                        <p>Filter by Price</p>
                        <input type='range'/>
                       <div className='d-flex align-items-center px-0 my-2'>
                        <span className='text-black-50 pe-2'>Price:</span><span><b className='me-3'> $80 — $260</b></span>
                        <button className='btn bg-black text-white ms-5'>Filter</button>
                       </div>
                    </div>
                    <div className='row my-3 border  border-start-0  border-end-0 border-2 py-3'>
                        <b className='  px-0'>Filter by Size</b>
                        <div className='d-flex my-2  px-0'>
                            <b className='btn btn-outline-dark  px-2 py-1 me-3'>S</b>
                            <b className='btn btn-outline-dark  px-2 py-1 me-3'>M</b>
                            <b className='btn btn-outline-dark  px-2 py-1 me-3'>L</b>
                            <b className='btn btn-outline-dark  px-2 py-1 me-3'>XL</b>
                            <b className='btn btn-outline-dark  px-2 py-1 me-3'>XS</b>
                            <b className='btn btn-outline-dark  px-2 py-1 me-3'>XXL</b>
                        </div>
                    </div>
                    <div className='row text-center border border-5 border-warning'>
                        <h3>Autumn Sale</h3>  
                        <h1 className='fw-bold'>15%</h1> 
                        <p className='text-black-50'>Unpacked reserved sir offering bed may and quitting speaking.</p>  
                    </div>
                </div>
                <div className='col-12 col-lg-9'>
                <div className="row mt-2">
                    <div className="col-4 ">
                        <select className="form-select " aria-label="Default select example">
                            <option selected>Default sorting</option>
                            <option >Sort by price:low to hight </option>
                            <option >Sort by price:hight to low </option>
                        </select>
                    </div>
                </div>
                    <ListProducts></ListProducts>
                </div>
            </div>
      </div>
     
      <Footer></Footer>
    </>
  );
}
export default Shopping;
