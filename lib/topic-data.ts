// Hierarchical topic data structure
export interface Topic {
  id: string;
  title: string;
  description?: string;
  difficulty?: string;
  duration?: string;
  subtopics?: Topic[];
}

export interface CategoryData {
  id: string;
  title: string;
  icon: string;
  topics: Topic[];
}

// Foundations of Computer Science - Hierarchical Data
export const foundationsData: CategoryData = {
  id: "foundations",
  title: "Foundations of Computer Science",
  icon: "🧠",
  topics: [
    {
      id: "intro-computers-programming",
      title: "Introduction to Computers & Programming",
      description: "Learn the fundamental concepts of computers and programming basics",
      difficulty: "Beginner",
      duration: "4-6 weeks",
      subtopics: [
        {
          id: "computer-hardware-basics",
          title: "Computer Hardware Basics",
          description: "Understanding the physical components of computers",
          difficulty: "Beginner",
          duration: "1-2 weeks",
          subtopics: [
            {
              id: "cpu-fundamentals",
              title: "CPU Fundamentals",
              description: "Central Processing Unit architecture and operations",
              difficulty: "Beginner",
              duration: "3-4 days"
            },
            {
              id: "memory-systems",
              title: "Memory Systems",
              description: "RAM, ROM, and storage technologies",
              difficulty: "Beginner",
              duration: "3-4 days"
            },
            {
              id: "input-output-devices",
              title: "Input/Output Devices",
              description: "Peripherals and device communication",
              difficulty: "Beginner",
              duration: "2-3 days"
            }
          ]
        },
        {
          id: "software-concepts",
          title: "Software Concepts",
          description: "Operating systems, applications, and software development",
          difficulty: "Beginner",
          duration: "2-3 weeks",
          subtopics: [
            {
              id: "operating-systems-intro",
              title: "Operating Systems Introduction",
              description: "OS functions, types, and user interfaces",
              difficulty: "Beginner",
              duration: "1 week"
            },
            {
              id: "application-software",
              title: "Application Software",
              description: "Types of applications and software categories",
              difficulty: "Beginner",
              duration: "3-4 days"
            },
            {
              id: "programming-languages-intro",
              title: "Programming Languages Introduction",
              description: "High-level vs low-level languages, compilers, interpreters",
              difficulty: "Beginner",
              duration: "1 week"
            }
          ]
        },
        {
          id: "programming-fundamentals",
          title: "Programming Fundamentals",
          description: "Basic programming concepts and problem-solving",
          difficulty: "Beginner",
          duration: "2-3 weeks",
          subtopics: [
            {
              id: "algorithms-basics",
              title: "Algorithms Basics",
              description: "What are algorithms and how to design them",
              difficulty: "Beginner",
              duration: "1 week"
            },
            {
              id: "flowcharts-pseudocode",
              title: "Flowcharts & Pseudocode",
              description: "Visual representation of algorithms",
              difficulty: "Beginner",
              duration: "1 week"
            },
            {
              id: "problem-solving-techniques",
              title: "Problem Solving Techniques",
              description: "Breaking down complex problems into manageable parts",
              difficulty: "Beginner",
              duration: "1 week"
            }
          ]
        }
      ]
    },
    {
      id: "algorithms-data-structures",
      title: "Algorithms & Data Structures",
      description: "Core algorithms and data organization methods",
      difficulty: "Intermediate",
      duration: "8-12 weeks",
      subtopics: [
        {
          id: "basic-data-structures",
          title: "Basic Data Structures",
          description: "Arrays, linked lists, stacks, and queues",
          difficulty: "Intermediate",
          duration: "3-4 weeks",
          subtopics: [
            {
              id: "arrays-dynamic-arrays",
              title: "Arrays & Dynamic Arrays",
              description: "Static and dynamic array implementations",
              difficulty: "Intermediate",
              duration: "1 week"
            },
            {
              id: "linked-lists",
              title: "Linked Lists",
              description: "Singly, doubly, and circular linked lists",
              difficulty: "Intermediate",
              duration: "1 week"
            },
            {
              id: "stacks-queues",
              title: "Stacks & Queues",
              description: "LIFO and FIFO data structures",
              difficulty: "Intermediate",
              duration: "1 week"
            }
          ]
        },
        {
          id: "sorting-algorithms",
          title: "Sorting Algorithms",
          description: "Various methods to sort data efficiently",
          difficulty: "Intermediate",
          duration: "2-3 weeks",
          subtopics: [
            {
              id: "comparison-sorts",
              title: "Comparison-based Sorts",
              description: "Bubble, selection, insertion, merge, quick sort",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            },
            {
              id: "non-comparison-sorts",
              title: "Non-comparison Sorts",
              description: "Counting, radix, bucket sort algorithms",
              difficulty: "Intermediate",
              duration: "1 week"
            }
          ]
        },
        {
          id: "searching-algorithms",
          title: "Searching Algorithms",
          description: "Methods to find data efficiently",
          difficulty: "Intermediate",
          duration: "2 weeks",
          subtopics: [
            {
              id: "linear-search",
              title: "Linear Search",
              description: "Sequential search through data",
              difficulty: "Beginner",
              duration: "2-3 days"
            },
            {
              id: "binary-search",
              title: "Binary Search",
              description: "Efficient search in sorted data",
              difficulty: "Intermediate",
              duration: "1 week"
            },
            {
              id: "hash-tables",
              title: "Hash Tables",
              description: "Key-value storage and collision handling",
              difficulty: "Intermediate",
              duration: "1 week"
            }
          ]
        }
      ]
    },
    {
      id: "computational-thinking",
      title: "Computational Thinking",
      description: "Problem-solving approach using computer science concepts",
      difficulty: "Beginner",
      duration: "4-6 weeks",
      subtopics: [
        {
          id: "decomposition",
          title: "Decomposition",
          description: "Breaking complex problems into smaller parts",
          difficulty: "Beginner",
          duration: "1 week"
        },
        {
          id: "pattern-recognition",
          title: "Pattern Recognition",
          description: "Identifying similarities and patterns in problems",
          difficulty: "Beginner",
          duration: "1 week"
        },
        {
          id: "abstraction",
          title: "Abstraction",
          description: "Focusing on essential features while hiding details",
          difficulty: "Beginner",
          duration: "1 week"
        },
        {
          id: "algorithm-design",
          title: "Algorithm Design",
          description: "Creating step-by-step solutions to problems",
          difficulty: "Beginner",
          duration: "2-3 weeks"
        }
      ]
    },
    {
      id: "mathematics-computer-science",
      title: "Mathematics for Computer Science",
      description: "Mathematical foundations essential for computer science",
      difficulty: "Intermediate",
      duration: "10-12 weeks",
      subtopics: [
        {
          id: "discrete-mathematics",
          title: "Discrete Mathematics",
          description: "Sets, relations, functions, and combinatorics",
          difficulty: "Intermediate",
          duration: "4-5 weeks",
          subtopics: [
            {
              id: "set-theory",
              title: "Set Theory",
              description: "Sets, operations, and Venn diagrams",
              difficulty: "Intermediate",
              duration: "1 week"
            },
            {
              id: "relations-functions",
              title: "Relations & Functions",
              description: "Mathematical relationships and mappings",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            },
            {
              id: "combinatorics",
              title: "Combinatorics",
              description: "Counting principles and permutations",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            }
          ]
        },
        {
          id: "logic-propositional",
          title: "Logic & Propositional Logic",
          description: "Logical reasoning and formal logic systems",
          difficulty: "Intermediate",
          duration: "3-4 weeks",
          subtopics: [
            {
              id: "propositional-logic",
              title: "Propositional Logic",
              description: "Logical operators and truth tables",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            },
            {
              id: "predicate-logic",
              title: "Predicate Logic",
              description: "Quantifiers and logical statements",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            }
          ]
        },
        {
          id: "probability-statistics",
          title: "Probability & Statistics",
          description: "Statistical analysis and probability theory",
          difficulty: "Intermediate",
          duration: "3-4 weeks",
          subtopics: [
            {
              id: "basic-probability",
              title: "Basic Probability",
              description: "Probability rules and conditional probability",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            },
            {
              id: "statistical-analysis",
              title: "Statistical Analysis",
              description: "Descriptive and inferential statistics",
              difficulty: "Intermediate",
              duration: "1.5 weeks"
            }
          ]
        }
      ]
    },
    {
      id: "operating-systems-basics",
      title: "Operating Systems Basics",
      description: "Understanding how operating systems manage computer resources",
      difficulty: "Intermediate",
      duration: "6-8 weeks",
      subtopics: [
        {
          id: "process-management",
          title: "Process Management",
          description: "How OS manages running programs",
          difficulty: "Intermediate",
          duration: "2 weeks"
        },
        {
          id: "memory-management",
          title: "Memory Management",
          description: "Virtual memory and memory allocation",
          difficulty: "Intermediate",
          duration: "2 weeks"
        },
        {
          id: "file-systems",
          title: "File Systems",
          description: "How data is stored and organized",
          difficulty: "Intermediate",
          duration: "1.5 weeks"
        },
        {
          id: "device-management",
          title: "Device Management",
          description: "Hardware device communication and drivers",
          difficulty: "Intermediate",
          duration: "1.5 weeks"
        }
      ]
    },
    {
      id: "computer-networks-fundamentals",
      title: "Computer Networks Fundamentals",
      description: "Understanding how computers communicate over networks",
      difficulty: "Intermediate",
      duration: "6-8 weeks",
      subtopics: [
        {
          id: "network-basics",
          title: "Network Basics",
          description: "Types of networks and network topologies",
          difficulty: "Intermediate",
          duration: "1.5 weeks"
        },
        {
          id: "protocols-standards",
          title: "Protocols & Standards",
          description: "TCP/IP, HTTP, and other communication protocols",
          difficulty: "Intermediate",
          duration: "2 weeks"
        },
        {
          id: "network-security",
          title: "Network Security",
          description: "Basic security concepts and threats",
          difficulty: "Intermediate",
          duration: "1.5 weeks"
        },
        {
          id: "internet-fundamentals",
          title: "Internet Fundamentals",
          description: "How the internet works and web technologies",
          difficulty: "Intermediate",
          duration: "1.5 weeks"
        }
      ]
    }
  ]
};

// Export all category data
export const allCategoryData: CategoryData[] = [
  foundationsData,
  // Add other categories here as needed
];
