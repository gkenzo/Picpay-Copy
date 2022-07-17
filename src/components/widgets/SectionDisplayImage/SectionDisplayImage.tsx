import React from 'react'
import './SectionDisplayImage.scss'

export const SectionDisplayImage = ({ prop }) => {

    let { imgSrc } = prop

    return (
        <div className="sectionDisplayImage">
            <img src={imgSrc} alt="" />
        </div>
    )
}