export default function Product(props) {
  const { product, onProductClick } = props;
  return(
    <img src={product.img} alt={product.name} height="200px" width="200px" onClick={() => onProductClick(product)}></img>
  )
}
