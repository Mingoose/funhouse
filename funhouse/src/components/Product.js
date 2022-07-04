export default function Product(props) {
  const { name, img } = props;
  const click = () => {
    console.log("clicked");
  }
  return(
    <img src={img} alt={name} height="200px" width="200px" onClick={click}></img>
  )
}
