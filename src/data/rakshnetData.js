export const navData = {
  whatWeDo: [
    { name: "Assessment & Consulting", href: "/what-we-do/services/assessment-counsulting" },
    { name: "Managed Services", href: "/what-we-do/services/managed-services" },
    { name: "Cybersecurity", href: "/what-we-do/services/cyber-security" },
    { name: "Next Gen Network", href: "/what-we-do/services/next-gen-network" },
    { name: "AI-Driven Solutions", href: "/what-we-do/services/ai-driven-solutions" },
    { name: "Smart Solutions", href: "/what-we-do/services/smart-solutions" },
    { name: "Unified Collaboration & Communication", href: "/what-we-do/services/unified-collaboration-communication" },
    { name: "ELV", href: "/what-we-do/services/elv" }
  ],
  whatWeThink: [
    { name: "RakshNet", href: "/rakshnet/", isCurrent: true },
    { name: "PRIME", href: "/prime" }
  ],
  whatWeServe: {
    enterpriseNetworks: [
      { name: "Point to Point Device", href: "/product-category/enterprise-networks/point-to-point-device" },
      { name: "Routers", href: "/product-category/enterprise-networks/routers" },
      { name: "SD WAN", href: "/product-category/enterprise-networks/sd-wan" },
      { name: "SOHO Products", href: "/product-category/enterprise-networks/soho-products" },
      { name: "Switches", href: "/product-category/enterprise-networks/switches" },
      { name: "Wi-Fi Access Points", href: "/product-category/enterprise-networks/wi-fi-access-points" },
      { name: "Wi-Fi Controllers", href: "/product-category/enterprise-networks/wi-fi-controller" }
    ],
    security: [
      { name: "Cybersecurity", href: "/product-category/security/cybersecurity" },
      { name: "Gateways", href: "/product-category/security/gateways" },
      { name: "Hotspot Gateway", href: "/product-category/security/hotspot-gateway-aaa-authentication" },
      { name: "Next Generation Firewall", href: "/product-category/security/next-generation-firewall" }
    ],
    collaboration: [
      { name: "EPBX /IPBX", href: "/product-category/unified-collaboration-and-communication/epbx-ipbx" },
      { name: "IP Phones", href: "/product-category/unified-collaboration-and-communication/ip-phones" },
      { name: "Video Conferencing", href: "/product-category/unified-collaboration-and-communication/video-conferencing" }
    ],
    elv: [
      { name: "Access Control", href: "/product-category/elv/access-control" },
      { name: "Alarm System", href: "/product-category/elv/alarm-system" },
      { name: "CCTV", href: "/product-category/elv/cctv" },
      { name: "Optics And Accessories", href: "/product-category/elv/optics-and-accessories" },
      { name: "Public Address System", href: "/product-category/elv/public-address-system" }
    ],
    smartUtilities: [
      { name: "Display", href: "/product-category/smart-utilities/display" },
      { name: "Printers", href: "/product-category/smart-utilities/printers" }
    ]
  },
  brandsHref: "/brands",
  careersHref: "/careers",
  enquireHref: "/contact"
};

export const heroData = {
  badge: "SOVEREIGN CYBER DEFENSE PLATFORM",
  titleMain: "Secure Your Digital",
  titleGradient: "Sovereignty with Silgate Secure",
  description: "India's first comprehensive sovereign cyber defense platform designed to protect critical infrastructure, government networks, and national digital assets with military-grade security and AI-powered threat intelligence.",
  scheduleHref: "/contact",
  whitepaperHref: "#"
};

export const challengeData = {
  label: "The Challenge",
  title: "India's Cyber Threat Landscape Demands Action",
  description: "India faces over 1.5 million cyber attacks daily, with critical infrastructure and government networks increasingly targeted by sophisticated threat actors. Traditional foreign solutions pose sovereignty risks and cannot address India-specific threats.",
  stats: [
    { number: "1.5M+", label: "Daily Cyber Attacks" },
    { number: "300%", label: "Increase Since 2020" },
    { number: "₹4.2L Cr", label: "Annual Damage Cost" }
  ],
  solutionLabel: "The Solution",
  solutionTitle: "Sovereign Defense Stack",
  solutionLayers: [
    {
      layer: "1",
      title: "Indigenous Technology",
      desc: "Built in India, No Foreign Dependencies",
      type: "shield"
    },
    {
      layer: "2",
      title: "AI-Powered Intelligence",
      desc: "Real-time Threat Detection & Response",
      type: "ai"
    },
    {
      layer: "3",
      title: "Complete Data Sovereignty",
      desc: "100% India-Based Infrastructure",
      type: "lock"
    }
  ],
  resultText: "Nation-Grade Protection"
};

export const whyRakshNetData = {
  label: "Why RakshNet",
  title: "The Only Platform Built for India's Digital Sovereignty",
  subtitle: "While others adapt foreign solutions, we built RakshNet from the ground up for India's unique security needs",
  cards: [
    {
      title: "100% Data Sovereignty",
      description: "All data processing, storage, and analytics happen within Indian borders. Your critical infrastructure data never leaves the country.",
      badge: "Indigenous Technology",
      iconType: "shield"
    },
    {
      title: "AI-Powered Threat Intelligence",
      description: "Advanced machine learning models trained specifically on India-specific attack patterns and threat vectors.",
      badge: "Real-Time Protection",
      iconType: "clock"
    },
    {
      title: "Full Regulatory Compliance",
      description: "Pre-configured for IT Act, CERT-In guidelines, RBI regulations, and all Indian government security standards.",
      badge: "Government-Ready",
      iconType: "file"
    },
    {
      title: "Zero Foreign Dependencies",
      description: "Complete control over your security infrastructure with no reliance on foreign vendors or cloud providers.",
      badge: "Supply Chain Secure",
      iconType: "code"
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Future-proof security with post-quantum cryptographic algorithms protecting against emerging quantum computing threats.",
      badge: "Next-Gen Security",
      iconType: "lock"
    },
    {
      title: "Scalable Architecture",
      description: "Designed to protect everything from small government departments to nationwide critical infrastructure networks.",
      badge: "Enterprise Scale",
      iconType: "cube"
    }
  ]
};

export const architectureData = {
  label: "Architecture",
  title: "How RakshNet Protects Your Infrastructure",
  description: "A comprehensive, multi-layered defense system that detects, analyzes, and responds to threats in real-time",
  stages: [
    {
      number: "01",
      title: "Data Ingestion",
      stageClass: "input-stage",
      items: ["Network Traffic", "Endpoint Logs", "Cloud Events", "User Activities"]
    },
    {
      number: "02",
      title: "AI Analysis",
      stageClass: "processing-stage",
      items: ["Threat Detection", "Behavior Analysis", "Pattern Recognition", "Risk Scoring"]
    },
    {
      number: "03",
      title: "Automated Response",
      stageClass: "action-stage",
      items: ["Block Threats", "Isolate Systems", "Alert Teams", "Auto-Remediate"]
    }
  ],
  metrics: [
    { value: "<1ms", label: "Detection Time" },
    { value: "100%", label: "Automated" },
    { value: "24/7", label: "Monitoring" }
  ]
};

export const coreCapabilitiesData = {
  label: "Core Capabilities",
  title: "Comprehensive Cyber Defense Architecture",
  description: "RakshNet provides end-to-end protection with advanced threat detection, real-time monitoring, and autonomous response capabilities built specifically for sovereign infrastructure.",
  cards: [
    {
      title: "Advanced Threat Intelligence",
      description: "AI-powered threat detection and analysis system that identifies and neutralizes sophisticated cyber threats in real-time using machine learning algorithms and behavioral analysis.",
      iconType: "shield"
    },
    {
      title: "Real-Time Monitoring",
      description: "24/7 continuous surveillance of network traffic, system activities, and potential vulnerabilities with instant alerts and automated incident response protocols.",
      iconType: "clock"
    },
    {
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security model with continuous verification, micro-segmentation, and least-privilege access controls across all network layers.",
      iconType: "lock"
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Future-proof cryptographic protection using post-quantum algorithms to safeguard sensitive data against emerging quantum computing threats.",
      iconType: "cube"
    },
    {
      title: "Autonomous Response",
      description: "Automated threat mitigation and incident response system that takes immediate action to contain and neutralize security breaches without human intervention.",
      iconType: "pulse"
    },
    {
      title: "Sovereign Technology Stack",
      description: "100% indigenous platform built entirely in India with zero foreign dependencies, ensuring complete control over security infrastructure and updates.",
      iconType: "layers"
    }
  ]
};

export const operationalExcellenceData = {
  label: "Operational Excellence",
  title: "Five Pillars of Operational Capability",
  description: "A comprehensive framework that ensures end-to-end security, compliance, and operational resilience for India's critical digital infrastructure.",
  pillars: [
    {
      id: "cyber-defence",
      color: "blue",
      title: "Cyber\nDefence",
      description: "Advanced threat intelligence and AI-driven classification."
    },
    {
      id: "core-operation",
      color: "teal",
      title: "Core Operation\n& Response",
      description: "Real-time monitoring, autonomous SOC capabilities, and playbook-based SOAR."
    },
    {
      id: "infrastructure-protection",
      color: "seafoam",
      title: "Infrastructure\nProtection",
      description: "Zero Trust architecture, Next-Gen firewalls, and EDR/XDR platforms."
    },
    {
      id: "investigations-forensics",
      color: "light-green",
      title: "Investigations\n& Forensics",
      description: "OSINT capabilities, forensic tools, and malware analysis sandboxes."
    },
    {
      id: "governance-compliance",
      color: "yellow-green",
      title: "Governance,\nRisk & Compliance",
      description: "Adherence to ISO 27001, ISO 22301, and NIST regulatory guidelines."
    }
  ]
};

export const rakshNetLayerData = {
  label: "Comprehensive Protection",
  title: "The RakshNet Layer: A Comprehensive Security Stack",
  description: "Multi-layered defense architecture that protects your infrastructure at every level with AI-powered intelligence and automated response capabilities.",
  layers: [
    {
      id: "threat-intel",
      colorClass: "layer-blue",
      title: "Threat Intelligence Engine",
      description: "AI-powered threat detection and classification system that identifies and categorizes security threats in real-time.",
      features: ["AI-Driven Classification", "Real-time Threat Feeds", "Anomaly Detection Engine"]
    },
    {
      id: "nac",
      colorClass: "layer-teal",
      title: "Network Access Control",
      description: "Zero Trust architecture with next-generation firewalls ensuring secure network access at all levels.",
      features: ["Zero Trust Security", "Next-Gen Firewall & WAF", "Secure DNS Protection"]
    },
    {
      id: "endpoint",
      colorClass: "layer-seafoam",
      title: "Endpoint Protection",
      description: "Advanced EDR/XDR platform protecting all endpoints with continuous monitoring and automated response.",
      features: ["EDR/XDR Platform", "Malware Analysis Sandbox", "Auto Remediation"]
    },
    {
      id: "email-web",
      colorClass: "layer-blue",
      title: "Email & Web Security",
      description: "Multi-layered protection against phishing, malware, and web-based threats with advanced filtering.",
      features: ["Email Security Filter", "Anti-Phishing Gateway", "Content Inspection"]
    },
    {
      id: "soc",
      colorClass: "layer-teal",
      title: "Security Operations Center",
      description: "24/7 SOC with SIEM integration and playbook-based automation for rapid incident response.",
      features: ["SIEM Module", "Playbook-based SOAR", "24/7 Monitoring"]
    },
    {
      id: "governance",
      colorClass: "layer-seafoam",
      title: "Governance & Compliance",
      description: "Comprehensive compliance framework ensuring adherence to Indian regulations and international standards.",
      features: ["Regulatory Compliance", "Audit Trails", "Policy Management"]
    },
    {
      id: "iam",
      colorClass: "layer-green",
      title: "Identity & Access Management",
      description: "Advanced identity verification and access control with multi-factor authentication and biometrics.",
      features: ["Multi-Factor Authentication", "Privileged Access Management", "Identity Verification"]
    },
    {
      id: "data-prot",
      colorClass: "layer-green",
      title: "Data Protection & Encryption",
      description: "Military-grade encryption and data loss prevention ensuring complete data sovereignty and security.",
      features: ["End-to-End Encryption", "Data Loss Prevention", "Quantum-Resistant Crypto"]
    },
    {
      id: "unified-dash",
      colorClass: "layer-blue",
      title: "Unified Dashboard",
      description: "Centralized command center providing complete visibility and control across all security layers.",
      features: ["Real-time Monitoring", "Threat Visualization", "Automated Reporting"]
    }
  ]
};

export const strategicAdvantagesData = {
  label: "Why Choose RakshNet",
  title: "Strategic Advantages for National Security",
  description: "Built by Indians, for India - ensuring complete data sovereignty and alignment with national security objectives.",
  advantages: [
    {
      number: "01",
      title: "Complete Data Sovereignty",
      description: "All data processing, storage, and analytics occur within Indian territory, ensuring full compliance with data localization requirements and national security protocols. Your sensitive information never leaves Indian jurisdiction."
    },
    {
      number: "02",
      title: "Indigenous Technology Stack",
      description: "Developed entirely in India with no foreign dependencies, eliminating supply chain risks and ensuring complete control over security updates, patches, and feature development aligned with national interests."
    },
    {
      number: "03",
      title: "Government-Grade Security",
      description: "Military-grade encryption, quantum-resistant algorithms, and security protocols designed specifically for protecting critical national infrastructure, government networks, and sensitive state operations."
    },
    {
      number: "04",
      title: "Rapid Threat Response",
      description: "AI-powered autonomous response system that detects and neutralizes threats in milliseconds, with dedicated security operations center providing 24/7 monitoring and human oversight for critical incidents."
    },
    {
      number: "05",
      title: "Regulatory Compliance",
      description: "Pre-configured compliance frameworks for IT Act, CERT-In guidelines, RBI regulations, and other Indian government standards, with automated audit trails and reporting capabilities."
    },
    {
      number: "06",
      title: "Scalable Architecture",
      description: "Cloud-native design that scales seamlessly from small government departments to large critical infrastructure networks, with consistent security posture across all deployment sizes."
    }
  ]
};

export const applicationsData = {
  label: "Applications",
  title: "Protecting India's Digital Infrastructure",
  description: "RakshNet secures the most critical systems across government, defense, finance, and essential services.",
  applications: [
    {
      title: "Government Networks",
      description: "Secure central and state government digital infrastructure, protecting citizen data, administrative systems, and inter-departmental communications.",
      color: "#0B5095",
      iconType: "building"
    },
    {
      title: "Defense Systems",
      description: "Military-grade protection for defense networks, command systems, and classified communications with highest security clearance.",
      color: "#1673C7",
      iconType: "shield"
    },
    {
      title: "Financial Institutions",
      description: "Protect banking infrastructure, payment systems, and financial data with RBI-compliant security frameworks and real-time fraud detection.",
      color: "#F8B83A",
      iconType: "creditCard"
    },
    {
      title: "Critical Infrastructure",
      description: "Safeguard power grids, water systems, transportation networks, and telecommunications infrastructure from cyber threats.",
      color: "#F48E33",
      iconType: "clock"
    },
    {
      title: "Healthcare Systems",
      description: "Secure patient data, medical records, and healthcare infrastructure while ensuring HIPAA and Indian healthcare regulations compliance.",
      color: "#F1613E",
      iconType: "checkCircle"
    }
  ]
};

export const technologyData = {
  label: "Technology",
  title: "Built on Cutting-Edge Innovation",
  description: "RakshNet leverages the latest advancements in AI, machine learning, and cybersecurity technologies.",
  items: [
    { name: "Artificial Intelligence", iconType: "ai" },
    { name: "Machine Learning", iconType: "ml" },
    { name: "Blockchain", iconType: "blockchain" },
    { name: "Edge Computing", iconType: "edge" },
    { name: "Quantum Cryptography", iconType: "quantum" },
    { name: "Zero Trust Security", iconType: "zeroTrust" }
  ]
};

export const finalCTAData = {
  title: "Ready to Secure India's Digital Future?",
  description: "Join leading government agencies, defense organizations, and critical infrastructure providers in protecting India's digital sovereignty with RakshNet.",
  scheduleHref: "/contact",
  whitepaperHref: "#"
};

export const footerData = {
  whatWeDo: [
    { name: "Assessment & Consulting", href: "/what-we-do/services/assessment-counsulting" },
    { name: "Managed Services", href: "/what-we-do/services/managed-services" },
    { name: "Security", href: "/what-we-do/services/cyber-security" },
    { name: "Next Gen Networks", href: "/what-we-do/services/next-gen-network" },
    { name: "AI Driven Solutions", href: "/what-we-do/services/ai-driven-solutions" },
    { name: "Smart Solutions", href: "/what-we-do/services/smart-solutions" },
    { name: "Unified Collaboration & Communication", href: "/what-we-do/services/unified-collaboration-communication" },
    { name: "ELV Solutions", href: "/what-we-do/services/elv" }
  ],
  usefulLinks: [
    { name: "Contact Us", href: "/contact" },
    { name: "Brands", href: "/brands" },
    { name: "Careers", href: "/careers" },
    { name: "RakshNet", href: "/rakshnet/" },
    { name: "PRIME", href: "/prime" },
    { name: "Who We Are", href: "/about-us" },
    { name: "Privacy Policy", href: "/privacy-policy" }
  ],
  getInTouch: {
    email: "manoj@silgatehhiring.com",
    phone: "+91 8108810916"
  },
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/" },
    { name: "Twitter", href: "https://twitter.com/" },
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "YouTube", href: "https://www.youtube.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" }
  ],
  indiaOffice: {
    name: "India head Office :",
    flag: "https://signellent.com/wp-content/smush-webp/2022/02/Flag_of_India.jpg.webp",
    address: "Signellent Technologies Limited, Borivali, Mumbai - 400 066"
  },
  canadaOffice: {
    name: "Canada head Office :",
    flag: "https://signellent.com/wp-content/smush-webp/2022/02/canada-Flag-1.png.webp",
    address: "Signellent Technologies.inc, 74 Bonham Blvd, Mississauga, Ontario L5M 2N8, Canada"
  },
  regionalOffices: [
    { name: "Indore", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Indore-3-10x10.png.webp" },
    { name: "Pune", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Pune-10x10.png.webp" },
    { name: "Delhi NCR", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Delhi-10x10.png.webp" },
    { name: "Bengaluru", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Bengalur-10x10.png.webp" },
    { name: "Ahmedabad", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Ahemdabad-10x10.png.webp" },
    { name: "Lucknow", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Lucknow-10x10.png.webp" },
    { name: "Chennai", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Chennai-10x10.png.webp" },
    { name: "Hyderabad", icon: "https://signellent.com/wp-content/smush-webp/2022/02/Haydrabad-10x10.png.webp" }
  ],
  copyright: "Copyright © 2026 Signellent Technologies Ltd."
};
