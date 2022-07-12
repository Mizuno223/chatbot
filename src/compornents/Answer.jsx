import * as React from 'react'
import Button from '@material-ui/core/Button'

const Answer = (props) => {
    return (
        <Button>
            {props.content}
        </Button> 
    )
}

export default Answer