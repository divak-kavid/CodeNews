import styled from 'styled-components'

export const TouchHeader = styled.TouchableOpacity`
    margin: 0px 20px;
`

export const TouchSearch = styled.TouchableOpacity``

export const Icon = styled.Image`
    width: 20px;
    height: 20px;
`

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #d7dee0;
`

export const ContainLabel = styled.View`
    position: absolute;
    z-index: 9999;
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(215, 222, 224, 0.95);
`

export const Label = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const LabelEmpty = styled.Text`
    color: black;
    font-size: 14px;
    margin-bottom: 20px;
    align-self: center;
`

export const FlatList = styled.FlatList`
    padding-top: 60px;
`

export const Sepatator = styled.View`
    height: 20px;
`