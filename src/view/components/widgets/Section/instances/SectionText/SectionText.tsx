import React from 'react'
import './SectionText.scss'
//@ts-ignore
import { CallToActionButton } from '../CallToActionButton/CallToActionButton.tsx';

export const SectionText = ({ prop }) => {

    let { title,
        text,
        isHero,
        ctaText,
        ctaHref } = prop

    return (
        <div className='sectionText'>
            {isHero ? <h2>{title}</h2> : <span className="sectionTitle">{title}</span>}
            <p>{text}</p>
            <CallToActionButton prop={{ ctaText, ctaHref }} />
        </div>
    )
}