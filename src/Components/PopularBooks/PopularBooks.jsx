// import PopularBooks.css..........................
import './PopularBooks.css'

//Import title Props.................
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'

//import popularbooks Books Data............
import { galleryData } from '../../Data/Data'



//import useState..............
import { useState } from 'react';


export default function PopularBooks() {

    //Active Button Functionality...................
    const [activeButton,setActiveButton] = useState('all');

    const handleFilterChange = (category)=>{
        setActiveButton(category);
    }

    //Filler Gallery Functionality..............
     const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=> item.category === activeButton);
  
     
  
     return (
    <section className='PopularBooks'>
        <div className='container popuparbooks-container'>
            <TitileTypeOne TitleTop={'some quality items'} Title={'Popular Books'} ClassName={'popularbooks-title'}/>
        
        {/*...........................Fillter Tabs Button...........................*/}
        <div>
            <div className='filter-button'>
                <button 
                className={activeButton ==='all' ? 'active' : ''}
                onClick={()=>handleFilterChange('all')} 
                >
                    All
                </button>
                <button
                  className={activeButton ==='Business' ? 'active' : ''}
                  onClick={()=>handleFilterChange('Business')}
                >
                    Business
                </button>
                <button
                  className={activeButton ==='Technology' ? 'active' : ''}
                  onClick={()=>handleFilterChange('Technology')}
                >
                    Technology
                </button>
                <button
                  className={activeButton ==='Adventure' ? 'active' : ''}
                  onClick={()=>handleFilterChange('Adventure')}
                >
                    Adventure
                </button>
                <button
                  className={activeButton ==='Romantic' ? 'active' : ''}
                  onClick={()=>handleFilterChange('Romantic')}
                >
                Romantic
                </button>
                <button
                  className={activeButton ==='Fictional' ? 'active' : ''}
                  onClick={()=>handleFilterChange('Fictional')}
                >
                   Fictional
                </button>
            </div>
        </div>
        {/*....................Fillerter books content ...........*/}
        <div className='gallery'>
            {
                filterItems.map(({name,writer,price,image},index)=>{
                    return(
                        <div className='gallery-item' key={index}>
                            <div className='popularbook-image'>
                                <img src={image} alt="" />
                            </div>
                            <div className='popularbook-info'>
                                <h4>{name}</h4>
                                <div><small>{writer}</small></div>
                                <h5><span>{price}</span></h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}
