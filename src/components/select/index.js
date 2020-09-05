import React from 'react'
import * as Style from './style'

export function FieldSelect({_navigate, _openSelect, _label}) {
  return (
    <>
      <Style.Label>
        Autor
      </Style.Label>

      <Style.Select onPress={_openSelect}>
        <Style.Label _weight={'normal'}>
          {_label || 'Selecione...'}
        </Style.Label>
      </Style.Select>

      <Style.TouchAuhor
        onPress={_navigate}
        hitSlop={{ top: 10, bottom: 20, left: 20, right: 10 }}
      >
        <Style.Label _color={'#0064d6'}>
          Gerenciar autores
        </Style.Label>
      </Style.TouchAuhor>
    </>
  )
}

export function Select({_controller, _onClose, _onSelect, _data}) {
  if(_controller){
    return (
      <Style.Background
        underlayColor={'rgba(255, 255, 255, 0.8)'}
        onPress={_onClose}
      >

        <Style.ContainFlatList>
          <Style.FlatList
            data={_data}
            renderItem={({item}) => (
              <Style.CardSelect
                onPress={() => {_onSelect(item), _onClose()}}
              >
                <Style.Label>
                  {item.name}
                </Style.Label>
              </Style.CardSelect>
            )}
            ItemSeparatorComponent={() => <Style.Sepatator />}
            ListEmptyComponent={() => <Style.LabelEmpty>Sua lista de autores está vazia!</Style.LabelEmpty>}
          />
        </Style.ContainFlatList>

      </Style.Background>
    )
  }else{
    return null
  }
}