export default function Product(props) {
    const { name, img, onBackClick } = props;
    return(
       <img src={img} alt={name} height="200px" width="200px" onClick={() => onBackClick()}></img>
    )
  }
  