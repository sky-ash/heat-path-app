export const lessons = [
    {
      id: 1,
      title: "Lecture 1",
      cards: [
        "Das ist die erste Karteikarte der ersten Lehreinheit.",
        "Und hier Karte Nr. 2. Lies dir diese Karten durch bis du sie verstehst.",
        "Hast du alle Karten verstanden? Dann klicke auf 'Mark Completed', um das Quiz freizuschalten!",
      ],
      quiz: [
        {
          question: "Hast du alle Karten verstanden?",
          options: ["Nein", "Ja klar!", "Welche Karten?"],
          answer: "Ja klar!",
        },
        {
          question: "Wenn du alle Fragen richtig beantwortest wird die Lecture als erledigt markiert.",
          options: ["Richtige Antwort", "Option B", "Option C", "Option D"],
          answer: "Richtige Antwort",
        },
      ],
    },
    {
      id: 2,
      title: "Lecture 2",
      cards: [
        "2-1 x",
        "2-2 xx",
        "2-3 xxx",
      ],
      quiz: [
        {
          question: "q1",
          options: ["a1", "a2", "a3 (r)"],
          answer: "a3 (r)",
        },
        {
          question: "question 2.",
          options: ["Richtige Antwort", "andere antwort"],
          answer: "Richtige Antwort",
        },
        {
          question: "and a 3rd",
          options: ["correct", "wrong", "wrong again", "nuh-uh"],
          answer: "correct",
        },
      ],
    },
    {
      id: 3,
      title: "Lecture 3",
      cards: [
        "lecture 3 card 1",
        "L3 C2",
        "L3 C3",
        "L3 C4",
      ],
      quiz: [
        {
          question: "only one question?",
          options: ["this is the correct answer", "nah", "nope", "nada"],
          answer: "this is the correct answer",
        },
      ],
    },
    {
      id: 4,
      title: "Lecture 4",
      cards: [
        "LAST LECTURE! This is a card",
        "lorem ipsum",
        "ipsum schmipsum",
        "here, more cards to click through: 4-4",
        "ABC",
        "XYZ",
      ],
      quiz: [
        {
          question: "This is the first question of the last lecture.",
          options: ["Y", "N"],
          answer: "Y",
        },
        {
          question: "How many lectures were there?",
          options: ["1", "2", "3", "4"],
          answer: "4",
        },
      ],
    },
  ];
  