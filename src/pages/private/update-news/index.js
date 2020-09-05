import React, {useState, useEffect} from 'react'
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import { useIsFocused, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, FieldSelect, Select } from '../../../components'
import * as Style from './style'

function UpdateNews({navigation}) {

  useEffect(() => {
    setLabel(params.label)
    setAuthor({
      key: params.keyAuthor,
      name: params.nameAuthor
    })
    setDescription(params.description)
  }, [])

  const [showModalSelect, setShowModalSelect] = useState(false)
  const [label, setLabel] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const isFocused = useIsFocused()
  const params = useRoute().params.data

  const authors = useSelector(state => state.authors.authors)
  const dispatch = useDispatch()

  if(isFocused && Platform.OS === "android"){
    StatusBar.setBarStyle('light-content')
  }

  function editNews() {
    if(label && author && description) {
      if(
        label === params.label 
        && author.key === params.keyAuthor 
        && description === params.description
      ){
        setMessage('Você não vez nenhuma alteração!')
      }else{
        dispatch({
          type: 'UPDATE_NEWS',
          payload: {
            key: params.key,
            label,
            description,
            keyAuthor: author.key,
            nameAuthor:  author.name
          }
        })
        setShowAlert(true)
        setMessage('')
      }
      
    }else{
      setMessage('Verifique os campo!')
    }
  }

  function removeNews() {
    dispatch({
      type: 'DELETE_NEWS',
      payload: {
        key: params.key
      }
    })
    navigation.goBack(null)
  }

  function cleanField() {
    setAuthor('')
  }

  return(
    <Style.Container>

      <Style.Indicator />

      <Style.HeaderLabel>
        Informações da notícia
      </Style.HeaderLabel>

      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Style.ContainForm>
          <Style.Label>
            Título da notícia
          </Style.Label>

          <Style.Field
            value={label}
            onChangeText={(txt) => setLabel(txt)}
          />

          <FieldSelect
            _navigate={() => {navigation.navigate('Author'), cleanField()}}
            _openSelect={() => setShowModalSelect(true)}
            _label={author.name}
          />

          <Style.Label>
            Descrição da notícia
          </Style.Label>

          <Style.ExtendField
            value={description}
            onChangeText={(txt) => setDescription(txt)}
            multiline={true}
          />

          <Style.Label 
            _color={'#900000'}
          >
            {message}
          </Style.Label>
        </Style.ContainForm>
      </KeyboardAvoidingView>

      <Buttons
        _onEdit={editNews}
        _onDelete={removeNews}
      />

      <Select
        _controller={showModalSelect}
        _onClose={() => setShowModalSelect(false)}
        _onSelect={(value) => setAuthor(value)}
        _data={authors}
      />

      <Alert
        _label={'Edição realizada com sucesso!'}
        _onClose={() => setShowAlert(false)}
        _showAlert={showAlert}
      />

    </Style.Container>
  )

}

function Buttons({_onEdit, _onDelete}) {
  return (
    <>
      <Style.Button _color={'rgba(0, 13, 144, 0.1)'} onPress={_onEdit}>
        <Style.Label _size={17} _color={'#000d90'}>
          Editar
        </Style.Label>
      </Style.Button>

      <Style.Button _color={'rgba(144, 0, 0, 0.1)'} onPress={_onDelete}>
        <Style.Label _size={17} _color={'#900000'}>
          Apagar
        </Style.Label>
      </Style.Button>
    </>
  )
}


export default UpdateNews