import React  from 'react'

const Tour = ({id,name,description,image,removeTour})=>{

    return <article className='container'>
            <img src={image} alt="" />
            <div className="container-desc">
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={()=>removeTour(id)}>remove</button>
            </div>
            
    </article>

}

export default Tour