
import { Button } from '@material-ui/core'
import React from 'react'

const Footer = (props) => {
    // const handleButtonClick = () => {
    //     props.onButtonClick("Ham");
    // }
    return (
        <div>
            Set Gloval Property
            <Button 
             color="primary" 
             variant="contained"
             onClick={props.onButtonClick}
             >

                Click
                
            </Button>
        </div>

    )
}

export default Footer;