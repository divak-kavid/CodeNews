import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { CardNews } from '../../../components'
import back from '../../../assets/img/back.png'
import add from '../../../assets/img/add.png'
import search from '../../../assets/img/search.png'
import * as Style from './style'

function General({navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Style.TouchHeader
          onPress={() => navigation.navigate('CreateNews')}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Style.Icon source={add} />
        </Style.TouchHeader>
      )
    });
  }, [navigation])

  const isFocused = useIsFocused()

  const news = useSelector(state => state.news.news)

  if(isFocused){
    StatusBar.setBarStyle('dark-content')
  }

  return(
    <Style.Container>
      <Style.ContainLabel>
        <Style.Label>
          Histórico de postagem
        </Style.Label>

        <Style.TouchSearch
          onPress={() => navigation.navigate('Search')}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Style.Icon source={search} />
        </Style.TouchSearch>
      </Style.ContainLabel>

      <Style.FlatList
        contentContainerStyle={{
          paddingBottom: 100
        }}
        data={news}
        renderItem={({item}) => (
          <CardNews 
            _data={item} 
            _permissionSetting={true}
            _navigate={() => navigation.navigate('UpdateNews', {data: item})}
          />
        )}
        ItemSeparatorComponent={() => <Style.Sepatator />}
        ListEmptyComponent={() => <Style.LabelEmpty>Você não possui nenhuma postagem.</Style.LabelEmpty>}
      />
    </Style.Container>
  )
}

export default General