import React from 'react'
import Tour from './tourComponent'

const Tours = ({data,removeTour})=>{
    return (<>
    <section>
        <h1>Around The World</h1>
        <div className="underline"></div>
        {
        data.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })
    }

    </section>    
    </>)
}
export default Tours 