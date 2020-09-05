import React from 'react'
import * as Style from './style'
import WaveCard from '../../assets/img/wave-card.png';

function CardNews({_data, _permissionSetting, _navigate}) {
  return(
    <Style.Container>
      <ContainerAuthor author={_data.nameAuthor} />

        <Style.Main>
          <Style.Label _size={35}>
            {_data.label}
          </Style.Label>

          <Style.Description>
            {_data.description}
          </Style.Description>
        </Style.Main>

        <Setting 
          _show={_permissionSetting}
          _onPress={_navigate}
        />

        <Style.Background source={WaveCard} />
    </Style.Container>
  )
}

function ContainerAuthor({author}) {
  return (
    <Style.ContainAuthor>
      <Style.TagAuthor>
        <Style.Label>
          Autor
        </Style.Label>
      </Style.TagAuthor>

        <Style.Label>
          {author}
        </Style.Label>
    </Style.ContainAuthor>
  )
}

function Setting({_show, _onPress}) {
  if(_show){
    return (
      <Style.TouchSetting
        onPress={_onPress}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      >
        <Style.Label>
          Editar
        </Style.Label>
      </Style.TouchSetting>
    )
  }else{
    return null
  }
}

export default CardNews