const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const older = people.some(man => {
 const currentYear = (new Date()).getFullYear();
 return currentYear - man.year >=19});
  console.log(older);
  // Array.prototype.every() // is everyone 19 or older?
const old = people.every(man => {
const currentYear = (new Date()).getFullYear();
return currentYear - man.year >= 19});
console.log(old)
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
const IDchecker = comments.find(comment => comment.id === 823423);
console.log(IDchecker)

  // Array.prototype.findIndex()
  // Find the comment with this ID
const indexID = comments.findIndex(comment => comment.id === 823423);
console.log(indexID)
  // delete the comment with the ID of 823423
//const deletedComment = //comments.splice(1, 1);
//console.log(comments);

const newComments = [
  ...comments.slice(0, indexID),
  ...comments.slice(indexID + 1)
];
console.log(comments);
console.log(newComments);