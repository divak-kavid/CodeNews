import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const wButton = width - 40

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #d7dee0;
`

export const Background = styled.Image`
    position: absolute;
    bottom: -100px;
    left: -50px;
    width: ${wButton}px;
    height: ${wButton}px;
    background-color: #B3D7FD;
    border-radius: ${wButton*2}px;
`

export const MainLabel = styled.Text`
    margin: 50px 20px;   
    font-size: 25px;
`

export const Label = styled.Text`
    font-weight: bold;
`

export const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: 30px;
    width: ${wButton}px;
    height: 60px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    align-self: center;
    background-color: white;
`