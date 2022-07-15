import React from 'react'
import './SectionImage.scss'

export const SectionImage = ({ prop }) => {

    let { imgSrc } = prop

    return (
        <div className="sectionImage">
            <img src={imgSrc} alt="" />
        </div>
    )
}