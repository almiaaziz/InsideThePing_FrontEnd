export const layers = [
  // Layer 1: Application Layer
  {
    id: "1",
    name: "Application Layer",
    background: "/public/assets/videos/layers/ApplicationLayer.mp4",

    intro: {
      type: "scenes",
      scenes: [
        {
          text: "Welcome, I'm PACKET, your guide through the network.",
          visual: "packet_v2",
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
              visual: "packet_v1",
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
              visual: "packet_v3",
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
              text: "Each protocol answers a different need. So the real question is not which protocol exists but what do I want to do?",
              visual: "packet_v4",
            },
            {
              text: "Now it's your turn to pick the right one.",
              visual: "packet_v1",
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
              text: "Good choice. You selected the right protocol. Now the server is ready to understand your request",
              visual: "packet_v3",
            },

            {
              text: "But there's still one problem. You can't just send ideas. You must send a properly structured message.",
              visual: "raw-data",
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
  // Layer 2: Transport Layer
  {
    id: "2",
    name: "Transport Layer",
    background: "/public/assets/videos/layers/TransportLayer.mp4",

    intro: {
      type: "scenes",
      scenes: [
        {
          text: "You made it past the Application Layer. Your message is structured, but it cannot travel alone.",
          visual: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "Welcome to the Transport Layer. Here, your data is broken into smaller pieces called segments.",
          visual: "highlight-transport",
        },
        {
          text: "Each segment is tagged so the receiver can rebuild the original message in the correct order.",
          visual: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "This layer also chooses HOW your data will travel: reliably with TCP, or quickly with UDP.",
          visual: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "And it decides WHICH service on the destination should receive it, using ports as doors.",
          visual: "/public/assets/videos/layers/TransportLayer.mp4",
        },
        {
          text: "Get ready. The Transport Layer is where your message starts its real journey across the network.",
          visual: "/public/assets/videos/layers/TransportLayer.mp4",
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
              description: "FTP is for file transfers and runs on top of TCP.",
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
            {
              id: "synack",
              label: "SYN-ACK — Server acknowledges and replies",
            },
            { id: "ack", label: "ACK — Client confirms connection" },
          ],
          answer: ["syn", "synack", "ack"],
        },
      },
    ],
  },

  // Layer 3: Internet Layer{
  {
    id: "3",
    name: "Internet Layer",
    background: "/public/assets/videos/layers/IPLayer_v2.mp4",

    intro: {
      type: "scenes",
      scenes: [
        {
          text: "Your segment is ready. Now it needs an address — a destination in the vast digital world.",
          visual: "segment-ready",
        },
        {
          text: "Welcome to the Internet Layer. This is where your data gets its global identity.",
          visual: "highlight-internet",
        },
        {
          text: "Think of this layer like the postal system of the internet. Every device needs an address, and every packet needs a route.",
          visual: "postal-system",
        },
        {
          text: "Here, your segment is wrapped inside a Packet. The packet contains the source and destination IP addresses.",
          visual: "segment-to-packet",
        },
        {
          text: "With this address, your data can now be routed across thousands of networks to reach the game server.",
          visual: "routing-overview",
        },
      ],
    },

    topics: [
      {
        id: "1",
        title: "IP Addressing",
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Every device connected to a network has an IP address.",
              visual: "devices-ip",
            },
            {
              text: "IP stands for Internet Protocol. The address tells the network exactly where a device is located.",
              visual: "ip-location",
            },
            {
              text: "An IPv4 address looks like this: 192.168.1.10",
              visual: "ipv4-format",
            },
            {
              text: "It is made of 4 numbers separated by dots. Each number is between 0 and 255.",
              visual: "ipv4-structure",
            },
            {
              text: "Under the surface, each number is stored as 8 binary digits — called an octet.",
              visual: "binary-octet",
            },
            {
              text: "For example, 192 in binary is: 11000000",
              visual: "binary-example",
            },
            {
              text: "Understanding binary helps you read IP addresses at the machine level — the language computers actually use.",
              visual: "binary-purpose",
            },
          ],
        },
        mission: {
          type: "quiz",
          title: "Convert to binary",
          question: "What is the binary representation of the number 10?",
          options: [
            {
              id: "correct",
              label: "00001010",
              description: "Correct! 10 in binary is 00001010. (8 + 2 = 10 ✓)",
            },
            {
              id: "wrong1",
              label: "00001100",
              description: "Incorrect. 00001100 equals 12, not 10.",
            },
            {
              id: "wrong2",
              label: "00000111",
              description: "Incorrect. 00000111 equals 7, not 10.",
            },
            {
              id: "wrong3",
              label: "00010000",
              description: "Incorrect. 00010000 equals 16, not 10.",
            },
          ],
          answer: "correct",
        },
      },

      {
        id: "2",
        title: "Subnet Mask",
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "An IP address alone is not enough. You also need to know which part identifies the network.",
              visual: "network-vs-host",
            },
            {
              text: "That is the role of the subnet mask.",
              visual: "subnet-intro",
            },
            {
              text: "The subnet mask looks similar to an IP address: for example, 255.255.255.0",
              visual: "subnet-format",
            },
            {
              text: "Where the subnet mask has 255, that part of the IP address identifies the network.",
              visual: "subnet-network-part",
            },
            {
              text: "Where the subnet mask has 0, that part identifies the specific device on the network.",
              visual: "subnet-host-part",
            },
            {
              text: "For example: IP 192.168.1.10 with mask 255.255.255.0 means the network is 192.168.1 and the device is number 10.",
              visual: "subnet-example",
            },
            {
              text: "The subnet mask helps your device decide: is the destination on my local network, or do I need to go through the router?",
              visual: "local-or-remote",
            },
          ],
        },
        mission: {
          type: "quiz",
          title: "Identify the network address",
          question:
            "A device has IP address 192.168.1.45 and subnet mask 255.255.255.0. What is its network address?",
          options: [
            {
              id: "correct",
              label: "192.168.1.0",
              description:
                "Correct! The last octet becomes 0 because the mask is 0 there. The network is 192.168.1.0",
            },
            {
              id: "wrong1",
              label: "192.168.0.0",
              description:
                "Incorrect. The third octet is 1, not 0. Check the mask again.",
            },
            {
              id: "wrong2",
              label: "192.168.1.45",
              description:
                "Incorrect. That is the full device address, not the network address.",
            },
            {
              id: "wrong3",
              label: "255.255.255.0",
              description:
                "Incorrect. That is the subnet mask itself, not the network address.",
            },
          ],
          answer: "correct",
        },
      },

      {
        id: "3",
        title: "Routing Decision",
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Now that your packet has an IP address and a subnet mask, your device must make a decision.",
              visual: "routing-decision",
            },
            {
              text: "Is the destination on the same local network? Or is it somewhere else on the internet?",
              visual: "same-or-different",
            },
            {
              text: "If the destination is on the same local network, the packet is delivered directly.",
              visual: "local-delivery",
            },
            {
              text: "If the destination is on a different network, the packet must be sent to the gateway.",
              visual: "gateway-needed",
            },
            {
              text: "The gateway is usually your router. It knows how to forward packets outside your local network.",
              visual: "router-gateway",
            },
            {
              text: "The router reads the destination IP address and consults its routing table to decide where to send the packet next.",
              visual: "routing-table-preview",
            },
            {
              text: "This process repeats at each router along the path until the packet reaches its destination.",
              visual: "hop-by-hop",
            },
          ],
        },
        mission: {
          type: "order",
          title: "Follow the routing steps",
          question: "Put the routing decision steps in the correct order:",
          items: [
            { id: "step3", label: "Send the packet to the gateway (router)" },
            { id: "step1", label: "Compare destination IP with subnet mask" },
            { id: "step4", label: "Packet arrives at destination network" },
            {
              id: "step2",
              label: "Determine if destination is local or remote",
            },
          ],
          answer: ["step1", "step2", "step3", "step4"],
          successMessage: "Correct! Your packet has been routed successfully.",
          failMessage:
            "Incorrect order. Think about what your device checks first.",
        },
      },
    ],
  },
];
