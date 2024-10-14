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
    // Repeat for other lectures, up to Lecture 4
  ];
  