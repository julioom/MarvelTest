import React from 'react'
import {
  Dimensions,
  Text,
  FlatList,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Components/Item'
import { onFavItem, isAlreadyFav } from '../Utils/utils'

const FavsContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const favs = useSelector(state => state.character.favs)

  const onFav = character => {
    onFavItem(character, favs, dispatch)
  }

  const navigateToDetail = id =>
    navigation.navigate("Detail", { id })

  const { width } = Dimensions.get('window');
  const itemWidth = (width - 20) / 2

  return (
    <>{favs.length ?
      <FlatList
        key={Math.random()}
        numColumns={2}
        keyExtractor={item => item.id}
        data={favs}
        renderItem={(c) =>
          <Item
            title={c.item.name}
            image={c.item.thumbnail?.path + "." + c.item.thumbnail?.extension}
            id={c.item.id}
            color={isAlreadyFav(c.item.id, favs)}
            onClick={() => navigateToDetail(c.item.id)}
            onFav={() => onFav(c.item)}
            style={{ margin: 5, width: itemWidth, height: 160 }} />}
        style={{ backgroundColor: 'black' }}
        horizontal={false}
      />
      : <Text>There isn't any fav character ...</Text>}
    </>
  )
}

export { FavsContainer }
