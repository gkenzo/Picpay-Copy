import React from 'react'
import './SectionTwoGridContainer.scss'
//@ts-ignore
import { SectionDisplayHero } from '../SectionDisplayHero/SectionDisplayHero.tsx';
//@ts-ignore
import { SectionDisplayImage } from '../SectionDisplayImage/SectionDisplayImage.tsx';

export const SectionTwoGridContainer = ({ prop }) => {

    let { title,
        text,
        imgSrc,
        isHero,
        ctaHref,
        ctaText, } = prop

    return (
        <section className='sectionTwoGridContainer'>
            <SectionDisplayHero prop={{ title, text, isHero, ctaText, ctaHref }} />
            <SectionDisplayImage prop={{ imgSrc }} />
        </section>
    );

}