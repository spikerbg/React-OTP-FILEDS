import { useEffect, useRef, useState } from "react"


export default function OtpInput({ length = 4, onOtpSubmit }) {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([])
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])

    const handlerChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value))
            return
        const newOtp = [...otp]
        // allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        //submit trigger
        const combinedOtp = newOtp.join("")
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp)

        //move to next input if current filed is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }
    const handlerClick = () => {

    }
    const handlerKeyDown = (index, e) => {
        if (e.key === "Backspace" && 
        !otp[input] && index > 0 && 
        inputRefs.current[index - 1]) 
        {
            //Move focus to the previous input filed on backspace
            inputRefs.current[index - 1].focus()
        }

    }
    return (
        <div>
            {
                otp.map((value, index) => {
                    return <input
                        key={index}
                        type="text"
                        ref={(input) => (inputRefs.current[index] = input)}
                        value={value}
                        onChange={(e) => handlerChange(index, e)}
                        onClick={(e) => handlerClick(index)}
                        onKeyDown={(e) => handlerKeyDown(index, e)}
                        className="m-2 border h-16 w-16 text-center form-control rounded"
                    />
                })
            }
        </div>
    )
}
