import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get("window").width
const wField = width - 40

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
`

export const Indicator = styled.View`
    width: 100px;
    height: 5px;
    z-index: 1;
    border-radius: 20px;
    background-color: rgba(220, 220, 220, 0.8);
    position: absolute;
    top: 10px;
    align-self: center;
`

export const HeaderLabel = styled.Text`
    margin: 30px 0px;
    align-self: center;
    font-weight: bold;
    font-size: 20px;
`

export const TouchHeader = styled.TouchableOpacity``

export const Icon = styled.Image`
    width: 20px;
    height: 20px;
`

export const Label = styled.Text`
    color: ${props => props._color || 'black'};
    font-weight: bold;
    font-size: ${props => props._size || '14'}px;
`

export const LabelEmpty = styled.Text`
    color: black;
    font-size: 14px;
    align-self: center;
`

export const Field = styled.TextInput`
    width: ${wField}px;
    height: 50px;
    margin: 5px 0px 20px 0px;
    padding: 0px 20px;
    border-radius: 10px;
    background-color: #d7dee0;
`

export const ContainHeader = styled.View`
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.95);
`

export const FlatList = styled.FlatList` 
    background-color: #d7dee0;
`

export const Sepatator = styled.View`
    height: 10px;
`

export const ContainAuth = styled.View`
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
`

export const TouchRemove = styled.TouchableOpacity``

export const Background = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
    background-color: rgba(255, 255, 255, 0.8);
`

export const ContainWrite = styled.View`
    width: ${width}px;
    align-items: center;
    justify-content: center;
    background-color: white;
`

export const Button = styled.TouchableOpacity`
    width: ${wField}px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props._color};
`