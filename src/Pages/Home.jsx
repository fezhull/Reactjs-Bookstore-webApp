import Header from "../Components/Header/Header"
import Brands from "../Components/Brands.jsx/Brands"
import FeaturesBooks from "../Components/FeaturesBooks/FeaturesBooks"
import BestSellingBook from "../Components/BestSellingBook/BestSellingBook"
import PopularBooks from "../Components/PopularBooks/PopularBooks"
import Quote from "../Components/Quote/Quote"
import LatestArticle from "../Components/LatestArticle/LatestArticle"


export default function Home() {
  return (
    <>
    <Header/>
    <Brands/>
    <FeaturesBooks/>
    <BestSellingBook/>
    <PopularBooks/>
    <Quote/>
    <LatestArticle/>
 
    </>
  )
}
