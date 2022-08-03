import Footer from "../component/defaultLayout/Footer";
import Header from "../component/defaultLayout/Header";
import ListProducts from './../component/User/ListProducts';

function Cart() {
  return (
    <>
      <Header />
      <h1 className="text-center">Cart SHopping</h1>
      <div className="container my-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style={{width:'30px'}}>#</th>
              <th scope="col" style={{width:'80px'}}>Image</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><img src={require('../assets/image/about/avt.jpg')} className="img-fluid p-0" alt=""/> </td>
              <td>Casual red shirt - Green, M</td>
              <td><span className="border border-2 border-dark w-50 text-center" ><span className="px-3 fs-3 ">-</span>1<span className="px-3 fs-3">+</span></span></td>
              <td>$30.10</td>
              <td>$30.10</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td><img src={require('../assets/image/about/avt.jpg')} className="img-fluid p-0" alt=""/> </td>
              <td>Casual red shirt - Green, M</td>
              <td><span className="border border-2 border-dark w-50 text-center" ><span className="px-3 fs-3 ">-</span>1<span className="px-3 fs-3">+</span></span></td>
              <td>$30.10</td>
              <td>$30.10</td>
            </tr>
            <tr>
                <th colspan="5">Total</th>
                <th >$60.20</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container p-0"><h2> Related Products</h2></div>
      <ListProducts/>
      <Footer />
    </>
  );
}
export default Cart;
