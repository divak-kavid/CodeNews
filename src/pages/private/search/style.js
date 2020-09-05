import styled from 'styled-components'

export const TouchHeader = styled.TouchableOpacity`
    margin: 0px 20px;
`

export const TouchSearch = styled.TouchableOpacity`
    margin-left: 20px;
`

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

export const FieldSearch = styled.TextInput`
    flex: 1;
    height: 40px
    padding: 0px 20px;
    border-width: 1px;
    border-radius: 10px;
`

export const Label = styled.Text`
    font-size: 18px;
`

export const LabelEmpty = styled.Text`
    color: black;
    align-self: center;
`

export const FlatList = styled.FlatList`
    margin-top: 60px;
`

export const Sepatator = styled.View`
    height: 20px;
`