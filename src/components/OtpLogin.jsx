import { useState } from "react"


export default function OtpLogin() {
    const [phoneNumber, setPhoneNumber] = useState("")

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
    }

    return (
        <div>
            <form onSubmit={handlePhoneSubmit}>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumber}
                    placeholder="Phone number" />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
