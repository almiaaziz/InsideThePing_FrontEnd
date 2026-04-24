export const layers = [
  {
    id: "1",
    name: "Application Layer",
    background: "/public/assets/videos/layers/ApplicationLayer.mp4",

    intro: {
      type: "video", // or "animation"
      content: "/videos/application-intro.mp4",
      text: "The application layer is where user interaction happens...",
    },

    topics: [
      {
        id: "1",
        title: "Protocols",

        explanation: {
          type: "video", // or "animation"
          content: "/videos/application-intro.mp4",
          text: "The application layer is where user interaction happens...",
        },

        mission: {
          title: "Select the correct protocol",
          type: "quiz",
          question:
            "You need to access a web page. Which protocol should you use to request it from the server?",
          options: ["HTTP", "FTP"],
          answer: "FTP",
        },
      },
    ],
  },
];
