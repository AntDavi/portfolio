import Image from 'next/image'
import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-10 text-center'>
        <h1 className='text-[32px] font-semibold'>
          🚧 Ainda estamos trabalhando nessa área! 🚧
        </h1>
        <h2 className='text-[24px] font-medium'>
          Volte mais tarde
        </h2>
      </div>
      <Image
        src='/erros/under-construction.svg'
        width={300}
        height={300}
        priority
        alt='Ainda construindo'
      />
    </div>
  )
}

export default UnderConstruction