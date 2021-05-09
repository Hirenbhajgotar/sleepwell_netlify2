import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">SleepWell</a>
        <span className="ml-1">&copy; 2020 SleepWell.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">SleepWell</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
