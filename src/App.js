import React, { useState } from "react";
import "./App.css";

// var userName = prompt("Gimme your name");
const emojiDictionary = {
  "🥳": "Happy",
  "😂": "Laughing",
  "😔": "Sad",
  "😵": "Confused",
  "❤️": "Love",
  "👍": "Thumbs up",
  "🤔": "Thinking",
  "😭": "Crying",
  "😱": "Amazement",
  "🤗": "Hug",
  "😡": "Angry",
  "😑": "Disappointment",
  "😉": "Winking",
  "🤪": "Zany Face",
  "🤑": "Money-Mouth Face",
  "😏": "Smirking Face",
  "😪": "Sleepy Face"

};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "undefined";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input
        className="inputEmo"
        placeholder="Enter your emoji here"
        onChange={emojiInputHandler}
      ></input>

      <h2>
        Meaning <span style={{ color: "blue" }}>{meaning}</span>{" "}
      </h2>

      <h3>Emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
