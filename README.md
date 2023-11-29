# beyefendi

Library Purpose: Bad Word Checker

The library serves to:

Check for Bad Words (Boolean):
Determine whether a given text contains any predefined bad words.
Censor Bad Words:
Optionally replace identified bad words in a text with asterisks or another specified character.
The goal is to offer a tool for identifying and handling potentially inappropriate language within textual content.

## Installation

    
    npm i beyefendi
    

## Usage



```javascript
import {checkFill} from "beyefendi"


const isHaveBad = checkFill({text:"word1"}) // return true
const filteredText = checkFill({text:"word1",returnType:1})  // return '*****'
const filteredOptions = checkFill({text:"word1",addWords:["word5,word6"],deleteWords:["word1","word2"]}) // return false
  ```

```javascript
// defaultWords.js
export const defaultWords = ["word1", "word2", "word3"]; //  You can also write new words into the default Words array.
 ```
