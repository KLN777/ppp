import Image from 'next/image'
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from"@heroicons/react/solid"


function InputBox(){

    const inpu = { 
            name: "Bill Gates",
            image: "https://links.papareact.com/zvy"
        }

    return(
        <div className="bg-white rounded-md mt-6 p-2 shadow-md font-medium">
            <div className="flex space-x-4 items-center p-4 border-b-2">
                <Image className="rounded-full" src={inpu.image} width={40} height={40} layout="fixed"></Image>
                <form className="flex flex-1">
                    <input className="rounded-full h-12 bg-gray-200 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind, ${inpu.name}`}/>
                </form>

            </div>
            <div className="flex justify-evenly p-3">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs ">Live Video</p>
                </div>
                <div className="inputIcon" >
                    <CameraIcon className="h-7 text-green-500"/>
                    <p className="text-xs ">Photo/Video</p>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-500"/>
                    <p className="text-xs ">Feeling/Activity</p>
                </div>
                
            </div>
        </div>
        
    )
}

export default InputBox