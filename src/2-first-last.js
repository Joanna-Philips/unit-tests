export const firstLast = (items) => {
  if(items.length === 0) {
    return 'No items!'
  } else if(items.length === 1) {
    return (`Only item: ${items}`)
  } else {
    return (`First: ${items[0]}, Last: ${items[items.length-1]}`)
  } 
}
