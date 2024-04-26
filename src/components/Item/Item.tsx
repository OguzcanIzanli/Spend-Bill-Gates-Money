import data from '../../data.json';

const Item = () => {
  return (
    <>
    {data.map((item) => <img key={item.name} src={item.img} alt={item.name} height={100}/>)}
    </>
  )
}

export default Item