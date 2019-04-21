import React from 'react'
import {withRoot} from '@material-ui/core/styles'

export default withRoot(styles)(Signout = ({classes}) => {
  return (
    <div>
      Signout
    </div>
  )
})

const styles ={
    root: {
        cursor: 'pointer',
        display: 'flex'
    },
    buttonText: {
        color: 'orange'
    },
    buttonIcon: {
        marginLeft: '5px',
        color: 'orange'
    }
}