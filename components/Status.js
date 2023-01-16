import Image from 'next/image'
import React from 'react'
import { checked } from '../public/img/index'
import { StatusContainer } from '../styles/Styled'

const Status = ({img,stat,status}) => {
  return (
    <StatusContainer status={status}  flexDirection={"column"} alignItems={"center"} gap={1}>
        <Image src={img} width={30} height={30} />
        <span>{stat}</span>
        <Image
                src={checked}
                width={20}
                height={20}
                alt=""
              />
    </StatusContainer>
  )
}

export default Status