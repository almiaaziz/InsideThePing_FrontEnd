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
          text: "You made it past the Application Layer...",
          visual: "packet_v1", 
        },
        {
          text: "Welcome to the Transport Layer...",
          visual: "highlight-transport", 
        },
        {
          text: "Each segment is tagged so the receiver can rebuild...",
          visual: "transport-intro-3",
        },
        {
          text: "This layer also chooses HOW your data will travel...",
          visual: "transport-intro-4", 
        },
        {
          text: "And it decides WHICH service on the destination...",
          visual: "transport-intro-5", 
        },
        {
          text: "Get ready. The Transport Layer is where...",
          visual: "transport-intro-6", 
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

  // Layer 4: Network Access Layer
  {
    id: "4",
    name: "Network Access Layer",
    background: "/public/assets/videos/layers/NetworkLayer_v1.mp4",
 
    intro: {
      type: "scenes",
      scenes: [
        {
          text: "Your packet has an IP address. It knows where it's going. But there's one final challenge.",
          visual: "packet-ready",
        },
        {
          text: "Welcome to the Network Access Layer — the deepest layer of your journey.",
          visual: "highlight-network-access",
        },
        {
          text: "This is where your data finally touches the physical world: cables, wireless signals, and hardware.",
          visual: "physical-world",
        },
        {
          text: "At this layer, your packet is wrapped into a Frame — the unit of data that travels between devices on the same local network.",
          visual: "packet-to-frame",
        },
        {
          text: "But the Internet Layer works with IP addresses. The Network Access Layer works with something different: MAC addresses.",
          visual: "ip-vs-mac",
        },
        {
          text: "A MAC address is the unique physical identity of every network card — burned into the hardware at the factory.",
          visual: "mac-identity",
        },
        {
          text: "Think of it this way: the IP address is like a postal address. The MAC address is like the name on the door.",
          visual: "ip-mac-analogy",
        },
        {
          text: "To deliver your frame to the right device, the network needs to know the MAC address of the next stop.",
          visual: "next-hop-mac",
        },
        {
          text: "That is the job of ARP — it translates IP addresses into MAC addresses so frames can be delivered.",
          visual: "arp-bridge",
        },
        {
          text: "And once the frame is on the wire, a device called a switch decides which port to send it to — using MAC addresses, not IP.",
          visual: "switch-decision",
        },
        {
          text: "This is the final frontier before your data becomes electrical signals or radio waves.",
          visual: "final-frontier",
        },
        {
          text: "Let's go deeper. Your frame is almost ready to travel.",
          visual: "packet_v2",
        },
      ],
    },
 
    topics: [
      // Topic 1: MAC Addresses
      {
        id: "1",
        title: "MAC Addresses",
 
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Every device that connects to a network has a network card — also called a NIC (Network Interface Card).",
              visual: "nic-intro",
            },
            {
              text: "Each NIC has a unique identifier permanently assigned at the factory: the MAC address.",
              visual: "mac-factory",
            },
            {
              text: "MAC stands for Media Access Control. It is the physical address of your hardware.",
              visual: "mac-meaning",
            },
            {
              text: "A MAC address looks like this: 00:1A:2B:3C:4D:5E",
              visual: "mac-format",
            },
            {
              text: "It is made of 6 groups of 2 hexadecimal digits, separated by colons.",
              visual: "mac-structure",
            },
            {
              text: "The first 3 groups identify the manufacturer. The last 3 groups identify the specific device.",
              visual: "mac-oui-device",
            },
            {
              text: "Unlike IP addresses, MAC addresses do not change. They are fixed to the hardware.",
              visual: "mac-fixed",
            },
            {
              text: "MAC addresses only work within a local network. They are not used to route data across the internet.",
              visual: "mac-local-scope",
            },
            {
              text: "That is why both IP and MAC addresses are needed: IP for global routing, MAC for local delivery.",
              visual: "mac-ip-together",
            },
            {
              text: "Now you know the physical identity of every device. But how does the network find the right MAC address?",
              visual: "packet_v1",
            },
          ],
        },
 
        mission: {
          type: "quiz",
          title: "Identify the MAC address",
          question: "Which of the following is a valid MAC address?",
          options: [
            {
              id: "correct",
              label: "00:1A:2B:3C:4D:5E",
              description:
                "Correct! A MAC address is 6 groups of 2 hexadecimal digits separated by colons.",
            },
            {
              id: "wrong1",
              label: "192.168.1.10",
              description:
                "Incorrect. That is an IPv4 address, not a MAC address.",
            },
            {
              id: "wrong2",
              label: "255.255.255.0",
              description:
                "Incorrect. That is a subnet mask, not a MAC address.",
            },
            {
              id: "wrong3",
              label: "00:1A:2B:3C",
              description:
                "Incorrect. A MAC address must have 6 groups, not 4.",
            },
          ],
          answer: "correct",
        },
      },
 
      // Topic 2: ARP (Address Resolution Protocol)
      {
        id: "2",
        title: "ARP — Address Resolution Protocol",
 
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Your device knows the destination IP address. But to send a frame, it needs the destination MAC address.",
              visual: "ip-to-mac-problem",
            },
            {
              text: "This is where ARP comes in — the Address Resolution Protocol.",
              visual: "arp-intro",
            },
            {
              text: "ARP asks the local network a simple question: 'Who has this IP address? Tell me your MAC address.'",
              visual: "arp-broadcast",
            },
            {
              text: "This question is sent as a broadcast — meaning it is sent to every device on the local network.",
              visual: "arp-broadcast-wave",
            },
            {
              text: "Every device receives it. But only the one that owns that IP address replies.",
              visual: "arp-reply",
            },
            {
              text: "The reply says: 'That IP is mine. Here is my MAC address: 00:1A:2B:3C:4D:5E'",
              visual: "arp-response",
            },
            {
              text: "Your device saves this answer in a local table called the ARP cache, to avoid asking again.",
              visual: "arp-cache",
            },
            {
              text: "Now your device has both the IP and the MAC address. The frame can be built and sent.",
              visual: "frame-ready",
            },
          ],
        },
 
        mission: {
          type: "order",
          title: "Trace the ARP process",
          question: "Put the ARP resolution steps in the correct order:",
          items: [
            {
              id: "step4",
              label: "Device saves the MAC in its ARP cache",
            },
            {
              id: "step1",
              label: "Device knows the destination IP but not the MAC",
            },
            {
              id: "step3",
              label: "Target device replies with its MAC address",
            },
            {
              id: "step2",
              label: "Device sends an ARP broadcast to the local network",
            },
          ],
          answer: ["step1", "step2", "step3", "step4"],
          successMessage: "Correct! ARP has resolved the MAC address successfully.",
          failMessage: "Incorrect. Think about what happens before a device can reply.",
        },
      },
 
      // Topic 3: Switching
      {
        id: "3",
        title: "Switching",
 
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "Inside your local network, there is a device responsible for delivering frames to the right machine: the switch.",
              visual: "switch-intro",
            },
            {
              text: "A switch is a hardware device that connects multiple devices in the same network.",
              visual: "switch-devices",
            },
            {
              text: "Unlike a hub — which sends data to everyone — a switch is smart. It knows exactly where to send each frame.",
              visual: "switch-vs-hub",
            },
            {
              text: "When a frame arrives, the switch reads the destination MAC address in the frame header.",
              visual: "switch-reads-mac",
            },
            {
              text: "The switch maintains a MAC address table — also called a CAM table — that maps each MAC address to a port.",
              visual: "cam-table",
            },
            {
              text: "It looks up the destination MAC in the table and forwards the frame only to the correct port.",
              visual: "switch-forward",
            },
            {
              text: "If the MAC address is not yet in the table, the switch floods the frame to all ports except the one it came from.",
              visual: "switch-flood",
            },
            {
              text: "Over time, the switch learns which device is on which port by recording the source MAC of every incoming frame.",
              visual: "switch-learns",
            },
            {
              text: "This makes switching fast, efficient, and private — only the intended device receives the frame.",
              visual: "switch-efficient",
            },
          ],
        },
 
        mission: {
          type: "quiz",
          title: "How does a switch decide?",
          question:
            "A frame arrives at a switch with destination MAC 00:1A:2B:3C:4D:5E. The MAC is not in the CAM table. What does the switch do?",
          options: [
            {
              id: "correct",
              label: "Flood the frame to all ports except the source port",
              description:
                "Correct! When a MAC is unknown, the switch floods so the destination can reveal itself.",
            },
            {
              id: "wrong1",
              label: "Drop the frame immediately",
              description:
                "Incorrect. Switches do not drop unknown frames — they flood them.",
            },
            {
              id: "wrong2",
              label: "Send it only to the router",
              description:
                "Incorrect. Switches operate at the local level using MAC addresses, not the router.",
            },
            {
              id: "wrong3",
              label: "Ask the server for the correct port",
              description:
                "Incorrect. Switches learn from traffic autonomously — they do not query a server.",
            },
          ],
          answer: "correct",
        },
      },
 
      // Topic 4: Frames
      {
        id: "4",
        title: "Frames",
 
        explanation: {
          type: "scenes",
          scenes: [
            {
              text: "You now know about MAC addresses, ARP, and switching. It is time to look at the frame itself.",
              visual: "frame-intro",
            },
            {
              text: "A frame is the unit of data that travels between devices at the Network Access Layer.",
              visual: "frame-unit",
            },
            {
              text: "Think of it as an envelope: it wraps your packet and adds the information needed for local delivery.",
              visual: "frame-envelope",
            },
            {
              text: "A frame has three main parts: the header, the payload, and the trailer.",
              visual: "frame-structure",
            },
            {
              text: "The header contains the destination MAC address, the source MAC address, and the frame type.",
              visual: "frame-header",
            },
            {
              text: "The payload is the packet from the Internet Layer — your actual data.",
              visual: "frame-payload",
            },
            {
              text: "The trailer contains an FCS — Frame Check Sequence — a value used to detect errors during transmission.",
              visual: "frame-trailer",
            },
            {
              text: "When the frame arrives, the receiver checks the FCS. If the data was corrupted, the frame is discarded.",
              visual: "frame-check",
            },
            {
              text: "Your data is now a frame. It has a source, a destination, a payload, and error detection.",
              visual: "frame-complete",
            },
            {
              text: "This frame will be converted into electrical signals or radio waves and sent across the physical medium.",
              visual: "frame-to-signal",
            },
            {
              text: "Congratulations. Your message has traveled through all four layers and is ready to reach the server.",
              visual: "journey-complete",
            },
          ],
        },
 
        mission: {
          type: "match",
          title: "Match the frame parts",
          question: "Connect each part of a frame to its correct description.",
          left: [
            { id: "header", label: "Header" },
            { id: "payload", label: "Payload" },
            { id: "trailer", label: "Trailer" },
          ],
          right: [
            {
              id: "mac-addresses",
              label: "Contains source and destination MAC addresses",
            },
            {
              id: "packet-data",
              label: "Carries the actual packet from the Internet Layer",
            },
            {
              id: "fcs-check",
              label: "Holds the FCS for error detection",
            },
          ],
          answer: {
            header: "mac-addresses",
            payload: "packet-data",
            trailer: "fcs-check",
          },
        },
      },
    ],
  },
];
