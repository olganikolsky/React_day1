import './product.css'
export function Product({title, description, price}) {
    return (
        <div className='card'>
        <div className="mango"> 
        <img src='./src/man.png' height="150"></img>
    <h1>Наш продукт: {title}</h1>
    <p>{description}</p>
    <p className='price'>{price}</p>
    </div>
    </div>)
}