import React from 'react'
import {withStyles} from '@material-ui/core/styles'

export default withStyles(styles)(Login = ({classes}) => {
  return (
    <div>
      Login
    </div>
  )
})

const styles = { 
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fleDirection: 'column',
        alignItems: 'center'
    }
}