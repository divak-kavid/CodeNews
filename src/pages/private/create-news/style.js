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

export const ContainForm = styled.ScrollView`
    flex: 1;
    align-self: center;
`

export const Label = styled.Text`
    color: ${props => props._color || 'black'};
    font-weight: ${props => props._weight || 'bold'};
    font-size: ${props => props._size || '14'}px;
`

export const LabelEmpty = styled.Text`
    color: black;
    font-size: 14px;
    margin-bottom: 20px;
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

export const Select = styled.TouchableOpacity`
    width: ${wField}px;
    height: 50px;
    margin: 5px 0px 2px 0px;
    padding: 0px 20px;
    border-radius: 10px;
    justify-content: center;
    background-color: #d7dee0;
`

export const ExtendField = styled.TextInput`
    width: ${wField}px;
    height: 150px;
    text-align-vertical: top;
    margin: 5px 0px 20px 0px;
    padding: 20px;
    border-radius: 10px;
    background-color: #d7dee0;
`

export const Button = styled.TouchableOpacity`
    width: ${wField}px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: rgba(16, 246, 13, 0.1);
`

export const TouchAuhor = styled.TouchableOpacity`
    margin-bottom: 20px;
    align-self: flex-end;
`

export const Background = styled.TouchableHighlight`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
    background-color: rgba(255, 255, 255, 0.8);
`

export const ContainFlatList = styled.View`
    width: ${width}px;
    max-height: ${wField}px;
    padding-bottom: 15px;
    background-color: white;
`

export const CardSelect = styled.TouchableOpacity`
    width: ${width}px;
    padding: 15px 0px;
    align-self: center;
    justify-content: center;
    align-items: center;
`

export const Sepatator = styled.TouchableOpacity`
    width: ${wField}px;
    height: 2px;
    border-radius: 10px;
    align-self: center;
    background-color: #d7dee0;
`

export const FlatList = styled.FlatList``