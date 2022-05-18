import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Config } from '../Config'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { onFavItem, isAlreadyFav } from '../Utils/utils';

const DetailContainer = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const [character, setCharacter] = useState({})
  const favs = useSelector(state => state.character.favs)

  useEffect(() => {
    const id = route.params.id
    fetch(Config.API_URL + 'v1/public/characters/' + id + '?ts=1000&hash=' + Config.HASH + '&apikey=' + Config.API_KEY)
      .then(res => res.json())
      .then(json => {
        setCharacter(json.data.results[0])
      })
  }, [])

  const onFav = () => {
    onFavItem(character, favs, dispatch)
  }

  return (
    <>
      {character ?
        <>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ backgroundColor: "black" }}>
            <ImageBackground
              source={{ uri: character.thumbnail?.path + "." + character.thumbnail?.extension }}
              style={{ width: "100%", height: 400 }}>
              <LinearGradient
                colors={['black', 'transparent', 'black']}
                style={styles.gradient} />
            </ImageBackground>

            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 28, color: "white", marginBottom: 15 }}>{character.name}</Text>
              <Text style={{ fontSize: 18, color: "grey" }}>{character.description}</Text>
            </View>

          </ScrollView>
          <View style={styles.heartIconContainer}>
            <TouchableOpacity
              onPress={() => onFav()}
            >
              <FontAwesomeIcon icon={faHeart} size={30} color={isAlreadyFav(character.id, favs)} />
            </TouchableOpacity>
          </View>
        </>
        :
        <Text>Loading... </Text>
      }
    </>
  )
}

const styles = StyleSheet.create({
  backButton: {
    zIndex: 10,
    position: 'absolute',
    top: 20,
    left: 20
  },
  backButtonText: {
    fontSize: 22,
    color: "white",
    width: 50
  },
  heartIconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "grey",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 30,
    padding: 10,
    zIndex: 10,
  },
  gradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
})

export { DetailContainer }
