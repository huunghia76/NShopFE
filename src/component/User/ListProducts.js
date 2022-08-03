
import { Link } from 'react-router-dom';
function ListProducts(){
    return (<>
    <div className="container my-5 products px-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 ">
          <div className="position-relative my-5 px-2">
            <img
              src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black " data-bs-toggle="tooltip" data-bs-placement="left" title="Like!">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                <Link to="/descr_product" className="m-2 text-black" data-bs-toggle="tooltip" data-bs-placement="left" title="Description!">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                <Link to="#" className="m-2 text-black" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to cart!">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
          <div className="position-relative my-5 px-2 ">
            <img
               src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
          <div className="position-relative my-5 px-2 ">
            <img
               src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
          <div className="position-relative my-5 px-2 ">
            <img
               src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
        </div>
      </div>
      <br/>
    <div className="container products px-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 ">
          <div className="position-relative my-5 px-2">
            <img
              src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black " data-bs-toggle="tooltip" data-bs-placement="left" title="Like!">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                <Link to="#" className="m-2 text-black" data-bs-toggle="tooltip" data-bs-placement="left" title="Description!">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                <Link to="#" className="m-2 text-black" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to cart!">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
          <div className="position-relative my-5 px-2 ">
            <img
               src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
          <div className="position-relative my-5 px-2 ">
            <img
               src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
          <div className="position-relative my-5 px-2 ">
            <img
               src={require("../../assets/image/panner1.jpg")}
              alt=""
              className="img-fluid "
            />
            <strong className="position-absolute top-0  end-0 bg-white me-2">
              <p>
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-heart"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                </Link>
              </p>
              <p>
                {" "}
                <Link to="#" className="m-2 text-black">
                  <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                </Link>
              </p>
            </strong>
            <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">
              <div className="choose-cl-1">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-2">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="choose-cl-3">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <p>Product name</p>
              <b>$20.00</b>
            </div>
          </div>
        </div>
      </div>
    </>)
}
export default ListProducts;