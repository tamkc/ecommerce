import Steps from '@/components/Step'
import Wrapper from '@/components/Wrapper'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper className='flex-1 flex flex-col pt-5'>
        <div>
      <Steps />
      {children}
      </div>
    </Wrapper>
  )
}

export default Layout