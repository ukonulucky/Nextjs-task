import React from 'react'
import Image from "next/image"
import pet1 from "../public/pet1.jpg"

function Pet() {
    console.log(process.env.dBURL)
  return (
      <div>
          <Image src={pet1} width="100px" height="120px" alt='pet' placeholder='blur' />
          {
              ["pet1", "pet2","pet3"].map(pet => (
                  <div className="pet" key={ pet }>
                       <Image width="100px" height="120px" src={`/${pet}.jpg`} alt="pets" />
                 </div>
              ))
}
    </div>
  )
}
export default Pet