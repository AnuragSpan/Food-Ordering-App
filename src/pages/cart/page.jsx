import { useSelector } from 'react-redux'

const Cart = () => {
    const cartData = useSelector((store)=>store?.cart?.addCart)
    console.log("cartData",cartData)
  return (
    <div>
      {cartData?.map((item)=>{
      return  <>
        <p>{item.name}||{item?.brand}</p>
        <p>{}</p>
        </>
      })}
    </div>
  )
}

export default Cart