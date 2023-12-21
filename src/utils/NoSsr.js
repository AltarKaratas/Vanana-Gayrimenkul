import dynamic from 'next/dynamic'
import React from 'react'

const NoSsr = props => (
  <React.Fragment>{props.children}</React.Fragment>
)

 const Nossr = dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})
export default Nossr;