import React, { useState } from 'react';
import CardBox from '../CardBox/index';
import './style.css';

const Navigation = () => {
    const [ button, setButton ] = useState(0)
    const [ active0, setActive0 ] = useState('tab-active')
    const [ active1, setActive1 ] = useState('tab')
    const [ active2, setActive2 ] = useState('tab') 
    const buttonHandler0 = () => {
        setButton(0)
        setActive0('tab-active')
        setActive1('tab')
        setActive2('tab')
    }
    const buttonHandler1 = () => {
        setButton(1)
        setActive0('tab')
        setActive1('tab-active')
        setActive2('tab')
    }
    const buttonHandler2 = () => {
        setButton(2)
        setActive0('tab')
        setActive1('tab')
        setActive2('tab-active')
    }

    return (
        <>
            <nav className="tabs">
                <button className={active0} onClick={buttonHandler0}>{`🔗 Links Úteis`}</button>
                <button className={active1} onClick={buttonHandler1}>{`👨‍💻 Últimos Trabalhos`}</button>
                <button className={active2} onClick={buttonHandler2}>{`📰 Artigos`}</button>
            </nav>
            <CardBox number={button}/>
        </>
    )
}

export default Navigation;