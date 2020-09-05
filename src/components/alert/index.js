import React from 'react'
import * as Style from './style'

function Alert({_label, _onClose, _showAlert}) {

    if(_showAlert){
        return(
            <Style.Container>

                <Style.ContainAlert>
                    <Style.ContainLabel>
                        <Style.Label>
                            {_label}
                        </Style.Label>
                    </Style.ContainLabel>

                    <Style.Button onPress={_onClose}>
                        <Style.Label>
                            Ok
                        </Style.Label>
                    </Style.Button>
                </Style.ContainAlert>
            
            </Style.Container>
        )
    }else{
        return null
    }

}


export default Alert