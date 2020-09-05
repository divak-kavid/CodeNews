import React, { useLayoutEffect, useState, useEffect } from 'react'
import { StatusBar, RefreshControl } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { CardNews } from '../../../components'
import back from '../../../assets/img/back.png'
import * as Style from './style'

function Search({navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Style.TouchHeader
          onPress={() => navigation.goBack(null)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Style.Icon source={back} />
        </Style.TouchHeader>
      )
    });
  }, [navigation])

  const [findNews, setFindNews] = useState('')
  const [dataNews, setDataNews] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const isFocused = useIsFocused()

  const news = useSelector(state => state.news.news)

  function onRefresh() {
    setRefreshing(true)
    setFindNews('')
    setDataNews(news)
    setRefreshing(false)
  }

  useEffect(() => {
    setDataNews(news)
  }, [news])

  if(isFocused){
    StatusBar.setBarStyle('dark-content')
  }

  function filterNews() {
    if(findNews){
      let data = []
      let find = findNews.toLowerCase().trim()

      for (let i = 0; i < news.length; i++) {
        if (news[i].label.toLowerCase().indexOf(find) >= 0){
          data.push(news[i])
        }else if(news[i].description.toLowerCase().indexOf(find) >= 0){
          data.push(news[i])
        }
      }
      setDataNews(data)
    }
  }

  return(
    <Style.Container>
      <Style.ContainLabel>
        <Style.FieldSearch
          placeholder={'Pesquisar...'}
          placeholderTextColor={'black'}
          value={findNews}
          onChangeText={(txt) => setFindNews(txt)}
        />

        <Style.TouchSearch
          onPress={filterNews}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Style.Label>
            Buscar
          </Style.Label>
        </Style.TouchSearch>
      </Style.ContainLabel>

      <Style.FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={dataNews}
        refreshControl={
          <RefreshControl
            colors={["#B3D7FD"]}
            tintColor={'#B3D7FD'}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item}) => (
          <CardNews 
            _data={item}
            _permissionSetting={true}
            _navigate={() => navigation.navigate('UpdateNews', {data: item})}
          />
        )}
        ItemSeparatorComponent={() => <Style.Sepatator />}
        ListEmptyComponent={() => <Style.LabelEmpty>Sem registro.</Style.LabelEmpty>}
      />
    </Style.Container>
  )
}

export default Search