function Drawer({ onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
        <div className="drawer">
        <h2 className="drawerh2 d-flex justify-between mb-30">Корзина <img onClick={onClose} className="imgcartitem cu-p" src="/img/btn-remove.svg" alt="Close"/></h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
              style={{ backgroundImage: `url(${obj.imageUrl})`  }}
              className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}грн.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src='/img/btn-remove.svg' alt='Remove' />
                </div>
          ))}
          <ul className="CartTotalBlock">
            <li className="d-flex align-center mb-20">
              <span>Итого:</span>
              <div className="divBlock"></div>
              <b>7398грн.</b>
            </li>
            <li className="d-flex align-center mb-20">
              <span>Налог 2%:</span>
              <div className="divBlock"></div>
              <b>170 грн</b>
              
            </li>
          </ul>
          <button className="buttonzakaz">Оформить заказ <img className="arrowsvg" src="/img/arrow.svg" alt="arrow" /></button>
        </div>
        </div>
        </div>
    )
}
export default Drawer;