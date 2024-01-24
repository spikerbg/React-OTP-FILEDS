import { useEffect, useRef, useState } from "react"


export default function OtpInput({length = 4, onOtpSubmit}) {
    const [otp, setOtp] = useState (new Array(length).fill(""))
    const inputRefs = useRef([])
    useEffect(() =>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    }, [])
    console.log(inputRefs)
    
    const handlerChange = (index, e) =>{
        const value = e.target.value;
        if(isNaN(value))
        return
    const newOtp = [...otp]
    // allow only one input
    newOtp[index] = value.substring(value.length - 1)
    }
    const handlerClick = () =>{
        
    }
    const handlerKeyDown = () =>{
        
    }
  return (
    <div>
       {
        otp.map((value, index) => {
            return <input 
            key={index}
            type="text"
            ref={(input) =>(inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handlerChange(index,e)}
            onClick={(e) => handlerClick(index)}
            onKeyDown={(e) =>handlerKeyDown(index,e)}
            className="m-2 border h-16 w-16 text-center form-control rounded"
            />
        })
       }
    </div>
  )
}
