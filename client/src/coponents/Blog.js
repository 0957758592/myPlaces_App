import React from 'react'
import { withStyles } from '@material-ui/core/styles';

export default withStyles(styles)(Blog = () => {
  return (
    <div>
      Blog
    </div>
  )
})

const styles ={
    root: {
        minWidth: 350,
        maxWidth: 400,
        maxHeight: "calc(100vh - 64px)",
        overflowY: "scroll",
        display: "flex",
        justifyContent: "center"
    },
    rootMobile: {
        maxWidth: "100%",
        maxHeight: 300,
        overflowX: "hidden",
        overflowY: "scroll"
      }
}
