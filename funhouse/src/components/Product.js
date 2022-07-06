export default function Product(props) {
  const { name, img, onProductClick } = props;
  console.log(name);
  return(
    <img src={img} alt={name} height="200px" width="200px" onClick={() => onProductClick({name:name, img:img})}></img>
  )
}
