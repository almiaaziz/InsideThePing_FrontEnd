export const layers = [
  {
    id: "1",
    name: "Application Layer",
    background: "/public/assets/videos/layers/ApplicationLayer.mp4",

    intro: {
      type: "scenes",
      scenes: [
        {
          text: "Welcome, I'm PACKET, your guide through the network.",
          visual: "welcome-packet",
        },
        {
          text: "You are trapped inside your computer. To escape, you must send a ping to the game server.",
          visual: "pc-to-server",
        },
        {
          text: "But your data cannot travel directly. It must pass through multiple layers inside your system.",
          visual: "layer-stack",
        },

        {
          text: "At each layer, your message is transformed and prepared for the next step and that is called encapsulation.",
          visual: "data-transform",
        },

        {
          text: "Your journey begins at the Application Layer. Here, your message is prepared: destination, protocol and structure.",
          visual: "highlight-application",
        },
        {
          text: "But before choosing a protocol or building your message... you need to answer one simple question.",
          visual: "pause-focus",
        },
        {
          text: "Who are you actually trying to reach?",
          visual: "question-destination",
        },
        {
          text: "Every journey needs a destination. In networking, that means understanding who sends and who receives.",
          visual: "client-server-intro",
        },
      ],
    },

    topics: [
      // Topic1 : Client-Server Communication
      {
        id: "1",
        title: "Client-Server Communication",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "To answer that, you need to understand how communication works in a network.",
              visual: "client-server",
            },
            {
              text: "In networking, communication happens between two roles: a client and a server.",
              visual: "client-server",
            },
            {
              text: "The client is the one who sends a request.",
              visual: "client-request",
            },
            {
              text: "The server is the one who receives the request and responds.",
              visual: "server-response",
            },
            {
              text: "Every time you open a website, your computer acts as a client. And the website you contact is a server.",
              visual: "client-server-example",
            },
            {
              text: "The client sends a request using a protocol like HTTP. And the server processes it and sends back a response.",
              visual: "request-flow",
            },

            {
              text: "This exchange is called a request-response cycle.",
              visual: "cycle",
            },
            {
              text: "Understanding this flow is key before your message moves deeper into the network.",
              visual: "to-transport",
            },
            {
              text: "Now you know your role. You are the client. And your message has a destination: the server.",
              visual: "client-ready",
            },
            {
              text: "But sending a message isn't enough. The server must understand what you're saying.",
              visual: "server-confused",
            },
            {
              text: "If you don't follow the right rules, your message will be ignored.",
              visual: "invalid-communication",
            },
            {
              text: "Let's make sure you understand your role before moving forward.",
              visual: "decision",
            },
          ],
        },

        mission: {
          type: "quiz",
          title: "Identify the roles",
          question: "When you open a website, what is your computer?",
          options: [
            {
              id: "client",
              label: "Client",
              description: "Correct. Your computer initiates the request.",
            },
            {
              id: "server",
              label: "Server",
              description: "Incorrect. The server responds to requests.",
            },
            {
              id: "router",
              label: "Router",
              description:
                "Incorrect. Routers forward packets between networks.",
            },
            {
              id: "switch",
              label: "Switch",
              description:
                "Incorrect. Switches connect devices in a local network.",
            },
          ],
          answer: "client",
        },
      },

      // Topic 2 : Application Protocols
      {
        id: "2",
        title: "Application Protocols",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Good. Now that you know who you're communicating with, it's time to decide how.",
              visual: "focus-protocol",
            },
            {
              text: "Applications don't send data randomly. They follow specific communication rules called protocols.",
              visual: "rules",
            },

            {
              text: `Each one is designed for a specific type of task and using the wrong protocol means your message won't be understood.`,
              visual: "protocol-purpose",
            },

            {
              text: "If you want to open a web page, you use HTTP (Hypertext Transfer Protocol).",
              visual: "http-web",
            },
            {
              text: "If you want to transfer files, you use FTP (File Transfer Protocol).",
              visual: "ftp-transfer",
            },
            {
              text: "If you want to send an email, you use SMTP (Simple Mail Transfer Protocol).",
              visual: "smtp-email",
            },

            {
              text: "Each protocol answers a different need. So the real question is not 'which protocol exists' but 'what do I want to do?'",
              visual: "think-purpose",
            },
            {
              text: "Choose the correct protocol, and your message will be understood.",
              visual: "decision",
            },
            {
              text: "Now it's your turn to pick the right one.",
              visual: "decision",
            },
          ],
        },

        mission: {
          type: "quiz",
          title: "Select the right protocol",
          question: "You want to open a web page. Which protocol do you use?",
          options: [
            {
              id: "smtp",
              label: "SMTP",
              description: "SMTP is used for sending emails, not web browsing.",
            },

            {
              id: "http",
              label: "HTTP",
              description: "HTTP is used for web communication",
            },
            {
              id: "ftp",
              label: "FTP",
              description: "FTP is used for file transfer, not web browsing.",
            },
            {
              id: "dns",
              label: "DNS",
              description:
                "DNS is used to resolve domain names, not web browsing.",
            },
            {
              id: "dhcp",
              label: "DHCP",
              description:
                "DHCP is used to assign IP addresses, not web browsing.",
            },
            {
              id: "ssh",
              label: "SSH",
              description:
                "SSH is used for secure remote access to machines, not web browsing.",
            },
          ],
          answer: "http",
        },
      },

      // Topic 3 : Message Structure
      {
        id: "3",
        title: "Message Structure",
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Good choice. You selected the right protocol.",
              visual: "raw-data",
            },
            {
              text: "Now the server is ready to understand your request...",
              visual: "computer-confused",
            },
            {
              text: "But there's still one problem.",
              visual: "structure-build",
            },
            {
              text: "You can't just send ideas. You must send a properly structured message.",
              visual: "structure-build",
            },
            {
              text: "Computers don't understand raw text. They expect data in a precise format.",
              visual: "computer-confused",
            },
            {
              text: "At the Application Layer, your message is organized into a structured request based on the protocol you chose.",
              visual: "structure-build",
            },

            {
              text: "For example: A typical HTTP request has three main parts.",
              visual: "http-overview",
            },

            {
              text: "First: the METHOD. It tells what you want to do (GET, POST...).",
              visual: "method",
            },
            {
              text: "Second: the HEADERS. They carry additional information about your request.",
              visual: "headers",
            },
            {
              text: "Third: the BODY. It contains the actual data you want to send.",
              visual: "body",
            },

            {
              text: "Without this structure, the server cannot understand your message.",
              visual: "invalid-request",
            },
            {
              text: "A well-structured request ensures your message is correctly processed.",
              visual: "valid-request",
            },
            {
              text: "Perfect. Your message is now complete.",
              visual: "message-complete",
            },
            {
              text: "You chose the right protocol. You built a valid request. And you know exactly where it's going.",
              visual: "recap",
            },
            {
              text: "Now it's time to send it.",
              visual: "send-button",
            },
            {
              text: "The next layer will take your message deeper into the network...",
              visual: "descend-layer",
            },
          ],
        },

        mission: {
          type: "order", //quiz // match
          title: "Build a valid HTTP request",
          question:
            "Arrange the parts of an HTTP request in the correct order.",
          items: [
            { id: "method", label: "Method (GET / POST)" },
            { id: "headers", label: "Headers" },
            { id: "body", label: "Body" },
          ],
          answer: ["method", "headers", "body"],
        },
      },
    ],
  },
  {
    id: "2",
    name: "Transport Layer",
    background: "/public/assets/videos/layers/TransportLayer.mp4",

    // 📚 TOPICS
    topics: [
      {
        id: "1",
        title: "Ports",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "A computer can run multiple services at the same time.",
              visual: "multiple-services",
            },
            {
              text: "Ports act like doors for these services.",
              visual: "doors",
            },
            {
              text: "Each protocol uses a specific port.",
              visual: "port-mapping",
            },
            {
              text: "HTTP uses port 80.",
              visual: "port-80",
            },
            {
              text: "FTP uses port 21.",
              visual: "port-21",
            },
            {
              text: "Choosing the correct port ensures your message reaches the right service.",
              visual: "correct-door",
            },
          ],
        },
        mission: {
          type: "match",
          title: "Match protocol to port",
          question: "Connect each protocol to its correct port.",
          left: [
            { id: "http", label: "HTTP" },
            { id: "ftp", label: "FTP" },
            { id: "dns", label: "DNS" },
          ],
          right: [
            { id: "80", label: "80" },
            { id: "21", label: "21" },
            { id: "53", label: "53" },
          ],
          answer: {
            http: "80",
            ftp: "21",
            dns: "53",
          },
        },
      },
    ],
  },
];
