import React from 'react'
import { useRouter } from "next/router"
function All() {
    const router = useRouter()
    const { params = []} = router.query
    if (params.length == 1 ) {
        return (
            <p>Viewing Dogs for params of one { params[0]}</p>
        )
        
    } else if(params.length == 2) {
        return (
            <p>Viewing Dogs fro params  of two { params[1]}</p>
)
    } else {
        return (
            <p>view docs without params</p>
       )
    }

}

export default All