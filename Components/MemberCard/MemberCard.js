import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { H5, LgPara, SmPara } from '../../styles/ShareStyles';
import StyledMemberCard from './StyledMemberCard';


const MemberCard = ({img, title, meta, desc, linkText, href}) => {
  return (
    <StyledMemberCard>
        <div className="thumbnail">
            <Image src={img} alt="" width="auto" height="auto" />
        </div>
        <H5 className="header">{title}</H5>
        <SmPara className="meta">{meta}</SmPara>
        <LgPara className="description">
           {desc}
        </LgPara>
        <Link href={href} className="link">{linkText}</Link>
    </StyledMemberCard>
  )
}

export default MemberCard