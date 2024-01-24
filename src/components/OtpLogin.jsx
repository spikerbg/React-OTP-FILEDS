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
        <div>
            {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumber}
                    placeholder="Phone number" />
                <button type="submit">Submit</button>

            </form>
            :<div>
                <p>Enter OTP send to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
                </div>}
        </div>
    )
}
