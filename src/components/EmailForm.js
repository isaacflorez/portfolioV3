import { useState } from "react"
function EmailForm () {
    const [email, setEmail] = useState("")
    const handleSubmit = () => {
        window.alert(email + " has been added to the email list")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Join now</button>
        </form>
    )
}

export default EmailForm