import React from 'react'
// @ts-ignore
import { DisplaySection } from '../DisplaySection/DisplaySection.tsx'
import './HomePage.scss'
// @ts-ignore
import { Images } from '../../assets/images/Images.tsx'

export const HomePage = () => {
    interface SectionI {
        title: string,
        text: string,
        imgSrc?: string,
        isHero?: boolean,
        ctaText: string,
        ctaHref: string,
    }

    let sectionTextOne: SectionI = {
        isHero: true,
        title: 'Descubra o universo de facilidades do PicPay',
        text: 'Com o PicPay é assim: pode parcelar seus boletos em até 12x, ter uma conta digital segura e gratuita, cartão de crédito sem anuidade e ainda ganhar dinheiro de volta em suas compras.',
        imgSrc: Images.image0,
        ctaText: 'Baixar o App',
        ctaHref: '#',
    }
    let sectionTextTwo: SectionI = {
        title: 'Dinheiro não precisa ser um tabu',
        text: 'Nascemos com a missão de tornar a vida das pessoas mais fácil. Por isso, nossa nova campanha convida você a se desacostumar dos perrengues financeiros. Pagar sem ter nenhuma vantagem? Desacostuma!',
        imgSrc: Images.image1,
        ctaText: 'Saber mais',
        ctaHref: '#'
    }
    let sectionTextThree: SectionI = {
        title: 'PicPay Card: seu cartão que é débito, crédito, totalmente gratuito, do PicPay',
        text: 'Usando seu cartão de crédito e débito físico ou virtual, você paga tudo e todos e ainda pode parcelar no crédito. Além disso, você ainda pode ganhar cashback, ou seja, dinheiro de volta.',
        imgSrc: Images.image3,
        ctaText: 'Pedir cartão de crédito',
        ctaHref: '#'
    }

    return (
        <div className='homePage'>
            <DisplaySection prop={{ ...sectionTextOne }} />
            <DisplaySection prop={{ ...sectionTextTwo }} />
            <DisplaySection prop={{ ...sectionTextThree }} />
        </div>
    )
}