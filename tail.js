// tail function should return an array without the first element.

const tail = function(arrTail) {
  let arrSliced = arrTail.slice(1);
  return arrSliced;
};

module.exports = tail;