// 4-Level Hierarchy Content Structure
// 1. Categories → 2. Sub Categories → 3. Topics → 4. Subtopics

export interface MediaContent {
  type: 'image' | 'video' | 'link' | 'code' | 'text' | 'quiz' | 'exercise' | 'resource' | 'table';
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  caption?: string;
  width?: number;
  height?: number;
  duration?: string;
  thumbnail?: string;
  external?: boolean;
  code?: string;
  language?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  points?: number;
  resources?: Array<{
    title: string;
    url: string;
    type: 'article' | 'video' | 'book' | 'documentation' | 'tool';
  }>;
  // Table-specific properties
  headers?: string[];
  rows?: string[][];
}

// Level 4: Subtopics (leaf nodes with actual content)
export interface Subtopic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon?: string;
  image?: string;
  video?: {
    src: string;
    thumbnail: string;
    duration: string;
  };
  content: MediaContent[];
  exercises?: Array<{
    id: string;
    title: string;
    description: string;
    type: 'coding' | 'multiple-choice' | 'essay' | 'project';
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
    solution?: string;
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: 'article' | 'video' | 'book' | 'documentation' | 'tool';
    description?: string;
  }>;
  prerequisites?: string[];
  learningObjectives?: string[];
  tags: string[];
  lastUpdated: string;
  author?: string;
  version: string;
}

// Level 3: Topics (contain subtopics)
export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon?: string;
  image?: string;
  video?: {
    src: string;
    thumbnail: string;
    duration: string;
  };
  subtopics: Subtopic[];
  prerequisites?: string[];
  learningObjectives?: string[];
  tags: string[];
  lastUpdated: string;
  author?: string;
  version: string;
}

// Level 2: Sub Categories (contain topics)
export interface SubCategory {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon?: string;
  image?: string;
  video?: {
    src: string;
    thumbnail: string;
    duration: string;
  };
  topics: Topic[];
  prerequisites?: string[];
  learningObjectives?: string[];
  tags: string[];
  lastUpdated: string;
  author?: string;
  version: string;
}

// Level 1: Categories (top level, contain sub categories)
export interface CategoryData {
  id: string;
  title: string;
  description: string;
  icon: string;
  bannerImage?: string;
  bannerVideo?: {
    src: string;
    thumbnail: string;
  };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mixed';
  duration: string;
  subCategories: SubCategory[];
  prerequisites?: string[];
  learningObjectives?: string[];
  tags: string[];
  lastUpdated: string;
  author?: string;
  version: string;
}

// Sample data for Foundations of Computer Science with 4-level hierarchy
export const foundationsData: CategoryData = {
  id: "foundations",
  title: "Foundations of Computer Science",
  description: "Master the fundamental concepts that form the backbone of computer science.",
  icon: "🧠",
  bannerImage: "/images/foundations-banner.jpg",
  bannerVideo: {
    src: "/videos/foundations-intro.mp4",
    thumbnail: "/images/foundations-video-thumb.jpg"
  },
  difficulty: "Mixed",
  duration: "6-8 months",
  prerequisites: ["Basic mathematics knowledge", "Logical thinking skills"],
  learningObjectives: [
    "Understand fundamental computer science concepts",
    "Develop computational thinking skills",
    "Master basic algorithms and data structures"
  ],
  tags: ["computer-science", "algorithms", "programming", "mathematics"],
  lastUpdated: "2024-01-15",
  author: "ByteFlux Team",
  version: "1.0.0",
  subCategories: [
    {
      id: "computer-fundamentals",
      title: "Computer Fundamentals",
      description: "Understanding the basic components and operations of computers",
      difficulty: "Beginner",
      duration: "4-6 weeks",
      icon: "💻",
      image: "/images/computer-fundamentals.jpg",
      tags: ["hardware", "software", "basics"],
      lastUpdated: "2024-01-10",
      author: "Dr. Sarah Johnson",
      version: "1.1.0",
      topics: [
        {
          id: "hardware-basics",
          title: "Hardware Basics",
          description: "Understanding computer hardware components",
          difficulty: "Beginner",
          duration: "2 weeks",
          icon: "🔧",
          image: "/images/hardware-basics.jpg",
          tags: ["hardware", "components", "cpu"],
          lastUpdated: "2024-01-08",
          author: "Prof. Michael Chen",
          version: "1.0.0",
          subtopics: [
            {
              id: "cpu-fundamentals",
              title: "CPU Fundamentals",
              description: "Central Processing Unit architecture and operations",
              difficulty: "Beginner",
              duration: "3-4 days",
              icon: "⚡",
              image: "/images/cpu-fundamentals.jpg",
              tags: ["cpu", "architecture", "processing"],
              lastUpdated: "2024-01-05",
              author: "Prof. Michael Chen",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/cpu-explained.mp4",
                  title: "CPU Fundamentals Overview",
                  description: "Comprehensive introduction to CPU architecture and operations",
                  duration: "12:30",
                  thumbnail: "/images/cpu-video-thumb.jpg"
                },
                {
                  type: "image",
                  src: "/images/cpu-architecture.jpg",
                  alt: "CPU architecture diagram",
                  caption: "Internal structure of a modern CPU showing ALU, Control Unit, and Registers",
                  width: 800,
                  height: 600
                },
                {
                  type: "text",
                  description: "The CPU (Central Processing Unit) is the brain of the computer. It executes instructions and performs calculations. The CPU consists of several key components including the Arithmetic Logic Unit (ALU), Control Unit, and various registers."
                },
                {
                  type: "code",
                  code: `// CPU Instruction Cycle Simulation
class CPU {
    constructor() {
        this.registers = {
            PC: 0,    // Program Counter
            ACC: 0,   // Accumulator
            IR: 0     // Instruction Register
        };
        this.memory = new Array(1000);
    }
    
    // Fetch-Decode-Execute Cycle
    executeCycle() {
        // 1. Fetch instruction from memory
        this.registers.IR = this.memory[this.registers.PC];
        
        // 2. Decode instruction
        const opcode = this.registers.IR >> 8;
        const operand = this.registers.IR & 0xFF;
        
        // 3. Execute instruction
        switch(opcode) {
            case 1: // LOAD
                this.registers.ACC = this.memory[operand];
                break;
            case 2: // STORE
                this.memory[operand] = this.registers.ACC;
                break;
            case 3: // ADD
                this.registers.ACC += this.memory[operand];
                break;
        }
        
        // 4. Increment Program Counter
        this.registers.PC++;
    }
}

// Example usage
const cpu = new CPU();
cpu.memory[0] = 0x0105; // LOAD value from address 5
cpu.executeCycle();`,
                  language: "javascript",
                  caption: "CPU Instruction Cycle Implementation"
                },
                {
                  type: "table",
                  title: "CPU Components Comparison",
                  description: "Different types of CPU components and their functions",
                  headers: ["Component", "Function", "Location", "Size"],
                  rows: [
                    ["ALU", "Performs arithmetic and logic operations", "Core", "Small"],
                    ["Control Unit", "Manages instruction execution", "Core", "Medium"],
                    ["Registers", "Temporary storage for data and addresses", "Core", "Very Small"],
                    ["Cache", "Fast memory for frequently used data", "Core", "Small to Medium"],
                    ["Bus Interface", "Connects CPU to system bus", "External", "Medium"]
                  ]
                },
                {
                  type: "image",
                  src: "/images/cpu-memory-hierarchy.jpg",
                  alt: "CPU and memory hierarchy",
                  caption: "CPU interaction with different memory levels (Cache, RAM, Storage)",
                  width: 700,
                  height: 500
                },
                {
                  type: "video",
                  src: "/videos/cpu-performance.mp4",
                  title: "CPU Performance Factors",
                  description: "Understanding clock speed, cores, and performance metrics",
                  duration: "10:15",
                  thumbnail: "/images/cpu-performance-thumb.jpg"
                },
                {
                  type: "code",
                  code: `# CPU Performance Benchmark Example
import time
import threading

class CPUBenchmark:
    def __init__(self):
        self.results = {}
    
    def arithmetic_test(self, iterations=1000000):
        """Test CPU arithmetic performance"""
        start_time = time.time()
        
        result = 0
        for i in range(iterations):
            result += i * 2 + 1
            result %= 1000  # Prevent overflow
        
        end_time = time.time()
        self.results['arithmetic'] = end_time - start_time
        return result
    
    def multi_threading_test(self, threads=4):
        """Test CPU multi-threading capability"""
        start_time = time.time()
        
        def worker(thread_id):
            local_result = 0
            for i in range(250000):
                local_result += i * thread_id
            return local_result
        
        thread_list = []
        for i in range(threads):
            t = threading.Thread(target=worker, args=(i,))
            thread_list.append(t)
            t.start()
        
        for t in thread_list:
            t.join()
        
        end_time = time.time()
        self.results['multithreading'] = end_time - start_time

# Run benchmark
benchmark = CPUBenchmark()
benchmark.arithmetic_test()
benchmark.multi_threading_test()
print("Benchmark Results:", benchmark.results)`,
                  language: "python",
                  caption: "CPU Performance Testing Code"
                }
              ],
              exercises: [
                {
                  id: "cpu-ex1",
                  title: "CPU Components Quiz",
                  description: "Test your knowledge of CPU components",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 10
                }
              ],
              resources: [
                {
                  title: "How CPUs Work",
                  url: "https://computer.howstuffworks.com/microprocessor.htm",
                  type: "article",
                  description: "Detailed explanation of CPU operation"
                }
              ]
            },
            {
              id: "memory-systems",
              title: "Memory Systems",
              description: "RAM, ROM, and storage technologies",
              difficulty: "Beginner",
              duration: "3-4 days",
              icon: "💾",
              image: "/images/memory-systems.jpg",
              tags: ["memory", "ram", "rom", "storage"],
              lastUpdated: "2024-01-05",
              author: "Prof. Michael Chen",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/memory-explained.mp4",
                  title: "Memory Systems Explained",
                  description: "Understanding different types of computer memory",
                  duration: "15:30",
                  thumbnail: "/images/memory-video-thumb.jpg"
                },
                {
                  type: "image",
                  src: "/images/memory-hierarchy.jpg",
                  alt: "Memory hierarchy diagram",
                  caption: "Computer memory hierarchy from fastest to slowest (CPU Cache → RAM → SSD → HDD)",
                  width: 800,
                  height: 600
                },
                {
                  type: "text",
                  description: "Computer memory is organized in a hierarchy, with faster but smaller memory closer to the CPU and slower but larger memory further away. This hierarchy optimizes both speed and capacity for different use cases."
                },
                {
                  type: "table",
                  title: "Memory Types Comparison",
                  description: "Comparison of different memory technologies",
                  headers: ["Memory Type", "Speed", "Capacity", "Volatility", "Cost per GB"],
                  rows: [
                    ["CPU Cache (L1)", "Extremely Fast", "32-64 KB", "Volatile", "$1000+"],
                    ["CPU Cache (L2/L3)", "Very Fast", "256 KB - 32 MB", "Volatile", "$500+"],
                    ["RAM (DDR4)", "Fast", "4-64 GB", "Volatile", "$5-10"],
                    ["SSD (NVMe)", "Medium", "256 GB - 4 TB", "Non-volatile", "$0.10-0.20"],
                    ["HDD", "Slow", "1-18 TB", "Non-volatile", "$0.02-0.05"],
                    ["Optical Disk", "Very Slow", "700 MB - 100 GB", "Non-volatile", "$0.01"]
                  ]
                },
                {
                  type: "code",
                  code: `// Memory Management Simulation
class MemoryManager {
    constructor() {
        this.memory = new Array(1024).fill(0); // 1KB simulated memory
        this.freeBlocks = [{start: 0, size: 1024}]; // Initially all memory is free
        this.allocatedBlocks = new Map(); // Track allocated blocks
    }
    
    // Allocate memory block
    allocate(size) {
        // Find first fit
        for (let i = 0; i < this.freeBlocks.length; i++) {
            const block = this.freeBlocks[i];
            if (block.size >= size) {
                // Allocate memory
                const allocatedBlock = {
                    start: block.start,
                    size: size,
                    id: Date.now() + Math.random()
                };
                
                // Update free blocks
                if (block.size === size) {
                    this.freeBlocks.splice(i, 1);
                } else {
                    block.start += size;
                    block.size -= size;
                }
                
                this.allocatedBlocks.set(allocatedBlock.id, allocatedBlock);
                return allocatedBlock.id;
            }
        }
        return null; // No space available
    }
    
    // Deallocate memory block
    deallocate(id) {
        const block = this.allocatedBlocks.get(id);
        if (!block) return false;
        
        // Add back to free blocks
        this.freeBlocks.push({start: block.start, size: block.size});
        this.allocatedBlocks.delete(id);
        
        // Merge adjacent free blocks
        this.mergeFreeBlocks();
        return true;
    }
    
    mergeFreeBlocks() {
        this.freeBlocks.sort((a, b) => a.start - b.start);
        for (let i = 0; i < this.freeBlocks.length - 1; i++) {
            const current = this.freeBlocks[i];
            const next = this.freeBlocks[i + 1];
            
            if (current.start + current.size === next.start) {
                // Merge blocks
                current.size += next.size;
                this.freeBlocks.splice(i + 1, 1);
                i--; // Check again
            }
        }
    }
    
    getMemoryStatus() {
        return {
            totalSize: 1024,
            freeBlocks: this.freeBlocks,
            allocatedBlocks: Array.from(this.allocatedBlocks.values()),
            fragmentation: this.calculateFragmentation()
        };
    }
    
    calculateFragmentation() {
        const totalFree = this.freeBlocks.reduce((sum, block) => sum + block.size, 0);
        const largestFree = Math.max(...this.freeBlocks.map(b => b.size));
        return totalFree > 0 ? (1 - largestFree / totalFree) * 100 : 0;
    }
}

// Example usage
const memManager = new MemoryManager();
console.log("Initial status:", memManager.getMemoryStatus());

// Allocate some memory
const id1 = memManager.allocate(100);
const id2 = memManager.allocate(200);
console.log("After allocation:", memManager.getMemoryStatus());

// Deallocate memory
memManager.deallocate(id1);
console.log("After deallocation:", memManager.getMemoryStatus());`,
                  language: "javascript",
                  caption: "Memory Management System Implementation"
                },
                {
                  type: "image",
                  src: "/images/ram-types.jpg",
                  alt: "Different types of RAM",
                  caption: "Comparison of DDR3, DDR4, and DDR5 RAM modules",
                  width: 900,
                  height: 400
                },
                {
                  type: "video",
                  src: "/videos/ssd-vs-hdd.mp4",
                  title: "SSD vs HDD Technology",
                  description: "Understanding solid-state drives vs hard disk drives",
                  duration: "12:45",
                  thumbnail: "/images/ssd-hdd-thumb.jpg"
                },
                {
                  type: "code",
                  code: `# Memory Performance Benchmark
import time
import psutil
import numpy as np

class MemoryBenchmark:
    def __init__(self):
        self.results = {}
    
    def memory_speed_test(self, size_mb=100):
        """Test memory read/write speed"""
        # Create large array
        data = np.random.randint(0, 256, size=(size_mb * 1024 * 1024), dtype=np.uint8)
        
        # Write test
        start_time = time.time()
        new_data = data.copy()
        write_time = time.time() - start_time
        
        # Read test
        start_time = time.time()
        checksum = np.sum(new_data)
        read_time = time.time() - start_time
        
        self.results['write_speed'] = size_mb / write_time  # MB/s
        self.results['read_speed'] = size_mb / read_time    # MB/s
        self.results['checksum'] = checksum
        
        return self.results
    
    def memory_usage_test(self):
        """Monitor memory usage patterns"""
        process = psutil.Process()
        memory_info = process.memory_info()
        
        self.results['rss'] = memory_info.rss / 1024 / 1024  # MB
        self.results['vms'] = memory_info.vms / 1024 / 1024  # MB
        self.results['percent'] = process.memory_percent()
        
        return self.results
    
    def cache_performance_test(self):
        """Test cache performance with different access patterns"""
        size = 1024 * 1024  # 1MB
        data = np.random.random(size)
        
        # Sequential access (cache-friendly)
        start_time = time.time()
        sum_seq = np.sum(data)
        seq_time = time.time() - start_time
        
        # Random access (cache-unfriendly)
        indices = np.random.randint(0, size, size // 100)  # Sample 1%
        start_time = time.time()
        sum_random = np.sum(data[indices])
        random_time = time.time() - start_time
        
        self.results['sequential_time'] = seq_time
        self.results['random_time'] = random_time
        self.results['cache_ratio'] = random_time / seq_time
        
        return self.results

# Run memory benchmarks
benchmark = MemoryBenchmark()
print("Memory Speed Test:", benchmark.memory_speed_test())
print("Memory Usage Test:", benchmark.memory_usage_test())
print("Cache Performance Test:", benchmark.cache_performance_test())`,
                  language: "python",
                  caption: "Memory Performance Benchmarking"
                }
              ],
              exercises: [
                {
                  id: "memory-ex1",
                  title: "Memory Types Quiz",
                  description: "Identify different types of computer memory",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 10
                }
              ],
              resources: [
                {
                  title: "Computer Memory Basics",
                  url: "https://www.computerhope.com/jargon/m/memory.htm",
                  type: "article",
                  description: "Comprehensive guide to computer memory"
                }
              ]
            },
            {
              id: "input-output-devices",
              title: "Input/Output Devices",
              description: "Understanding peripherals and I/O systems",
              difficulty: "Beginner",
              duration: "2-3 days",
              icon: "🖱️",
              image: "/images/io-devices.jpg",
              tags: ["input", "output", "peripherals", "devices"],
              lastUpdated: "2024-01-06",
              author: "Prof. Michael Chen",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/io-devices.mp4",
                  title: "Input/Output Devices Overview",
                  description: "Comprehensive overview of computer peripherals and I/O systems",
                  duration: "18:30",
                  thumbnail: "/images/io-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Input/output devices are peripherals that allow users to interact with computers and computers to communicate with the outside world. These devices form the bridge between human users and digital systems."
                },
                {
                  type: "table",
                  title: "I/O Device Categories",
                  description: "Classification of input/output devices",
                  headers: ["Category", "Device Type", "Function", "Connection Type", "Example"],
                  rows: [
                    ["Input", "Keyboard", "Text input", "USB/Bluetooth", "Mechanical Keyboard"],
                    ["Input", "Mouse", "Pointing device", "USB/Wireless", "Optical Mouse"],
                    ["Input", "Scanner", "Document digitization", "USB", "Flatbed Scanner"],
                    ["Input", "Microphone", "Audio input", "USB/3.5mm", "Condenser Mic"],
                    ["Output", "Monitor", "Visual display", "HDMI/DisplayPort", "4K Monitor"],
                    ["Output", "Printer", "Document output", "USB/Network", "Laser Printer"],
                    ["Output", "Speaker", "Audio output", "USB/3.5mm", "Studio Monitor"],
                    ["I/O", "Touchscreen", "Input & Display", "USB/HDMI", "Tablet Display"],
                    ["Storage", "External Drive", "Data storage", "USB/Thunderbolt", "SSD Drive"],
                    ["Network", "Modem/Router", "Internet connection", "Ethernet/WiFi", "Cable Modem"]
                  ]
                },
                {
                  type: "image",
                  src: "/images/io-devices-diagram.jpg",
                  alt: "I/O device connection diagram",
                  caption: "How input/output devices connect to the computer system",
                  width: 800,
                  height: 600
                },
                {
                  type: "code",
                  code: `// I/O Device Interface Simulation
class IODevice {
    constructor(name, type, connectionType) {
        this.name = name;
        this.type = type; // 'input', 'output', 'both'
        this.connectionType = connectionType;
        this.isConnected = false;
        this.data = [];
    }
    
    connect() {
        this.isConnected = true;
        console.log(\`\${this.name} connected via \${this.connectionType}\`);
    }
    
    disconnect() {
        this.isConnected = false;
        console.log(\`\${this.name} disconnected\`);
    }
    
    sendData(data) {
        if (!this.isConnected) {
            throw new Error('Device not connected');
        }
        this.data.push({
            timestamp: new Date(),
            data: data
        });
        return true;
    }
    
    receiveData() {
        if (!this.isConnected) {
            throw new Error('Device not connected');
        }
        return this.data.pop();
    }
}

// Input Device Class
class InputDevice extends IODevice {
    constructor(name, connectionType) {
        super(name, 'input', connectionType);
    }
    
    captureInput() {
        // Simulate input capture
        const input = Math.random() > 0.5 ? 'click' : 'keypress';
        this.sendData(input);
        return input;
    }
}

// Output Device Class
class OutputDevice extends IODevice {
    constructor(name, connectionType) {
        super(name, 'output', connectionType);
    }
    
    displayData(data) {
        console.log(\`\${this.name} displaying: \${data}\`);
        return this.sendData(data);
    }
}

// I/O Manager
class IOManager {
    constructor() {
        this.devices = new Map();
        this.eventListeners = new Map();
    }
    
    registerDevice(device) {
        this.devices.set(device.name, device);
        device.connect();
        return device;
    }
    
    unregisterDevice(deviceName) {
        const device = this.devices.get(deviceName);
        if (device) {
            device.disconnect();
            this.devices.delete(deviceName);
        }
    }
    
    // Event-driven I/O handling
    addEventListener(deviceName, eventType, callback) {
        const key = \`\${deviceName}:\${eventType}\`;
        if (!this.eventListeners.has(key)) {
            this.eventListeners.set(key, []);
        }
        this.eventListeners.get(key).push(callback);
    }
    
    triggerEvent(deviceName, eventType, data) {
        const key = \`\${deviceName}:\${eventType}\`;
        const listeners = this.eventListeners.get(key) || [];
        listeners.forEach(callback => callback(data));
    }
    
    getDeviceStatus() {
        const status = {};
        for (const [name, device] of this.devices) {
            status[name] = {
                type: device.type,
                connected: device.isConnected,
                connectionType: device.connectionType,
                dataCount: device.data.length
            };
        }
        return status;
    }
}

// Example usage
const ioManager = new IOManager();

// Create devices
const keyboard = new InputDevice('Keyboard', 'USB');
const mouse = new InputDevice('Mouse', 'Wireless');
const monitor = new OutputDevice('Monitor', 'HDMI');
const printer = new OutputDevice('Printer', 'USB');

// Register devices
ioManager.registerDevice(keyboard);
ioManager.registerDevice(mouse);
ioManager.registerDevice(monitor);
ioManager.registerDevice(printer);

// Add event listeners
ioManager.addEventListener('Keyboard', 'keypress', (data) => {
    console.log('Keyboard event:', data);
    monitor.displayData(\`Typed: \${data}\`);
});

ioManager.addEventListener('Mouse', 'click', (data) => {
    console.log('Mouse click detected:', data);
});

// Simulate device activity
keyboard.captureInput();
mouse.captureInput();

console.log('Device Status:', ioManager.getDeviceStatus());`,
                  language: "javascript",
                  caption: "I/O Device Management System"
                },
                {
                  type: "video",
                  src: "/videos/usb-standards.mp4",
                  title: "USB Standards and Connections",
                  description: "Understanding USB types, speeds, and compatibility",
                  duration: "14:20",
                  thumbnail: "/images/usb-standards-thumb.jpg"
                },
                {
                  type: "image",
                  src: "/images/display-technologies.jpg",
                  alt: "Display technology comparison",
                  caption: "LCD vs LED vs OLED display technologies",
                  width: 900,
                  height: 500
                },
                {
                  type: "code",
                  code: `# I/O Device Performance Testing
import time
import threading
import random
from collections import deque

class IODeviceTester:
    def __init__(self):
        self.results = {}
        self.test_data = []
    
    def generate_test_data(self, size_mb=10):
        """Generate test data for I/O operations"""
        # Generate random binary data
        data_size = size_mb * 1024 * 1024  # Convert MB to bytes
        self.test_data = [random.randint(0, 255) for _ in range(data_size)]
        return len(self.test_data)
    
    def simulate_disk_io(self, operation_type='write'):
        """Simulate disk I/O operations"""
        start_time = time.time()
        
        if operation_type == 'write':
            # Simulate writing data to disk
            with open('test_io.tmp', 'wb') as f:
                f.write(bytes(self.test_data))
        elif operation_type == 'read':
            # Simulate reading data from disk
            with open('test_io.tmp', 'rb') as f:
                data = f.read()
        
        end_time = time.time()
        duration = end_time - start_time
        
        self.results[f'disk_{operation_type}'] = {
            'duration': duration,
            'data_size': len(self.test_data),
            'speed_mbps': (len(self.test_data) / 1024 / 1024) / duration
        }
        
        return duration
    
    def simulate_network_io(self, host='127.0.0.1', port=8080):
        """Simulate network I/O operations"""
        import socket
        
        start_time = time.time()
        
        try:
            # Create socket connection
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.connect((host, port))
            
            # Send test data
            sock.send(bytes(self.test_data[:1024]))  # Send 1KB
            
            # Receive response
            response = sock.recv(1024)
            
            sock.close()
            
            end_time = time.time()
            duration = end_time - start_time
            
            self.results['network_io'] = {
                'duration': duration,
                'data_sent': 1024,
                'data_received': len(response),
                'speed_kbps': (1024 / 1024) / duration
            }
            
        except Exception as e:
            self.results['network_io'] = {'error': str(e)}
        
        return self.results.get('network_io', {})
    
    def test_concurrent_io(self, num_threads=4):
        """Test concurrent I/O operations"""
        start_time = time.time()
        
        def io_worker(thread_id):
            # Simulate I/O work
            time.sleep(0.1)  # Simulate I/O delay
            return f"Thread {thread_id} completed"
        
        threads = []
        for i in range(num_threads):
            t = threading.Thread(target=io_worker, args=(i,))
            threads.append(t)
            t.start()
        
        # Wait for all threads
        for t in threads:
            t.join()
        
        end_time = time.time()
        duration = end_time - start_time
        
        self.results['concurrent_io'] = {
            'duration': duration,
            'threads': num_threads,
            'throughput': num_threads / duration
        }
        
        return duration
    
    def benchmark_results(self):
        """Run complete I/O benchmark suite"""
        print("Generating test data...")
        self.generate_test_data(5)  # 5MB test data
        
        print("Testing disk I/O...")
        self.simulate_disk_io('write')
        self.simulate_disk_io('read')
        
        print("Testing concurrent I/O...")
        self.test_concurrent_io()
        
        print("I/O Benchmark Results:")
        for test, result in self.results.items():
            print(f"  {test}: {result}")
        
        return self.results

# Run I/O benchmark
if __name__ == "__main__":
    tester = IODeviceTester()
    tester.benchmark_results()`,
                  language: "python",
                  caption: "I/O Device Performance Testing"
                }
              ],
              exercises: [
                {
                  id: "io-ex1",
                  title: "I/O Device Classification",
                  description: "Classify different types of input and output devices",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 10
                }
              ]
            },
            {
              id: "motherboard-components",
              title: "Motherboard Components",
              description: "Understanding the main circuit board",
              difficulty: "Beginner",
              duration: "2-3 days",
              icon: "🔌",
              image: "/images/motherboard.jpg",
              tags: ["motherboard", "circuit", "components"],
              lastUpdated: "2024-01-07",
              author: "Prof. Michael Chen",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/motherboard.mp4",
                  title: "Motherboard Components",
                  description: "Understanding the main circuit board",
                  duration: "9:30",
                  thumbnail: "/images/motherboard-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "The motherboard is the main circuit board that connects all components of a computer system."
                }
              ],
              exercises: [
                {
                  id: "mb-ex1",
                  title: "Motherboard Layout Quiz",
                  description: "Identify different components on a motherboard",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 15
                }
              ]
            },
            {
              id: "power-supply",
              title: "Power Supply Systems",
              description: "Understanding computer power requirements",
              difficulty: "Beginner",
              duration: "1-2 days",
              icon: "⚡",
              image: "/images/power-supply.jpg",
              tags: ["power", "supply", "energy", "electrical"],
              lastUpdated: "2024-01-08",
              author: "Prof. Michael Chen",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/power-supply.mp4",
                  title: "Power Supply Systems",
                  description: "Understanding computer power requirements",
                  duration: "7:45",
                  thumbnail: "/images/power-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "The power supply unit converts AC power from the wall outlet to DC power that computer components can use."
                }
              ],
              exercises: [
                {
                  id: "ps-ex1",
                  title: "Power Requirements Quiz",
                  description: "Calculate power requirements for different components",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 10
                }
              ]
            }
          ]
        },
        {
          id: "operating-systems",
          title: "Operating Systems",
          description: "Understanding OS fundamentals and management",
          difficulty: "Beginner",
          duration: "3 weeks",
          icon: "💿",
          image: "/images/operating-systems.jpg",
          tags: ["os", "system", "management", "interface"],
          lastUpdated: "2024-01-10",
          author: "Dr. Sarah Johnson",
          version: "1.0.0",
          subtopics: [
            {
              id: "os-basics",
              title: "OS Basics",
              description: "Introduction to operating systems",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "🖥️",
              image: "/images/os-basics.jpg",
              tags: ["os", "basics", "introduction"],
              lastUpdated: "2024-01-09",
              author: "Dr. Sarah Johnson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/os-basics.mp4",
                  title: "Operating System Fundamentals",
                  description: "Comprehensive introduction to operating systems and their core functions",
                  duration: "22:45",
                  thumbnail: "/images/os-basics-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "An operating system is system software that manages computer hardware and software resources. It provides a user interface and manages processes, memory, file systems, and device drivers."
                },
                {
                  type: "table",
                  title: "Operating System Types",
                  description: "Comparison of different operating system categories",
                  headers: ["OS Type", "Examples", "User Interface", "Target Users", "Use Case"],
                  rows: [
                    ["Desktop OS", "Windows, macOS, Linux", "GUI", "General Users", "Personal Computing"],
                    ["Server OS", "Windows Server, Linux Server", "CLI/GUI", "System Administrators", "Enterprise Services"],
                    ["Mobile OS", "Android, iOS", "Touch GUI", "Mobile Users", "Smartphones/Tablets"],
                    ["Real-time OS", "VxWorks, QNX", "CLI", "Embedded Developers", "Industrial Control"],
                    ["Embedded OS", "FreeRTOS, ThreadX", "CLI", "IoT Developers", "IoT Devices"],
                    ["Virtualization", "VMware ESXi, Hyper-V", "Web GUI", "IT Professionals", "Server Virtualization"]
                  ]
                },
                {
                  type: "image",
                  src: "/images/os-architecture.jpg",
                  alt: "Operating system architecture",
                  caption: "Layered architecture of a typical operating system",
                  width: 800,
                  height: 600
                },
                {
                  type: "code",
                  code: `// Operating System Kernel Simulation
class OperatingSystem {
    constructor() {
        this.processes = new Map();
        this.memory = new Array(1024).fill(null); // 1KB simulated memory
        this.fileSystem = new Map();
        this.devices = new Map();
        this.nextPID = 1;
    }
    
    // Process Management
    createProcess(name, priority = 0) {
        const process = {
            pid: this.nextPID++,
            name: name,
            priority: priority,
            state: 'ready',
            memory: [],
            registers: {
                pc: 0,
                sp: 0,
                acc: 0
            },
            creationTime: Date.now()
        };
        
        this.processes.set(process.pid, process);
        console.log(\`Process '\${name}' created with PID \${process.pid}\`);
        return process.pid;
    }
    
    terminateProcess(pid) {
        const process = this.processes.get(pid);
        if (process) {
            // Free memory allocated to process
            process.memory.forEach(address => {
                this.memory[address] = null;
            });
            
            this.processes.delete(pid);
            console.log(\`Process \${pid} terminated\`);
            return true;
        }
        return false;
    }
    
    // Memory Management
    allocateMemory(pid, size) {
        const process = this.processes.get(pid);
        if (!process) return false;
        
        // Find free memory blocks
        const allocated = [];
        let consecutive = 0;
        let start = -1;
        
        for (let i = 0; i < this.memory.length; i++) {
            if (this.memory[i] === null) {
                if (consecutive === 0) start = i;
                consecutive++;
                
                if (consecutive === size) {
                    // Allocate memory
                    for (let j = start; j < start + size; j++) {
                        this.memory[j] = pid;
                        allocated.push(j);
                    }
                    process.memory.push(...allocated);
                    console.log(\`Allocated \${size} bytes to process \${pid}\`);
                    return allocated;
                }
            } else {
                consecutive = 0;
            }
        }
        
        console.log(\`Insufficient memory for process \${pid}\`);
        return false;
    }
    
    // File System Operations
    createFile(filename, content = '') {
        this.fileSystem.set(filename, {
            content: content,
            size: content.length,
            created: Date.now(),
            modified: Date.now()
        });
        console.log(\`File '\${filename}' created\`);
        return true;
    }
    
    readFile(filename) {
        const file = this.fileSystem.get(filename);
        if (file) {
            console.log(\`Reading file '\${filename}'\`);
            return file.content;
        }
        console.log(\`File '\${filename}' not found\`);
        return null;
    }
    
    writeFile(filename, content) {
        const file = this.fileSystem.get(filename);
        if (file) {
            file.content = content;
            file.size = content.length;
            file.modified = Date.now();
            console.log(\`File '\${filename}' updated\`);
            return true;
        }
        return false;
    }
    
    // System Status
    getSystemStatus() {
        return {
            processes: this.processes.size,
            memoryUsed: this.memory.filter(addr => addr !== null).length,
            memoryTotal: this.memory.length,
            files: this.fileSystem.size,
            uptime: Date.now()
        };
    }
    
    // Process Scheduling (Simple Round Robin)
    schedule() {
        const readyProcesses = Array.from(this.processes.values())
            .filter(p => p.state === 'ready')
            .sort((a, b) => b.priority - a.priority);
        
        if (readyProcesses.length > 0) {
            const nextProcess = readyProcesses[0];
            nextProcess.state = 'running';
            console.log(\`Scheduling process \${nextProcess.pid} (\${nextProcess.name})\`);
            
            // Simulate execution
            setTimeout(() => {
                nextProcess.state = 'ready';
                this.schedule();
            }, 100);
        }
    }
}

// Example usage
const os = new OperatingSystem();

// Create processes
const pid1 = os.createProcess('Calculator', 1);
const pid2 = os.createProcess('Text Editor', 2);
const pid3 = os.createProcess('Web Browser', 0);

// Allocate memory
os.allocateMemory(pid1, 64);
os.allocateMemory(pid2, 128);
os.allocateMemory(pid3, 256);

// File operations
os.createFile('config.txt', 'default settings');
os.writeFile('config.txt', 'updated settings');

// System monitoring
console.log('System Status:', os.getSystemStatus());

// Start process scheduling
os.schedule();`,
                  language: "javascript",
                  caption: "Operating System Kernel Simulation"
                },
                {
                  type: "video",
                  src: "/videos/process-scheduling.mp4",
                  title: "Process Scheduling Algorithms",
                  description: "Understanding how operating systems manage CPU time",
                  duration: "18:30",
                  thumbnail: "/images/process-scheduling-thumb.jpg"
                },
                {
                  type: "image",
                  src: "/images/os-comparison.jpg",
                  alt: "Operating system comparison",
                  caption: "Feature comparison of popular operating systems",
                  width: 900,
                  height: 600
                }
              ],
              exercises: [
                {
                  id: "os-basics-ex1",
                  title: "OS Functions Quiz",
                  description: "Identify main functions of an operating system",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 15
                }
              ]
            },
            {
              id: "process-management",
              title: "Process Management",
              description: "How OS manages running programs",
              difficulty: "Intermediate",
              duration: "1 week",
              icon: "⚙️",
              image: "/images/process-management.jpg",
              tags: ["process", "management", "scheduling"],
              lastUpdated: "2024-01-11",
              author: "Dr. Sarah Johnson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/process-management.mp4",
                  title: "Process Management",
                  description: "How operating systems manage processes",
                  duration: "18:30",
                  thumbnail: "/images/process-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Process management involves creating, scheduling, and terminating processes to efficiently utilize CPU resources."
                }
              ],
              exercises: [
                {
                  id: "process-ex1",
                  title: "Process States Exercise",
                  description: "Understand different process states",
                  type: "multiple-choice",
                  difficulty: "medium",
                  points: 20
                }
              ]
            },
            {
              id: "memory-management",
              title: "Memory Management",
              description: "How OS manages system memory",
              difficulty: "Intermediate",
              duration: "1 week",
              icon: "🧠",
              image: "/images/memory-management.jpg",
              tags: ["memory", "management", "virtual", "allocation"],
              lastUpdated: "2024-01-12",
              author: "Dr. Sarah Johnson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/memory-management.mp4",
                  title: "Memory Management",
                  description: "Understanding OS memory management",
                  duration: "20:15",
                  thumbnail: "/images/memory-mgmt-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Memory management involves allocating and deallocating memory for processes efficiently."
                }
              ],
              exercises: [
                {
                  id: "memory-mgmt-ex1",
                  title: "Memory Allocation Quiz",
                  description: "Understand memory allocation strategies",
                  type: "multiple-choice",
                  difficulty: "medium",
                  points: 20
                }
              ]
            },
            {
              id: "file-systems",
              title: "File Systems",
              description: "How OS organizes and manages files",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "📁",
              image: "/images/file-systems.jpg",
              tags: ["files", "directories", "storage", "organization"],
              lastUpdated: "2024-01-13",
              author: "Dr. Sarah Johnson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/file-systems.mp4",
                  title: "File Systems",
                  description: "Understanding file organization and management",
                  duration: "16:45",
                  thumbnail: "/images/files-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "File systems organize and manage how data is stored and retrieved from storage devices."
                }
              ],
              exercises: [
                {
                  id: "files-ex1",
                  title: "File System Types Quiz",
                  description: "Compare different file system types",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 15
                }
              ]
            }
          ]
        },
        {
          id: "networking-basics",
          title: "Networking Basics",
          description: "Introduction to computer networks",
          difficulty: "Beginner",
          duration: "2 weeks",
          icon: "🌐",
          image: "/images/networking-basics.jpg",
          tags: ["network", "internet", "protocols", "communication"],
          lastUpdated: "2024-01-14",
          author: "Prof. David Wilson",
          version: "1.0.0",
          subtopics: [
            {
              id: "network-fundamentals",
              title: "Network Fundamentals",
              description: "Basic concepts of computer networking",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "🔗",
              image: "/images/network-fundamentals.jpg",
              tags: ["network", "fundamentals", "basics"],
              lastUpdated: "2024-01-13",
              author: "Prof. David Wilson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/network-fundamentals.mp4",
                  title: "Network Fundamentals",
                  description: "Basic concepts of computer networking",
                  duration: "14:30",
                  thumbnail: "/images/network-fundamentals-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Computer networks enable devices to communicate and share resources over various media."
                }
              ],
              exercises: [
                {
                  id: "network-fund-ex1",
                  title: "Network Types Quiz",
                  description: "Identify different types of networks",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 15
                }
              ]
            },
            {
              id: "tcp-ip-protocols",
              title: "TCP/IP Protocols",
              description: "Understanding internet protocols",
              difficulty: "Intermediate",
              duration: "1 week",
              icon: "📡",
              image: "/images/tcp-ip.jpg",
              tags: ["tcp", "ip", "protocols", "internet"],
              lastUpdated: "2024-01-14",
              author: "Prof. David Wilson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/tcp-ip.mp4",
                  title: "TCP/IP Protocols",
                  description: "Understanding internet protocols",
                  duration: "22:15",
                  thumbnail: "/images/tcp-ip-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "TCP/IP is the fundamental protocol suite that powers the internet and most modern networks."
                }
              ],
              exercises: [
                {
                  id: "tcp-ip-ex1",
                  title: "Protocol Layers Quiz",
                  description: "Understand TCP/IP protocol layers",
                  type: "multiple-choice",
                  difficulty: "medium",
                  points: 20
                }
              ]
            },
            {
              id: "network-security",
              title: "Network Security",
              description: "Basic network security concepts",
              difficulty: "Intermediate",
              duration: "1 week",
              icon: "🔒",
              image: "/images/network-security.jpg",
              tags: ["security", "firewall", "encryption", "protection"],
              lastUpdated: "2024-01-15",
              author: "Prof. David Wilson",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/network-security.mp4",
                  title: "Network Security",
                  description: "Basic network security concepts",
                  duration: "19:45",
                  thumbnail: "/images/network-security-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Network security involves protecting network infrastructure and data from unauthorized access and attacks."
                }
              ],
              exercises: [
                {
                  id: "network-sec-ex1",
                  title: "Security Threats Quiz",
                  description: "Identify common network security threats",
                  type: "multiple-choice",
                  difficulty: "medium",
                  points: 20
                }
              ]
            }
          ]
        },
        {
          id: "data-representation",
          title: "Data Representation",
          description: "How computers store and represent data",
          difficulty: "Beginner",
          duration: "2 weeks",
          icon: "📊",
          image: "/images/data-representation.jpg",
          tags: ["data", "binary", "representation", "storage"],
          lastUpdated: "2024-01-16",
          author: "Dr. Lisa Park",
          version: "1.0.0",
          subtopics: [
            {
              id: "binary-system",
              title: "Binary System",
              description: "Understanding binary number system",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "🔢",
              image: "/images/binary-system.jpg",
              tags: ["binary", "numbers", "base-2"],
              lastUpdated: "2024-01-15",
              author: "Dr. Lisa Park",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/binary-system.mp4",
                  title: "Binary System",
                  description: "Understanding binary number system",
                  duration: "12:30",
                  thumbnail: "/images/binary-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "The binary system uses only two digits (0 and 1) and is fundamental to how computers process information."
                }
              ],
              exercises: [
                {
                  id: "binary-ex1",
                  title: "Binary Conversion Quiz",
                  description: "Convert between decimal and binary numbers",
                  type: "coding",
                  difficulty: "easy",
                  points: 15
                }
              ]
            },
            {
              id: "character-encoding",
              title: "Character Encoding",
              description: "How text is represented in computers",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "🔤",
              image: "/images/character-encoding.jpg",
              tags: ["ascii", "unicode", "encoding", "characters"],
              lastUpdated: "2024-01-16",
              author: "Dr. Lisa Park",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/character-encoding.mp4",
                  title: "Character Encoding",
                  description: "How text is represented in computers",
                  duration: "11:20",
                  thumbnail: "/images/encoding-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Character encoding systems like ASCII and Unicode map characters to numeric values that computers can understand."
                }
              ],
              exercises: [
                {
                  id: "encoding-ex1",
                  title: "ASCII Values Quiz",
                  description: "Identify ASCII values for common characters",
                  type: "multiple-choice",
                  difficulty: "easy",
                  points: 15
                }
              ]
            }
          ]
        }
      ]
      
    },
    {
      id: "programming-fundamentals",
      title: "Programming Fundamentals",
      description: "Core programming concepts and problem-solving techniques",
      difficulty: "Beginner",
      duration: "6-8 weeks",
      icon: "🎯",
      image: "/images/programming-fundamentals.jpg",
      tags: ["programming", "algorithms", "problem-solving"],
      lastUpdated: "2024-01-12",
      author: "Dr. Alex Rodriguez",
      version: "1.2.0",
      topics: [
        {
          id: "algorithms-basics",
          title: "Algorithms Basics",
          description: "What are algorithms and how to design them",
          difficulty: "Beginner",
          duration: "2 weeks",
          icon: "🧮",
          image: "/images/algorithms-basics.jpg",
          tags: ["algorithms", "design", "logic"],
          lastUpdated: "2024-01-10",
          author: "Dr. Alex Rodriguez",
          version: "1.1.0",
          subtopics: [
            {
              id: "algorithm-design",
              title: "Algorithm Design",
              description: "Creating step-by-step solutions to problems",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "⚙️",
              image: "/images/algorithm-design.jpg",
              tags: ["algorithm-design", "step-by-step", "solutions"],
              lastUpdated: "2024-01-09",
              author: "Dr. Alex Rodriguez",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/algorithm-design.mp4",
                  title: "Algorithm Design Process",
                  description: "Learn how to design effective algorithms",
                  duration: "15:45",
                  thumbnail: "/images/algorithm-design-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Algorithm design is the process of creating step-by-step procedures to solve problems efficiently."
                },
                {
                  type: "code",
                  code: `// Example: Simple algorithm to find maximum number
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Usage
const numbers = [3, 7, 2, 9, 1];
console.log(findMax(numbers)); // Output: 9`,
                  language: "javascript",
                  caption: "Algorithm to find maximum number in an array"
                }
              ],
              exercises: [
                {
                  id: "algo-ex1",
                  title: "Design a Sorting Algorithm",
                  description: "Create an algorithm to sort numbers in ascending order",
                  type: "coding",
                  difficulty: "medium",
                  points: 20
                }
              ],
              resources: [
                {
                  title: "Introduction to Algorithms",
                  url: "https://mitpress.mit.edu/books/introduction-algorithms",
                  type: "book",
                  description: "Classic textbook on algorithm design"
                }
              ]
            },
            {
              id: "algorithm-analysis",
              title: "Algorithm Analysis",
              description: "Understanding time and space complexity",
              difficulty: "Intermediate",
              duration: "1 week",
              icon: "📊",
              image: "/images/algorithm-analysis.jpg",
              tags: ["complexity", "big-o", "analysis", "performance"],
              lastUpdated: "2024-01-11",
              author: "Dr. Alex Rodriguez",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/algorithm-analysis.mp4",
                  title: "Algorithm Analysis",
                  description: "Understanding time and space complexity",
                  duration: "18:20",
                  thumbnail: "/images/algorithm-analysis-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Algorithm analysis helps us understand how efficient an algorithm is in terms of time and space."
                }
              ],
              exercises: [
                {
                  id: "analysis-ex1",
                  title: "Complexity Analysis Quiz",
                  description: "Analyze the time complexity of given algorithms",
                  type: "multiple-choice",
                  difficulty: "medium",
                  points: 25
                }
              ]
            }
          ]
        },
        {
          id: "data-structures",
          title: "Data Structures",
          description: "Organizing and storing data efficiently",
          difficulty: "Intermediate",
          duration: "3 weeks",
          icon: "🗂️",
          image: "/images/data-structures.jpg",
          tags: ["data-structures", "arrays", "lists", "trees"],
          lastUpdated: "2024-01-15",
          author: "Dr. Alex Rodriguez",
          version: "1.0.0",
          subtopics: [
            {
              id: "arrays-lists",
              title: "Arrays and Lists",
              description: "Linear data structures",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "📋",
              image: "/images/arrays-lists.jpg",
              tags: ["arrays", "lists", "linear", "indexing"],
              lastUpdated: "2024-01-14",
              author: "Dr. Alex Rodriguez",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/arrays-lists.mp4",
                  title: "Arrays and Lists",
                  description: "Understanding linear data structures",
                  duration: "16:30",
                  thumbnail: "/images/arrays-lists-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Arrays and lists are fundamental linear data structures that store elements sequentially."
                }
              ],
              exercises: [
                {
                  id: "arrays-ex1",
                  title: "Array Operations Exercise",
                  description: "Practice basic array operations",
                  type: "coding",
                  difficulty: "easy",
                  points: 15
                }
              ]
            },
            {
              id: "stacks-queues",
              title: "Stacks and Queues",
              description: "LIFO and FIFO data structures",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "📚",
              image: "/images/stacks-queues.jpg",
              tags: ["stacks", "queues", "lifo", "fifo"],
              lastUpdated: "2024-01-15",
              author: "Dr. Alex Rodriguez",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/stacks-queues.mp4",
                  title: "Stacks and Queues",
                  description: "Understanding LIFO and FIFO structures",
                  duration: "14:45",
                  thumbnail: "/images/stacks-queues-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Stacks follow Last-In-First-Out (LIFO) principle, while queues follow First-In-First-Out (FIFO) principle."
                }
              ],
              exercises: [
                {
                  id: "stack-queue-ex1",
                  title: "Stack Implementation",
                  description: "Implement a stack data structure",
                  type: "coding",
                  difficulty: "medium",
                  points: 20
                }
              ]
            }
          ]
        },
        {
          id: "problem-solving",
          title: "Problem Solving",
          description: "Systematic approach to solving programming problems",
          difficulty: "Beginner",
          duration: "2 weeks",
          icon: "🧩",
          image: "/images/problem-solving.jpg",
          tags: ["problem-solving", "debugging", "testing", "logic"],
          lastUpdated: "2024-01-17",
          author: "Dr. Alex Rodriguez",
          version: "1.0.0",
          subtopics: [
            {
              id: "debugging-techniques",
              title: "Debugging Techniques",
              description: "Finding and fixing errors in code",
              difficulty: "Beginner",
              duration: "1 week",
              icon: "🐛",
              image: "/images/debugging.jpg",
              tags: ["debugging", "errors", "troubleshooting", "testing"],
              lastUpdated: "2024-01-16",
              author: "Dr. Alex Rodriguez",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/debugging.mp4",
                  title: "Debugging Techniques",
                  description: "Effective strategies for finding and fixing bugs",
                  duration: "17:25",
                  thumbnail: "/images/debugging-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Debugging is the process of finding and fixing errors or bugs in code to make it work correctly."
                }
              ],
              exercises: [
                {
                  id: "debug-ex1",
                  title: "Debug Practice Exercise",
                  description: "Find and fix bugs in provided code",
                  type: "coding",
                  difficulty: "easy",
                  points: 15
                }
              ]
            },
            {
              id: "testing-strategies",
              title: "Testing Strategies",
              description: "How to test your code effectively",
              difficulty: "Intermediate",
              duration: "1 week",
              icon: "🧪",
              image: "/images/testing.jpg",
              tags: ["testing", "unit-tests", "validation", "quality"],
              lastUpdated: "2024-01-17",
              author: "Dr. Alex Rodriguez",
              version: "1.0.0",
              content: [
                {
                  type: "video",
                  src: "/videos/testing.mp4",
                  title: "Testing Strategies",
                  description: "Effective testing approaches for code",
                  duration: "19:30",
                  thumbnail: "/images/testing-video-thumb.jpg"
                },
                {
                  type: "text",
                  description: "Testing ensures that your code works correctly and handles edge cases properly."
                }
              ],
              exercises: [
                {
                  id: "testing-ex1",
                  title: "Write Unit Tests",
                  description: "Create unit tests for given functions",
                  type: "coding",
                  difficulty: "medium",
                  points: 20
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Export all category data
export const allCategoryData: CategoryData[] = [
  foundationsData,
];

// Utility functions for content management
export const getSubtopicById = (categoryId: string, subCategoryId: string, topicId: string, subtopicId: string): Subtopic | null => {
  const category = allCategoryData.find(cat => cat.id === categoryId);
  if (!category) return null;
  
  const subCategory = category.subCategories.find(sub => sub.id === subCategoryId);
  if (!subCategory) return null;
  
  const topic = subCategory.topics.find(t => t.id === topicId);
  if (!topic) return null;
  
  return topic.subtopics.find(sub => sub.id === subtopicId) || null;
};

export const getTopicById = (categoryId: string, subCategoryId: string, topicId: string): Topic | null => {
  const category = allCategoryData.find(cat => cat.id === categoryId);
  if (!category) return null;
  
  const subCategory = category.subCategories.find(sub => sub.id === subCategoryId);
  if (!subCategory) return null;
  
  return subCategory.topics.find(t => t.id === topicId) || null;
};

export const getSubCategoryById = (categoryId: string, subCategoryId: string): SubCategory | null => {
  const category = allCategoryData.find(cat => cat.id === categoryId);
  if (!category) return null;
  
  return category.subCategories.find(sub => sub.id === subCategoryId) || null;
};

export const getCategoryById = (categoryId: string): CategoryData | null => {
  return allCategoryData.find(cat => cat.id === categoryId) || null;
};

export const getAllSubCategories = (categoryId: string): SubCategory[] => {
  const category = getCategoryById(categoryId);
  return category ? category.subCategories : [];
};

export const getAllTopics = (categoryId: string, subCategoryId: string): Topic[] => {
  const subCategory = getSubCategoryById(categoryId, subCategoryId);
  return subCategory ? subCategory.topics : [];
};

export const getAllSubtopics = (categoryId: string, subCategoryId: string, topicId: string): Subtopic[] => {
  const topic = getTopicById(categoryId, subCategoryId, topicId);
  return topic ? topic.subtopics : [];
};
