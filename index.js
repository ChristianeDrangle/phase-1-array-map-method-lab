const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
]

const titleCased = () => {
  //iterate through the array
  //create an array of words from each sentence/string
  //uppercase the first index and make map return the word
  return tutorials.map((tutorial) => {
    const wordArray = tutorial.split(" ")
    const capitalizedWords = wordArray.map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    })
    return capitalizedWords.join(" ")
  })
}
console.log(titleCased())
