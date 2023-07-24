function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let i of friends) {
    let li = document.createElement('li');
    li.textContent = `${i.firstName} ${i.lastName}`;
    ul.append(li);
  }
  return ul;
}
