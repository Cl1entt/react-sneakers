import React from 'react'
function Card({title, imageUrl, price, onFavorite, onPlus}){
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false)

  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded);
  }
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  };
    return(
        <div className="card">
        <div className="favorite" onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/liked.svg'  : '/img/unliked.svg'} alt="Unliked" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
        <h5 className="h5Card">{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span className="spanCard">Цена:</span>
            <b className="bCard">{price} грн.</b>
          </div>
            <img
            className='btnplus'
            onClick={onClickPlus}
            src={isAdded ? '/img/btn-checked.svg'  : '/img/btn-plus.svg'}
            alt='Plus'
           />
        </div>
      </div>
    )
}
export default Card