import React from 'react'
import './SectionDivided.scss'
//@ts-ignore
import { SectionText } from '../SectionText/SectionText.tsx';
//@ts-ignore
import { SectionImage } from '../SectionImage/SectionImage.tsx';

export const SectionDivided = ({ prop }) => {

    let { title,
        text,
        imgSrc,
        isHero,
        ctaHref,
        ctaText, } = prop

    return (
        <section className='sectionDivided'>
            <SectionText prop={{ title, text, isHero, ctaText, ctaHref }} />
            <SectionImage prop={{ imgSrc }} />
        </section>
    );

}