import { useState } from "react"
import OtpInput from "./OtpInput"


export default function OtpLogin() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handlePhoneSubmit = (e) => {
        e.preventDefault()
        //phone validation
        const regex = /[^0-9]/g
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
        alert("Invalid Phone Number ")
    return
}

// connect to API
// show OTP Fileds
setShowOtpInput(true)
    }
    const onOtpSubmit = (otp) =>{

    }

    return (
        <div className="">
            {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
                <div className="">
                <input type="text" value={phoneNumber} onChange={handlePhoneNumber}
                    placeholder="Phone number" 
                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"/>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
                </div>
            </form>
            :<div>
                <p>Enter OTP send to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
                </div>}
        </div>
    )
}
