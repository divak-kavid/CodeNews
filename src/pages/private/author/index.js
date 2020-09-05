import React, { useState, useRef } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as Style from './style'
import add from '../../../assets/img/add.png'
import remove from '../../../assets/img/delete.png'

function CreateNews() {
  
  const [showModalNewAuth, setShowModalNewAuth] = useState(false)

  const authors = useSelector(state => state.authors.authors)
  const dispatch = useDispatch()

  function createAuthor(value) {
    dispatch({
      type: 'SET_AUTHOR',
      payload: {
        name: value
      }
    })
  }

  function removeAuhor(value) {
    dispatch({
      type: 'DELETE_AUTHOR',
      payload: {
        key: value
      }
    })
  }

  return(
    <Style.Container>

      <Style.Indicator />

      <Style.HeaderLabel>
        Gerencie os autores
      </Style.HeaderLabel>

      <Style.ContainHeader>
        <Style.Label>
          Lista de autores
        </Style.Label>

        <Style.TouchHeader
          onPress={() => setShowModalNewAuth(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Style.Icon source={add} />
        </Style.TouchHeader>
      </Style.ContainHeader>

      <Style.FlatList
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 50
        }}
        data={authors}
        renderItem={({item}) => (
          <CardAuthor
            _data={item}
            _onPress={(key) => removeAuhor(key)}
          />
        )}
        ItemSeparatorComponent={() => <Style.Sepatator />}
        ListEmptyComponent={() => <Style.LabelEmpty>Sua lista de autores está vazia!</Style.LabelEmpty>}
      />

      <WriteAuthor
        _controller={showModalNewAuth}
        _onPress={() => setShowModalNewAuth(false)}
        _newAuthor={(value) => createAuthor(value)}
      />
      
    </Style.Container>
  )

}

function CardAuthor({_data, _onPress}) {
  return (
    <Style.ContainAuth>
      <Style.Label>
        {_data.name}
      </Style.Label>

      <Style.TouchRemove
        onPress={() => _onPress(_data.key)}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 20 }}
      >
        <Style.Icon source={remove} />
      </Style.TouchRemove>
    </Style.ContainAuth>
  )
}

function WriteAuthor({_controller, _onPress, _newAuthor}) {
  if(_controller) {

    const digitNewAuthor = useRef('')

    function callBack() {
      if (digitNewAuthor.current != ''){
        _newAuthor(digitNewAuthor.current)
        _onPress()
      }else{
        _onPress()
      }
    }

    return (
      <Style.Background onPress={_onPress}>

        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <Style.ContainWrite>
            <Style.Label>
              Nome do autor
            </Style.Label>

            <Style.Field
              onChangeText={(txt) => digitNewAuthor.current = txt}
            />

            <Style.Button 
              _color={'rgba(16, 246, 13, 0.1)'}
              onPress={() => callBack(digitNewAuthor)}
            >
              <Style.Label
                _color={'#029000'}>
                Cadastrar
              </Style.Label>
            </Style.Button>

          </Style.ContainWrite>
        </KeyboardAvoidingView>

      </Style.Background>
    )
  }else{
    return null
  }
}


export default CreateNews