const keysAndValues = (obj) => {
  
  if(Object.keys(obj) === 0) {
    return [];
  }

  let multiArray = [];
  
  multiArray.push(Object.keys(obj));
  multiArray.push(Object.values(obj));
  
  return multiArray;
}

keysAndValues({ a: 1, b: 2, c: 3 });


/* keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]] */