import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Question_Card from '../Component/Cards/Question_Card';
import { v4 as uuid } from 'uuid'

const Questions = () => {

    const uid = uuid();

    // user id  
    const user_id = useSelector((state) => state.user.id);
    const [que, setques] = useState("")
    const [data, setdata] = useState([])
    const id = uid.slice(0, 12);

    // selecting data 
    const setQuestion = (e) => {
        setques(e.target.value)
    }

    // sending data to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
            await updateDoc(docref, {
                user_question: arrayUnion({
                    id: id,
                    question: que,
                    user_id: user_id,
                })
            })
            alert("Hey  You'r question asked sucessfully.")

        }
        catch (error) {
            console.log(error)
        }
    }

    // fetching questions from database  
    useEffect(() => {
        const fetchque = async () => {
            try {
                const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
                const querySnapshot = await getDoc(docref);
                const data = querySnapshot.data();
                setdata(data.user_question)
            } catch (error) {
                console.log(error);
            }
        }
        fetchque()
    }, [data])


    return (
        <div className=' pt-[80px] mx-[40px]' >
            {/* main container */}
            < div className=' w-full flex justify-between items-center' >

                {/* left side */}
                < div className=' flex flex-col w-[35%] bg-black bg-opacity-10 h-[50vh]' >
                    <h1 className=' flex justify-center items-center text-[40px] font-semibold text-blue-700 my-[20px]'>
                        Ask a Question
                    </h1>
                    <div className=' flex flex-wrap mx-4 w-full'>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full'>
                            <textarea type="text"
                                placeholder='Write Your Question....'
                                name='question'
                                onChange={setQuestion}
                                cols={30}
                                rows={8}
                                className=' bg-black bg-opacity-90 border-2 p-[5px_12px] outline-none text-white w-[80%] rounded-lg '
                                required
                            />
                            <button type='submit' className=' bg-main flex justify-center p-[10px_10px] rounded-[50px] text-white w-[30%]'>Ask</button>
                        </form>
                    </div>
                </div >

                {/* right side  */}
                < div className=' flex  flex-col w-[60%] border-2 h-[85vh] overflow-y-scroll p-[20px]' >
                    <h1 className=' flex justify-center items-center text-[40px] font-semibold text-blue-700'>
                        Question's
                    </h1>
                    <div className='flex flex-wrap mx-[10px]'>
                        {
                            data.map((pro, i) => (
                                <Question_Card key={i} {...pro} />
                            ))
                        }
                    </div>
                </div >

            </div >

        </div >
    )
}

export default Questions