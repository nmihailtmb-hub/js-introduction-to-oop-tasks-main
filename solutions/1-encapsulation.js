// BEGIN
export const getMutualFriends = (polz1, polz2) => {

  const drugi1 = polz1.getFriends();
  const drugi2 = polz2.getFriends();

  const idDrug2 = drugi2.map(({ id }) => id);

  const obshie = drugi1.filter(({ id }) => idDrug2.includes(id));
  return obshie;
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); 
  },
});