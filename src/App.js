import React from 'react';
import axios from 'axios'
import Card from './components/card';
import Header from './components/Header'
import Drawer from './components/drawer'


function App() {
  let [items, setItems] = React.useState([])
  let [cartItems, setCartItems] = React.useState([])
  let [favorites, setFavorites] = React.useState([])
  const[searchValue, setSearchValue]= React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://64282f1f46fd35eb7c4d5f44.mockapi.io/items').then((res) =>{
      setItems(res.data)
    })
    axios.get('https://64282f1f46fd35eb7c4d5f44.mockapi.io/cart').then((res) =>{
      setCartItems(res.data)
    })
  },[]);

  const onAddToCart = (obj) =>{
    axios.post('https://64282f1f46fd35eb7c4d5f44.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev,obj])
  };
  const onRemoveItem = (id) => {
  axios.delete(`https://64282f1f46fd35eb7c4d5f44.mockapi.io/cart/${id}`)
  setCartItems((prev)=> prev.filter(item => item.id  !== id))
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return ( 
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCart={() => setCartOpened(true)}/>    
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"/>
          <input onChange={onChangeSearchInput} value={searchValue} className="inputSearch" placeholder="Поиск...." />
          </div>
          </div>
      <div className="d-flex flex-wrap">
        {items
        .filter((item) =>item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => (
      <Card 
      key={index}
      title={item.title}
      price={item.price} 
      imageUrl={item.imageUrl}
      onFavorite={() => console.log('Добавлено в закладки!')}
      onPlus={(obj)=>onAddToCart(obj)}
      />
      ))}
    </div>
    </div>
  </div>
 );
}

export default App;
