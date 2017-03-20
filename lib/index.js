function apply({
  fn,
  props: propNamesInOrder = fn.toString()
    .replace( /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, "$1$2$3" )
    .split( /\s*,\s*/ )
    .map( v => v.replace( /[=\s].*$/, "" ) )
}) {
  return function appliedFn(argsObj) {
    return fn( ...propNamesInOrder.map( function getPropVal(k) { return argsObj[k]; } ) );
  };
}
  
module.exports = apply;
