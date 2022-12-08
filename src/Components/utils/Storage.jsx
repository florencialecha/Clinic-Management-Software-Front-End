export const addFav = ({id, name, username}) => {
    let favs = JSON.parse(localStorage.getItem('Dentist'));
    if (!favs) {
      favs = [];
    }

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