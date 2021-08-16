const getSaved = (store) => store.saved.saved;

const isItemSaved = (id) => (store) => {
  return store.saved.saved.some((item) => item.id === id);
};

const selectros = {
  isItemSaved,
  getSaved,
};

export default selectros;
