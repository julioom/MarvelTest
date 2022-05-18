import { addFavAction, removeFavAction } from '../Store/Character'

const onFavItem = (character, favs, dispatch) => {
    if (favs.find(f => f.id === character.id)) {
        dispatch(removeFavAction({ id: character.id }))
    } else {
        dispatch(addFavAction({ character }))
    }
}

const isAlreadyFav = (id, favs) => {
    return favs.find(f => f.id === id) ? "red" : "white"
}

export { onFavItem, isAlreadyFav }