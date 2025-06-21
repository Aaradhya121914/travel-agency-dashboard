import React from 'react'
import { Link, useLocation } from 'react-router'
import {ChipDirective, ChipListComponent, ChipsDirective} from "@syncfusion/ej2-react-buttons";
import {cn, getFirstWord} from "../app/lib/utilis";

const TripCard = ({id,name,location,imageUrl,tags,price}:TripCardProps) => {
    const path=useLocation().pathname;
  return (
    <Link to={path==="/" || path.startsWith("/travel")?`/travel/${id}`:`/trips/${id}`} className='trip-card'>
        <img src={imageUrl} alt={name} />
        <article>
            <h2>{name}</h2>
            <figure>
                <img src="../public/assets/icons/location-mark.svg" alt="location" className='size-4' />
                <figcaption>{location}</figcaption>
            </figure>
        </article>
        <div className="mt-5 pl-[18px] pr-3.5 pb-5">
            <ChipListComponent id="travel-chip">
                <ChipDirective>
                    {tags.map((tag,index)=>{
                        return <ChipDirective key={index} text={getFirstWord(tag)} 
                        cssClass={cn(index===1 ?"!bg-pink-50 !text-pink-500":"!bg-success-50 !text-success-700")} />
                    })}

                </ChipDirective>
            </ChipListComponent>
        </div>
    </Link>
  )
}

export default TripCard
