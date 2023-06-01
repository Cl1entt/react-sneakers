function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className="LogoPng" width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="headerh3 text-uppercase">Sneakers Shop</h3>
          <p className="headerp opacity-5">Магазин кроссовок</p>
      </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
        <img className="CartSvg" width={18} height={18} src="/img/cart.svg"/>
          <span>   1725грн.</span>
        </li>
        <li>
         <img className="UserSvg" width={20} height={20} src="/img/user.svg"/>
        </li>
      </ul>
    </header>
    )
}
export default Header;