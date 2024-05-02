/**
 *
 * @param {Array} list An array of film objects
 * @param {string} director The name of the director
 */

export function filterFilmsByDirector(list, director) {
  if (director == "") {
    return list;
  }
  return list.filter((element) => {
    return element.director == director;
  });
}
/**
 *
 * @param {Array} list An array of object
 * @param {string} prop Some property on the object
 */
export function getListOf(list, prop) {
  const resultArr = [];
  for (let i = 0; i < list.length; i++) {
    if (!resultArr.includes(list[i][prop])) {
      resultArr.push(list[i][prop]);
    }
  }
  return resultArr;
}

// export{
//     filterFilmsByDirector,
//     getListOf
// }
