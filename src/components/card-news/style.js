import styled from 'styled-components'
import { Dimensions } from 'react-native'

const wCardNews = Dimensions.get("window").width - 40
const hCardNews = Dimensions.get("window").width

export const Container = styled.View`
    width: ${wCardNews}px;
    height: ${hCardNews}px;
    padding: 10px;
    align-self: center;
    border-radius: 20px;
    background-color: white;
`

export const ContainAuthor = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`

export const TagAuthor = styled.View`
    padding: 5px 10px;
    margin-right: 10px;
    align-self: center;
    border-radius: 100px;
    background-color: #B3D7FD;
`

export const Main = styled.View`
    flex: 1; 
    z-index: 2;
    padding-top: 30px;
`

export const Label = styled.Text`
    font-size: ${props => props._size || 15}px;
    font-weight: ${props => props._size === 35 ? 'bold' : 'normal'};
`

export const Description = styled.Text`
    margin-top: 10px;
    font-size: 15px;
`

export const TouchSetting = styled.TouchableOpacity`
    z-index: 2;
    align-self: flex-end;
`

export const Background = styled.Image` 
    position: absolute;
    z-index: 1;
    width: ${wCardNews}px;
    height: ${hCardNews}px;
    border-radius: 20px;
    opacity: 0.5;
`