import * as React from 'react';
import './CallToActionButton.scss'

export const CallToActionButton = ({ prop }) => {
    let { ctaText, ctaHref } = prop
    return (
        <a href={ctaHref}>
            {ctaText}
        </a>
    );
}
