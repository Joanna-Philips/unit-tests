export const hackerSpeak = (words) => {
  let newWords=''
   const replacements = {'a':4,'e':3,'i':1,'o':0,'s':5,'A':4,'E':3,'I':1,'O':0,'S':5}
   // iterate through the replacement object
   for (const [key, value] of Object.entries(replacements)) {
    newWords = words.replaceAll(key, value)
  }
  return newWords

}