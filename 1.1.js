//Declarative
function transformArrayDeclarative(array, transformFunction) {
  return array.map(transformFunction);
}

//Imperative
function transformArrayImperative(array, transformFunction) {
    const transformedArray = [];
    
    for (let i = 0; i < array.length; i++) {
      transformedArray.push(transformFunction(array[i]));
    }
    
    return transformedArray;
  }
  