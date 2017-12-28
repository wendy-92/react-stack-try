export default function makeActionCreator(type, ...argNames){
  return function(...args){
      let action = {type}
      argNames.map((argName, index) => {
          action[argName] = args[index]
      })
      return action;
  }
}