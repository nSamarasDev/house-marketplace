import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {collection, getDocs, query, orderBy, limit} from 'firebase/firestore'
import {db} from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


function Slider() {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchListings = async () => {
            const listingsRef = collection(db, 'listnigs')
            const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
            const querySnap = await getDocs(q)
    
            let listings = [] 
    
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            
            console.log(listings)
            setListings(listings)
            setLoading(false)
        }

       fetchListings()
    }, [])



  return (
    <div>Slider</div>
  )
}

export default Slider