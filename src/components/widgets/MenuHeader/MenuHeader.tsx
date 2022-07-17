import * as React from 'react';
import './MenuHeader.scss';
// @ts-ignore
import { CallToActionButton } from '../../elements/CallToActionButton/CallToActionButton.tsx';
// @ts-ignore
import { Logo } from '../../elements/Logo/Logo.tsx';

export const MenuHeader = () => {
    let ctaAttr = {
        ctaText: 'Baixar o App',
        ctaHref: '#'
    }

    return (
        <nav>
            <ul>
                {/* <li>{Logo}</li> */}
                <li>Para você</li>
                <li>Para seu negócio</li>
                <li>Central de ajuda</li>
                <li>Sobre o PicPay</li>
                <li>Blog</li>
                <li><CallToActionButton prop={{ ...ctaAttr }} /></li>
            </ul>
        </nav>
    );
}