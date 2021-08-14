const getFavorites = (store) => store.favorites.favorites;

const isItemFavotrie = (id) => (store) => {
  return store.favorites.favorites.some((item) => item.id === id);
};

export default { isItemFavotrie, getFavorites };
