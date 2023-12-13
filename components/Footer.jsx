import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='flexCenter mb-10'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row ml-11'>
          <Link href='/' className='mb-10'>
            <Image 
              src="/ry-logo-sm.png"
              alt='Railyard logo'
              width={85}
              height={40}
            />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-betweem md:flex-1'>
            {FOOTER_LINKS.map((columns, ColumnIndex) => (
              <FooterColumn title={columns.title} key={ColumnIndex}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-400'>
                  {columns.links.map((link, linkIndex) => (
                    <Link href='/' key={linkIndex}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <Link
                    href='/'
                    key={linkIndex}
                    className='flex gap-4 md:flex:col lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>
                      {link.label}
                    </p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link, linkIndex) => (
                    <Link href='/' key={linkIndex}>
                      <Image 
                        src={link}
                        alt='logo'
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border bg-gray-20' />
        <p className='regular-14 w-full text-center text-gray-30'>2024 The Railyard | All rights reserved</p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer