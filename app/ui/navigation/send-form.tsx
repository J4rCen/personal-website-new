export default function SendForm() {
    return (
        <form className="Navigation_Menu__Send_Form" action="">
            <textarea 
                className="Navigation_Menu__Send_Form__textarea font_ChakraPetch" 
                name="" 
                id="" 
                cols={30} 
                rows={10}
                placeholder="Enter your message"
            ></textarea>

            <input className="Navigation_Menu__Send_Form__submit font_ChakraPetch" type="submit" value="Submit"/>
        </form>
    )
}