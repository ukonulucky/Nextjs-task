import React from 'react'
import { useRouter } from "next/router"
function ReviewId() {
    const router = useRouter()
    const { productId, reviewId } = router.query
    return   (
        <div>this is the reviewId {reviewId} for the pproduct { productId}</div>
 )
  
}
export default ReviewId