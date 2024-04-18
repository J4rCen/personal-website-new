import { useState } from "react"

export default function SendForm() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function sendEmail(el: React.FormEvent) {
        el.preventDefault()

        try {

            const date = JSON.stringify(
                {
                    "email": email,
                    "message": message
                }
            )
            

            await fetch(`/api/send`, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: date
            })
            .then(el => console.log(el))
            .catch(err => console.error(err))

            setEmail('')
            setMessage('')
        } catch (error) {
            console.error(error)
            alert("An error occurred while sending")
        }
        
        
    }

    return (
        <form className="Navigation_Menu__Send_Form" onSubmit={el => sendEmail(el)}>
            <input 
                type="email" 
                className="Navigation_Menu__Send_Form__email Navigation_Menu__Send_Form__style font_ChakraPetch"
                placeholder="Enter your email"
                value={email}
                onChange={el => setEmail(el.target.value)}
                required
                name="email"
                id="email"
            />
            <textarea 
                className="Navigation_Menu__Send_Form__textarea Navigation_Menu__Send_Form__style font_ChakraPetch" 
                name="message" 
                id="message" 
                cols={30} 
                rows={10}
                placeholder="Enter your message"
                value={message}
                onChange={el => setMessage(el.target.value)}
                required
            ></textarea>

            <input className="Navigation_Menu__Send_Form__submit font_ChakraPetch" type="submit" value="Submit"/>
        </form>
    )
}
