export const getFavs = () => {
  let favs = JSON.parse(localStorage.getItem('Dentist'));
  if (!favs) {
    favs = [];
  }

  return favs;
}

export const addFav = ({id, name, username}) => {
  let favs = getFavs();

  const inFavs = favs.find((fav) => id === fav.id);
  if (inFavs) return;

  favs.push({
    id: id,
    name: name,
    username: username
  });
  localStorage.setItem('Dentist', JSON.stringify(favs));

  console.log(favs);
}