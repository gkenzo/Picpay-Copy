import React from 'react'
import './SectionDisplayHero.scss'
//@ts-ignore
import { CallToActionButton } from '../../elements/CallToActionButton/CallToActionButton.tsx';

export const SectionDisplayHero = ({ prop }) => {

    let { title,
        text,
        isHero,
        ctaText,
        ctaHref } = prop

    return (
        <div className='sectionDisplayHero'>
            {isHero ? <h2>{title}</h2> : <span className="sectionTitle">{title}</span>}
            <p>{text}</p>
            <CallToActionButton prop={{ ctaText, ctaHref }} />
        </div>
    )
}