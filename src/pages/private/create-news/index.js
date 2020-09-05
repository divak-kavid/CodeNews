import React, {useState} from 'react'
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, FieldSelect, Select } from '../../../components'
import * as Style from './style'

function CreateNews({navigation}) {

  const [showModalSelect, setShowModalSelect] = useState(false)
  const [label, setLabel] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const isFocused = useIsFocused()

  const authors = useSelector(state => state.authors.authors)
  const dispatch = useDispatch()

  if(isFocused && Platform.OS === "android"){
    StatusBar.setBarStyle('light-content')
  }

  function createNews() {
    if(label && author && description) {
      dispatch({
        type: 'SET_NEWS',
        payload: {
          label,
          description,
          keyAuthor: author.key,
          nameAuthor:  author.name
        }
      })
      cleanFields({value: 'general'})
      setShowAlert(true)
    }else{
      setMessage('Verifique os campo!')
    }
  }

  function cleanFields({value}) {
    if(value === 'author'){
      setAuthor('')
    }else{
      setLabel('')
      setAuthor('')
      setDescription('')
      setMessage('')
    }
  }

  return(
    <Style.Container>

      <Style.Indicator />

      <Style.HeaderLabel>
        Crie uma nova notícia
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
            _navigate={() => {navigation.navigate('Author'), cleanFields({value: 'author'})}}
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
      
      <Style.Button onPress={createNews}>
        <Style.Label _size={17} _color={'#029000'}>
          Cadastrar
        </Style.Label>
      </Style.Button>

      <Select
        _controller={showModalSelect}
        _onClose={() => setShowModalSelect(false)}
        _onSelect={(value) => setAuthor(value)}
        _data={authors}
      />

      <Alert
        _label={'Cadastro realizado com sucesso!'}
        _onClose={() => setShowAlert(false)}
        _showAlert={showAlert}
      />
      
    </Style.Container>
  )

}


export default CreateNews