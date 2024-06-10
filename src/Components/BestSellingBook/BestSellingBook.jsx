//import BestSellingBook css..................
import './BestSellingBook.css'

//import Title props..............
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'


//import Tree Shape...........
import TreeShape from '../../assets/treeShape.png'

//import selling books Data..................
import { sellingBooksData } from '../../Data/Data'

//import Link from React-router-dom.....................
import{Link} from 'react-router-dom'


//import REact icon
import { BsArrowRight } from "react-icons/bs";


export default function BestSellingBook() {
  return (
    <section className='BestSellingBook'>
        {/*.....................Selling Book Tree Shape..................*/}
        <div className='treeShape'>
            <img src={TreeShape} alt="" />
        </div>

       {/*.............Selling Book content*/}
           {
             sellingBooksData.map(({img, infoTitle, infoTitleTop,desc,price,shopbtnLink})=>{
                return(
                    <div className='container bestselling-container'>
                        {/*............Left...........*/}
                        <div className='selling-book-left'>
                            <img src={img} alt="" />
                        </div>
                         {/*............right...........*/}
                        <div className='selling-book-right'>
                        <TitileTypeTwo Title={'Best selling book'}/>
                        <div><small>{infoTitleTop}</small></div>
                        <h3>{infoTitle}</h3>
                        <p>{desc}</p>
                        <h5><span>{price}</span></h5>
                        <Link to={shopbtnLink} className='btn'>
                            <small>Shop it now </small>
                            <BsArrowRight />
                        </Link>
                        </div>
                    </div>

                )

             })
           }
           
        
    </section>
  )
}
