// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',            href: '#about' },
  { label: 'Web Development',  href: '#webdev' },
  { label: 'Interior Design',  href: '#design' },
  { label: 'Networking',       href: '#networking' },
  { label: 'Achievements',     href: '#achievements' },
  { label: 'Certifications',   href: '#certifications' },
  { label: 'Contact',          href: '#contact' },
]

// ─── HERO METRICS ────────────────────────────────────────────────────────────
export const METRICS = [
  { num: '3',  suffix: '',  label: 'Professions' },
  { num: '10', suffix: '+', label: 'Technologies' },
  { num: '5',  suffix: '+', label: 'Projects' },
  { num: '40', suffix: '+', label: 'People Trained' },
]

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────
export const SOCIALS = {
  github:    'https://github.com/Saroj058',
  linkedin:  'https://www.linkedin.com/in/saroj-devkota/',
  instagram: 'https://www.instagram.com/__saroj_058__/',
  email:     'mailto:Saroj.devkota666@gmail.com',
}

// ─── TECH STACK MARQUEE ──────────────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'Python', 'Django', 'React', 'Next.js', 'TypeScript', 'JavaScript',
  'TCP/IP', 'Cisco', 'AWS', 'VLANs', 'Docker', 'PostgreSQL',
  'AutoCAD', '3D Viz', 'Git', 'Linux', 'REST API', 'Node.js',
]

// ─── ABOUT SKILLS ────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    title: 'Web & Software',
    color: 'cyan',
    tags: ['Python', 'Django', 'JavaScript', 'React', 'HTML/CSS', 'SQL', 'REST APIs'],
  },
  {
    title: 'Networking & Cloud',
    color: 'blue',
    tags: ['TCP/IP', 'VLANs', 'NAT', 'Cisco', 'AWS', 'DNS/DHCP', 'Firewalls'],
  },
  {
    title: 'Interior Design',
    color: 'green',
    tags: ['AutoCAD', '3D Visualization', 'Space Planning', 'Lighting Design', 'Material Selection'],
  },
  {
    title: 'Tools & Platforms',
    color: 'amber',
    tags: ['Git', 'Linux', 'Packet Tracer', 'VS Code', 'Docker', 'AI/ML'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export type Project = {
  id: string
  badge: string
  title: string
  description: string
  stack: string[]
  color: string
  featured: boolean
  live?: string
  github?: string
  metrics: { label: string; value: string }[]
  features: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'donation-system',
    badge: 'Featured · Final Year',
    title: 'Donation & Volunteer Management System',
    description:
      'Full-stack Django application streamlining donations, volunteer coordination, and organizational management with role-based access control and real-time dashboards.',
    stack: ['Django', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'RBAC'],
    color: 'blue',
    featured: true,
    live: 'https://donvolproject.onrender.com',
    metrics: [
      { label: 'Users Supported', value: '200+' },
      { label: 'Modules', value: '6' },
      { label: 'Response Time', value: '<200ms' },
    ],
    features: [
      'Role-Based Access Control (Admin / Volunteer / Donor)',
      'Real-Time Donation Tracking & Analytics Dashboard',
      'Volunteer Registration & Task Assignment',
      'Secure Authentication with Django Auth',
      'Database-Driven Report Generation',
      'Fully Responsive UI',
    ],
  },
  {
    id: 'interior-3floor',
    badge: 'Design · Architecture',
    title: 'Interior Design — 3-Floor Residential',
    description:
      'Contemporary luxury residential project across three floors. Full 3D visualization workflow, material palette curation, and smart space planning.',
    stack: ['3D Visualization', 'AutoCAD', 'Space Planning', 'Lighting Design'],
    color: 'green',
    featured: false,
    metrics: [
      { label: 'Floors', value: '3' },
      { label: 'Rooms', value: '12+' },
      { label: 'Style', value: 'Contemporary' },
    ],
    features: [
      'Full floor-by-floor 3D visualization',
      'Material & color palette curation',
      'Smart space optimization',
      'Furniture staging & lighting design',
    ],
  },
  {
    id: 'enterprise-network',
    badge: 'Infrastructure · WAN',
    title: 'Enterprise Network Architecture',
    description:
      'Multi-site WAN simulation connecting New York and Tokyo through VLAN segmentation, NAT policies, and packet-level traffic analysis.',
    stack: ['Cisco Packet Tracer', 'VLANs', 'NAT', 'Firewalls', 'TCP/IP'],
    color: 'amber',
    featured: false,
    metrics: [
      { label: 'Sites', value: '2' },
      { label: 'VLANs', value: '8' },
      { label: 'Protocols', value: '6+' },
    ],
    features: [
      'Multi-site WAN topology (NY ↔ Tokyo)',
      'Layer 2/3 switching with VLAN segmentation',
      'NAT & Firewall rule configuration',
      'Packet-level analysis: ICMP, ARP, DNS',
    ],
  },
]

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────
export const ACHIEVEMENTS: {
  id: string
  category: string
  color: string
  icon: string
  title: string
  org: string
  year: string
  description: string
  tag: string
}[] = [
  // Placeholder — Saroj will populate these
]

// ─── NETWORKING SKILLS ────────────────────────────────────────────────────────
export const NET_SKILLS = [
  'TCP/IP', 'DHCP', 'DNS', 'NAT', 'VLAN Configuration',
  'Routing & Switching', 'IP Addressing & Subnetting',
  'LAN/WAN Design', 'OSI Model', 'ARP & ICMP Analysis',
  'Cisco Packet Tracer', 'Enterprise Network Architecture',
  'Firewall Simulation', 'Hierarchical Network Design', 'WAN Protocols',
]

// ─── NET TOPOLOGY NODES ───────────────────────────────────────────────────────
export const TOPOLOGY_NODES = {
  tokyo: [
    { id: 'tk-sw',  label: 'L2 Switch',   x: 80,  y: 60,  color: '#8080a0' },
    { id: 'tk-vl',  label: 'L3/VLAN',     x: 80,  y: 100, color: '#8080a0' },
    { id: 'tk-fw',  label: 'Firewall',    x: 80,  y: 140, color: '#ffaa00' },
    { id: 'tk-rt',  label: 'Router',      x: 80,  y: 180, color: '#4f7fff' },
  ],
  nyc: [
    { id: 'ny-sw',  label: 'L2 Switch',   x: 560, y: 60,  color: '#8080a0' },
    { id: 'ny-vl',  label: 'L3/VLAN',     x: 560, y: 100, color: '#8080a0' },
    { id: 'ny-fw',  label: 'Firewall',    x: 560, y: 140, color: '#ffaa00' },
    { id: 'ny-rt',  label: 'Router',      x: 560, y: 180, color: '#4f7fff' },
  ],
}

// ─── INTERIOR DESIGN ─────────────────────────────────────────────────────────
export const INTERIOR_FLOORS = [
  {
    floor: 1,
    label: 'Ground Floor',
    rooms: ['Living Room', 'Kitchen', 'Dining Area', 'Guest Bathroom', 'Utility'],
    description: 'Open-plan social living with integrated kitchen and dining under natural light.',
    palette: ['#C8A882', '#F5F0E8', '#2C2C2C', '#8B7355'],
  },
  {
    floor: 2,
    label: 'First Floor',
    rooms: ['Master Bedroom', 'En-suite', 'Walk-in Wardrobe', 'Study'],
    description: 'Private sanctuary with luxury en-suite and integrated workspace.',
    palette: ['#E8DDD0', '#4A4A4A', '#B8A090', '#D4C4B0'],
  },
  {
    floor: 3,
    label: 'Top Floor',
    rooms: ['Guest Bedroom', 'Family Lounge', 'Terrace', 'Storage'],
    description: 'Light-filled retreat with rooftop terrace and panoramic views.',
    palette: ['#F0EDE8', '#6B8B6B', '#C0B8A8', '#E8E0D0'],
  },
]

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  { name: 'Cloud Practitioner Essentials', issuer: 'Amazon Web Services', year: '2024', status: 'done',     color: 'amber' },
  { name: 'Networking Basics',             issuer: 'Cisco',               year: '2024', status: 'done',     color: 'blue' },
  { name: 'Cisco Packet Tracer',           issuer: 'Cisco',               year: '2024', status: 'done',     color: 'blue' },
  { name: 'Linux Unhatched',               issuer: 'NDG / Cisco',         year: '2024', status: 'done',     color: 'green' },
  { name: 'Django Web Development',        issuer: 'Various',             year: '2024', status: 'done',     color: 'green' },
  { name: 'Microsoft Excel',               issuer: 'Simplilearn',         year: '2024', status: 'done',     color: 'green' },
  { name: 'Solutions Architect (SAA-C03)', issuer: 'Amazon Web Services', year: '2024–25', status: 'prog',  color: 'amber' },
  { name: 'CCNA',                          issuer: 'Cisco',               year: '2024–25', status: 'prog',  color: 'blue' },
  { name: 'Advanced Django & React',       issuer: 'Target 2025',         year: '2025', status: 'upcoming', color: 'violet' },
  { name: 'Cloud Engineering',             issuer: 'Target 2025',         year: '2025', status: 'upcoming', color: 'violet' },
  { name: 'REST API Specialization',       issuer: 'Target 2025',         year: '2025', status: 'upcoming', color: 'cyan' },
]

// ─── VOLUNTEER TIMELINE ───────────────────────────────────────────────────────
export const VOLUNTEER_ITEMS = [
  {
    year: '2023',
    title: 'Cyber Security Awareness Trainer',
    org: 'Technology Education Initiative · Kathmandu',
    description: 'Delivered hands-on cybersecurity training covering digital hygiene, phishing prevention, and safe online practices to local community members.',
    tag: '40+ individuals trained',
    color: 'cyan',
    icon: 'shield',
  },
  {
    year: '2023',
    title: 'Breast Cancer Awareness Volunteer',
    org: 'Healthcare Community Initiative',
    description: 'Participated in awareness campaigns focused on early detection and community education across local neighbourhoods.',
    tag: 'Healthcare',
    color: 'rose',
    icon: 'heart',
  },
  {
    year: '2022–Present',
    title: 'Educational Tutoring Volunteer',
    org: 'Academic Support Programme',
    description: 'Free tutoring in mathematics, computing, and science to students from underserved backgrounds.',
    tag: 'Education · Mentorship',
    color: 'green',
    icon: 'school',
  },
  {
    year: 'Ongoing',
    title: 'Public Speaking & Leadership Development',
    org: 'Community Leadership Programmes',
    description: 'Active participation in workshops and leadership programmes developing communication and organisational skills.',
    tag: 'Leadership',
    color: 'amber',
    icon: 'microphone',
  },
]

// ─── SKILLS MATRIX ────────────────────────────────────────────────────────────
export const SKILLS_MATRIX = [
  {
    category: 'Frontend',
    color: 'cyan',
    items: [
      { name: 'React / Next.js', tag: 'Proficient' },
      { name: 'JavaScript / TypeScript', tag: 'Proficient' },
      { name: 'HTML5 / CSS3', tag: 'Advanced' },
      { name: 'Tailwind CSS', tag: 'Proficient' },
    ],
  },
  {
    category: 'Backend',
    color: 'blue',
    items: [
      { name: 'Python / Django', tag: 'Advanced' },
      { name: 'REST API Design', tag: 'Proficient' },
      { name: 'SQL / PostgreSQL', tag: 'Competent' },
      { name: 'Authentication & Auth', tag: 'Proficient' },
    ],
  },
  {
    category: 'Networking',
    color: 'amber',
    items: [
      { name: 'TCP/IP & Subnetting', tag: 'Proficient' },
      { name: 'Cisco / Packet Tracer', tag: 'Proficient' },
      { name: 'VLANs / Routing', tag: 'Competent' },
      { name: 'Firewalls / Security', tag: 'Competent' },
    ],
  },
  {
    category: 'Interior Design',
    color: 'green',
    items: [
      { name: 'Space Planning', tag: 'Proficient' },
      { name: '3D Visualization', tag: 'Proficient' },
      { name: 'AutoCAD', tag: 'Competent' },
      { name: 'Lighting Design', tag: 'Competent' },
    ],
  },
]

// ─── ACADEMIC MODULES ─────────────────────────────────────────────────────────
export const ACADEMIC_MODULES = [
  {
    year: 'Programming Foundations',
    color: 'cyan',
    modules: [
      { name: 'Introductory Programming & Problem Solving', detail: 'Learned core programming logic, algorithms, and problem decomposition in Python' },
      { name: 'Introduction to Object-Oriented Programming', detail: 'Built class hierarchies, inheritance, encapsulation, and polymorphism using Python & Java' },
      { name: 'Fundamentals of Computing', detail: 'Covered binary, logic gates, memory architecture, CPU operations, and OS fundamentals' },
      { name: 'Computational Mathematics', detail: 'Applied discrete maths, logic, set theory, and graph theory to real computing problems' },
    ],
  },
  {
    year: 'Web & Full Stack Development',
    color: 'blue',
    modules: [
      { name: 'Internet Software Architecture & Databases', detail: 'Designed RESTful services, HTTP protocols, SQL schemas, and client-server architecture' },
      { name: 'Full Stack Development', detail: 'Built end-to-end web apps using Django backend + JavaScript/React frontend with database integration' },
      { name: 'Advanced Full Stack Development', detail: 'Implemented advanced state management, API design, authentication, and deployment pipelines' },
      { name: 'Collaborative Development', detail: 'Practised Agile workflows, Git branching strategies, code review, and CI/CD in team projects' },
    ],
  },
  {
    year: 'Cloud, AI & Systems',
    color: 'amber',
    modules: [
      { name: 'Cloud Systems', detail: 'Deployed and managed services on AWS — EC2, S3, Lambda, IAM, and VPC configurations' },
      { name: 'Concepts & Technologies of AI', detail: 'Explored machine learning pipelines, supervised/unsupervised learning, and neural network basics' },
      { name: 'Intelligent Systems', detail: 'Built knowledge-based reasoning systems and applied AI decision-making to real datasets' },
      { name: 'Artificial Intelligence & Machine Learning', detail: 'Implemented regression, classification, clustering, and deep learning models using Python & TensorFlow' },
    ],
  },
  {
    year: 'Algorithms, Data & Project',
    color: 'green',
    modules: [
      { name: 'Algorithms & Concurrency', detail: 'Analysed time/space complexity, implemented sorting/search algorithms, and built multi-threaded programs' },
      { name: 'Interactive 3D Applications', detail: 'Developed real-time 3D scenes using WebGL/Three.js with lighting, textures, and user interaction' },
      { name: 'Big Data', detail: 'Processed large-scale datasets using Hadoop, Spark, and MapReduce paradigms' },
      { name: 'Project & Professionalism', detail: 'Led final-year Donation & Volunteer Management System from requirements through deployment, applying full SDLC' },
    ],
  },
]
