import { useSelector } from "react-redux"
import Heading from "../Component/Cards/Heading"

const Dashboard = () => {
    const user = useSelector((state) => state.user.user_data) 
    const uid = useSelector((state) => state.user.id)


    return (
        <div className='pt-[80px] mx-[40px]'>
            {
                user ?
                    <div className="bg-red-500 rounded-2xl mt-[10px] h-[70vh] relative flex flex-col gap-y-7 justify-center items-center before:absolute before:content-[''] before:h-[20vh] before:w-full before: before:bg-white before:top-0">
                        <div className="bg-blue-500 rounded-full w-[30vh] h-[30vh] p-1 z-[99]  flex justify-center items-center m-auto absolute top-0 border-4 border-white ">
                            <ion-icon name="people-outline"></ion-icon>
                        </div>

                        <div className="flex flex-wrap w-[95%]  gap-4 justify-center">
                            <div className="w-[30%] bg-white">
                                <Heading value="Basic Detail" />
                                <div className="flex flex-col mx-5 cap">
                                    <div>
                                        <span className="text-[18px] font-semibold">Name:-</span>  {user.name}
                                    </div>
                                    <div>
                                        <span className="text-[18px] font-semibold">Mail:-</span>  {user.email}
                                    </div>
                                    <div>
                                        <span className="text-[18px] font-semibold">Contact:-</span>  {user.phone}
                                    </div>
                                    <div>
                                        <span className="text-[18px] font-semibold">Education:-</span>  {user.education}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[30%] bg-white">
                                uugb
                            </div>
                            <div className="w-[30%] bg-white">
                                uugb
                            </div>
                        </div>
                    </div>
                    :
                    <div className=' pt-[80px] mx-[40px] w-[90%] h-[50vh] flex justify-center items-center' >
                        Please Create your Profile First
                    </div>
            }
        </div>
    )
}

export default Dashboard