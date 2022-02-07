import React from 'react';
import {useState, useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'


function Contact() {
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const params = useParams()

    useEffect(() => {
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landlord)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()) {
                setLandlord(docSnap.data())
            } else {
                toast.error('Could not retrive landlord data')
            }
        }

        getLandlord()

    }, [params.landlordId])

  return <div className='pageContainer'>
      <header>
      <p className="pageHeader"></p>
      </header>

      {landlord !== null && (
          <main>
              <div className='contactLandlord'>
                  <p className="landlordName">{landlord?.name}</p>
              </div>
          </main>
      )}
  </div>;
}

export default Contact;
