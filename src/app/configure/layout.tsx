import Steps from '@/components/Step'
import Wrapper from '@/components/Wrapper'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper className='flex-1 flex flex-col'>
      <Steps />
      {children}
    </Wrapper>
  )
}

export default Layout