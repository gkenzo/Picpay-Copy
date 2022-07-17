import React from 'react'
// @ts-ignore
import { SectionTwoGridContainer  } from '../../widgets/SectionTwoGridContainer/SectionTwoGridContainer.tsx'
import './HomePage.scss'
// @ts-ignore
import { Images } from '../../../assets/images/Images.tsx'

export const HomePage = () => {
    interface SectionI {
        title: string,
        text: string,
        imgSrc?: string,
        isHero?: boolean,
        ctaText: string,
        ctaHref: string,
    }

    let homeSections: SectionI[] = [
        {
            isHero: true,
            title: 'Descubra o universo de facilidades do PicPay',
            text: 'Com o PicPay é assim: pode parcelar seus boletos em até 12x, ter uma conta digital segura e gratuita, cartão de crédito sem anuidade e ainda ganhar dinheiro de volta em suas compras.',
            imgSrc: Images.image0,
            ctaText: 'Baixar o App',
            ctaHref: '#',
        },
        {
            title: 'Dinheiro não precisa ser um tabu',
            text: 'Nascemos com a missão de tornar a vida das pessoas mais fácil. Por isso, nossa nova campanha convida você a se desacostumar dos perrengues financeiros. Pagar sem ter nenhuma vantagem? Desacostuma!',
            imgSrc: Images.image1,
            ctaText: 'Saber mais',
            ctaHref: '#'
        },
        {
            title: 'PicPay Card: seu cartão que é débito, crédito, totalmente gratuito, do PicPay',
            text: 'Usando seu cartão de crédito e débito físico ou virtual, você paga tudo e todos e ainda pode parcelar no crédito. Além disso, você ainda pode ganhar cashback, ou seja, dinheiro de volta.',
            imgSrc: Images.image3,
            ctaText: 'Pedir cartão de crédito',
            ctaHref: '#'
        },
        {
            title: 'No PicPay seu dinheiro fica seguro e rende mais que a poupança',
            text: 'Além de fazer seu dinheiro render, você pode usá-lo na hora que quiser para pagamentos, transferências e saques. No PicPay você controla tudo o que entra e o que sai na hora, de forma fácil e direto do celular.',
            imgSrc: Images.image5,
            ctaText: 'Conhecer rendimentos',
            ctaHref: '#'
        },
        {
            title: 'PicPay Store: você compra com desconto e direto pelo celular',
            text: 'Na PicPay Store você encontra suas lojas favoritas em um só app. Aproveita descontos exclusivos e ainda pode ganhar dinheiro de volta. Você também pode fazer recarga de celular, de cartão de transporte e pagar seus streamings de séries e filmes direto do seu celular.',
            imgSrc: Images.image2,
            ctaText: 'Conhecer a Store',
            ctaHref: '#'
        },
        {
            title: 'Não se preocupe com taxas escondidas, no PicPay te mostramos tudo de forma transparente',
            text: 'Nós nos preocupamos com a transparência financeira, por isso no PicPay não temos taxas e tarifas escondidas. Com a carteira PicPay, seu dinheiro rende e você ainda poupa seu tempo. Você faz tudo pelo seu celular.',
            imgSrc: Images.image6,
            ctaText: 'Conhecer as taxas e tarifas',
            ctaHref: '#'
        },
        {
            title: 'Blog PicPay',
            text: 'Fique por dentro de todas as novidades de serviços financeiros, pagamentos seguros e gestão do seu negócio no blog do PicPay.',
            imgSrc: Images.image7,
            ctaText: 'Acessar os conteúdos',
            ctaHref: '#'
        }
    ]

    return (
        <div className='homePage'>
            {homeSections.map((section, index) => {
                return index < 3 ? <SectionTwoGridContainer prop={{ ...section }} /> : ''
            })}
            {homeSections.map((section, index) => {
                return index >= 3 ? <SectionTwoGridContainer prop={{ ...section }} /> : ''
            })}
        </div>
    )
}