import { useState } from 'react'
import './Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function checkEmail(event:any){
        event.preventDefault()
        inputValue.includes('@') === false && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form>
                <input type='text' name='email' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={checkEmail}/>
                <button type='submit'>Entrer</button>
            </form>
		</footer>
	)
}

export default Footer