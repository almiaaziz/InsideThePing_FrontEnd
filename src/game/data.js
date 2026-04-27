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

        // 🆕 Scene 3 — introduce the idea of transformation
        {
          text: "At each layer, your message is transformed and prepared for the next step Which is called Encapsulation.",
          visual: "data-transform",
        },

        // 🆕 Scene 4 — zoom into first layer
        {
          text: "Your journey begins at the Application Layer. Here, your message is prepared: protocol, destination, and structure.",
          visual: "highlight-application",
        },
      ],
    },

    topics: [
      // Topic 1 : Application Protocols
      {
        id: "1",
        title: "Application Protocols",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Let’s focus on one key part of your message: the protocol.",
              visual: "focus-protocol",
            },
            {
              text: "Applications don't send data randomly. They follow specific communication rules which are called protocols.",
              visual: "rules",
            },

            {
              text: `Each one is designed for a specific type of task and using the wrong protocol means your message won't be understood.`,
              visual: "protocol-purpose",
            },

            {
              text: "If you want to open a web page, you use HTTP.",
              visual: "http-web",
            },
            {
              text: "If you want to transfer files, you use FTP.",
              visual: "ftp-transfer",
            },
            {
              text: "If you want to find the address of a website, you use DNS.",
              visual: "dns-lookup",
            },

            {
              text: "Each protocol answers a different need. So the real question is not 'which protocol exists' but 'what do I want to do?",
              visual: "protocol-compare",
            },

            {
              text: "Choose the correct protocol, and your message will move forward.",
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
          ],
          answer: "http",
        },
      },

      // Topic 2 : Message Structure
      {
        id: "2",
        title: "Message Structure",
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Your message is almost ready... but it still needs structure.",
              visual: "raw-data",
            },
            {
              text: "Computers don't understand raw text. They expect data in a precise format.",
              visual: "computer-confused",
            },
            {
              text: "At the Application Layer, your message is organized into a structured request.",
              visual: "structure-build",
            },

            {
              text: "This structure depends on the protocol you chose. For example: HTTP has its own format.",
              visual: "protocol-structure",
            },

            {
              text: "A typical HTTP request has three main parts.",
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
              text: "Once structured, your message is ready to move to the next layer.",
              visual: "to-transport",
            },
          ],
        },

        mission: {
          type: "order",//quiz // match
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

      // Topic3 : Client-Server Communication
      {
        id: "3",
        title: "Client-Server Communication",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Your message is ready and structured. But who are you sending it to?",
              visual: "question-destination",
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
    ],
  },
  {
    id: "2",
    name: "Transport Layer",
    background: "/public/assets/videos/layers/TransportLayer.mp4",

    intro: {
      type: "scenes",
      scenes: [
        {
          text: "You made it past the Application Layer. Your message is structured, but it cannot travel alone.",
          video: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "Welcome to the Transport Layer. Here, your data is broken into smaller pieces called segments.",
          video: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "Each segment is tagged so the receiver can rebuild the original message in the correct order.",
          video: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "This layer also chooses HOW your data will travel: reliably with TCP, or quickly with UDP.",
          video: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "And it decides WHICH service on the destination should receive it, using ports as doors.",
          video: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "Get ready. The Transport Layer is where your message starts its real journey across the network.",
          video: "/public/assets/videos/layers/TransportLayer.mp4",
        },
      ],
    },

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

      // Topic 2 : Segmentation
      {
        id: "2",
        title: "Segmentation",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Your message might be too big to travel as a single piece.",
              visual: "big-message",
            },
            {
              text: "The Transport Layer breaks it into smaller chunks called segments.",
              visual: "split-segments",
            },
            {
              text: "Each segment is given a sequence number so it can be put back in order.",
              visual: "sequence-numbers",
            },
            {
              text: "Segments may take different paths and arrive out of order.",
              visual: "out-of-order",
            },
            {
              text: "The receiver uses the sequence numbers to reassemble the original message.",
              visual: "reassemble",
            },
            {
              text: "Without segmentation, large messages could not travel reliably across the network.",
              visual: "why-segment",
            },
          ],
        },

        mission: {
          type: "order",
          title: "Reassemble the message",
          question:
            "Arrange these segments in the correct order to rebuild the original message.",
          items: [
            { id: "seg1", label: "Segment #1 — 'HELLO '" },
            { id: "seg2", label: "Segment #2 — 'FROM '" },
            { id: "seg3", label: "Segment #3 — 'THE '" },
            { id: "seg4", label: "Segment #4 — 'NETWORK'" },
          ],
          answer: ["seg1", "seg2", "seg3", "seg4"],
        },
      },

      // Topic 3 : TCP vs UDP
      {
        id: "3",
        title: "TCP vs UDP",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "The Transport Layer offers two ways to send your data: TCP and UDP.",
              visual: "tcp-udp",
            },
            {
              text: "TCP is reliable. It checks that every segment arrives, and in the right order.",
              visual: "tcp-reliable",
            },
            {
              text: "If a segment is lost, TCP asks the sender to send it again.",
              visual: "tcp-retransmit",
            },
            {
              text: "TCP is used when accuracy matters: web pages, emails, file transfers.",
              visual: "tcp-usecases",
            },
            {
              text: "UDP is fast. It sends data without waiting for confirmation.",
              visual: "udp-fast",
            },
            {
              text: "If a segment is lost, UDP does not resend it.",
              visual: "udp-lossy",
            },
            {
              text: "UDP is used when speed matters more than perfection: live video, voice calls, online games.",
              visual: "udp-usecases",
            },
            {
              text: "Choose the right protocol for the right job.",
              visual: "choose-protocol",
            },
          ],
        },

        mission: {
          type: "quiz",
          title: "Pick the right protocol",
          question:
            "You are designing a live video call app. Which transport protocol should you use?",
          options: [
            {
              id: "tcp",
              label: "TCP",
              description:
                "TCP guarantees delivery, but the delay it adds makes live calls laggy.",
            },
            {
              id: "udp",
              label: "UDP",
              description:
                "Correct. UDP is fast and tolerates a few lost packets, which is perfect for live video.",
            },
            {
              id: "http",
              label: "HTTP",
              description:
                "HTTP is an Application Layer protocol, not a transport one.",
            },
            {
              id: "ftp",
              label: "FTP",
              description:
                "FTP is for file transfers and runs on top of TCP.",
            },
          ],
          answer: "udp",
        },
      },

      // Topic 4 : Three-Way Handshake
      {
        id: "4",
        title: "The Three-Way Handshake",

        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Before TCP sends data, the client and the server must agree to talk.",
              visual: "handshake-intro",
            },
            {
              text: "This agreement is made through a three-step exchange called the Three-Way Handshake.",
              visual: "handshake-steps",
            },
            {
              text: "Step 1 — SYN: the client says 'I want to talk to you'.",
              visual: "syn",
            },
            {
              text: "Step 2 — SYN-ACK: the server replies 'I hear you, and I want to talk too'.",
              visual: "syn-ack",
            },
            {
              text: "Step 3 — ACK: the client confirms 'Great, let's start'.",
              visual: "ack",
            },
            {
              text: "Now the connection is open and segments can flow reliably.",
              visual: "connection-open",
            },
            {
              text: "Without this handshake, TCP could not guarantee a stable connection.",
              visual: "no-handshake",
            },
          ],
        },

        mission: {
          type: "order",
          title: "Establish a TCP connection",
          question:
            "Put the steps of the Three-Way Handshake in the correct order.",
          items: [
            { id: "syn", label: "SYN — Client requests connection" },
            { id: "synack", label: "SYN-ACK — Server acknowledges and replies" },
            { id: "ack", label: "ACK — Client confirms connection" },
          ],
          answer: ["syn", "synack", "ack"],
        },
      },
    ],
  },
];
