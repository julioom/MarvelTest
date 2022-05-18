import React from 'react'
import { Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient';

const Item = ({ title, image, style, color, onClick, onFav }) => {

  return (
    <ImageBackground source={{ uri: image }} style={style}>
      <LinearGradient
        colors={['black', 'transparent', 'black']}
        style={styles.gradient}>
        <TouchableOpacity onPress={onClick} style={styles.view}>
          <TouchableOpacity
            onPress={onFav}
            style={styles.heartIconContainer}
          >
            <FontAwesomeIcon icon={faHeart} size={30} style={styles.heartIcon} color={color} />
          </TouchableOpacity>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  heartIconContainer: {
    position: "absolute",
    right: 8,
    top: 5,
    alignItems: "flex-end",
    zIndex: 5
  },
  view: {
    height: "100%",
    width: "100%"
  },
  text: {
    color: 'white',
    fontSize: 14,
    height: "100%",
    width: "100%",
    textAlignVertical: "bottom"
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

export default Item
