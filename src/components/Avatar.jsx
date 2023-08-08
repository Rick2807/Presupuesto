import IMG from "../img/IMG_0330.jpeg"



const Avatar = ({validBudget}) => {

// const [image, setImage] = useState({})
// 

// useEffect(()=> {
//     const apiRequest = async() => { 
//         const response = await fetch(API); 
//         const data = response
//         console.log(data)
//     }

//     apiRequest()
// },[validBudget])

  return (
    <figure className='avatar'>
        <img className="avatar__img" src={IMG } alt="" />
        <figcaption className="avatar__caption">
            RICARDO FELIX
        </figcaption>
    </figure>
  )
}

export default Avatar