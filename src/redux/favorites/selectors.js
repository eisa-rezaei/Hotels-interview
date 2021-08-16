const getFavorites = (store) => store.favorites.favorites;

const isItemFavotrie = (id) => (store) => {
  return store.favorites.favorites.some((item) => item.id === id);
};

const selectros = {
  isItemFavotrie,
  getFavorites,
};

export default selectros;
