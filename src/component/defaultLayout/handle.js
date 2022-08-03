export function handleClickOpenCart(){
    console.log('hi open')
    let idCart = document.getElementById("cart");
      idCart.classList.add('d-block');
      idCart.classList.add('transform');
      idCart.classList.remove('d-none');

  }
export function handleClickCloseCart(){
    console.log('hi close')
    let idCart = document.getElementById("cart");
    idCart.classList.add('d-none');
    idCart.classList.add('d-block');
  }