import React, { useEffect } from 'react'
import {
  Text,
  FlatList,
  Dimensions
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Config } from '../Config'
import { fetchAllAction } from '../Store/Character'
import Item from '../Components/Item'
import { onFavItem, isAlreadyFav } from '../Utils/utils'

const HomeContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.character.characters)
  const favs = useSelector(state => state.character.favs)

  useEffect(() => {
    fetch(Config.API_URL + 'v1/public/characters?ts=1000&hash=' + Config.HASH + '&apikey=' + Config.API_KEY)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAllAction({ characters: json.data.results }))
      })
  }, [])

  const navigateToDetail = id =>
    navigation.navigate("Detail", { id })


  const onFav = character => {
    onFavItem(character, favs, dispatch)
  }

  const { width } = Dimensions.get('window');
  const itemWidth = (width - 20) / 3

  return (
    <>{characters.length ?
      <FlatList
        key={Math.random()}
        numColumns={3}
        keyExtractor={item => item.id}
        data={characters}
        renderItem={(c) =>
          <Item
            title={c.item.name}
            image={c.item.thumbnail?.path + "." + c.item.thumbnail?.extension}
            id={c.item.id}
            color={isAlreadyFav(c.item.id, favs)}
            onClick={() => navigateToDetail(c.item.id)}
            onFav={() => onFav(c.item)}
            style={{ margin: 5, width: itemWidth, height: 140 }} />}
        style={{ backgroundColor: 'black' }}
      />
      : <Text>Loading ...</Text>}
    </>
  )
}

export { HomeContainer }