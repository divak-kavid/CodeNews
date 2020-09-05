import React from 'react'
import { CommonActions } from '@react-navigation/native'
import * as Style from './style'

function Apresentation({navigation}) {

    function navigate() {
        navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'StackPrivate'}]
            })
        )
    }

    return (
        <Style.Container>            
            <Style.Background/>

            <Style.MainLabel>
                Seja bem-vindo ao{'\n'}
                Dashboard CodeNews.
            </Style.MainLabel>

            <Style.Button onPress={navigate}>
                <Style.Label>
                    Ir para a plataforma
                </Style.Label>
            </Style.Button>
        </Style.Container>
    )
}

export default Apresentation