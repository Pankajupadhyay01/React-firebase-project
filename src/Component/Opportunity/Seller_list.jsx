import { useEffect, useState } from 'react'
import Alnum_card from '../Cards/Alnum_card'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase' 
import { CircleLoader } from 'react-spinners';

const Seller_list = () => {
    const [list, setlist] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchSeller = async () => {
            let seller = []
            try {
                const querySnapshot = await getDocs(collection(db, "seller"));
                querySnapshot.forEach((doc) => {
                    seller.push(doc.data())
                });
                setlist(seller)
                setloading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchSeller()
    }, [])

    return (
        <>
            {
                loading ? <CircleLoader /> :
                    <div className='flex flex-wrap'>
                        {
                            list.map((pro, i) => (
                                <Alnum_card title={pro.name} />
                            ))
                        }

                    </div>
            }
        </>
    )
}

export default Seller_list