import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const wAlert = width - 40

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
`

export const ContainAlert = styled.View`
    width: ${wAlert}px;
    height: 200px;
    border-radius: 10px;
    align-items: center;
    background-color: white;
`

export const ContainLabel = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Label = styled.Text``

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #d7dee0;
`