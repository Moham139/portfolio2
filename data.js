const portfolioData = {
    hero: {
        glitchText: "$ Security Starts Here",
        name: "Mohamed Abdelfattah",
        title: "Cybersecurity Engineer — Offensive Security & Infrastructure",
        // ▼▼ حط اسم صورتك هنا (نفس فولدر المشروع)
        // الأبعاد المثالية: بورتريه 600×720 بكسل أو أكبر — الإطار 300×360 و object-fit: cover هيقصها أوتوماتيك
        photo: "2.png",
        typingRoles: [
            "Penetration Tester.",
            "Infrastructure Security.",
            "Web Application Pentesting.",
            "System Administration."
        ],
        description: "Cybersecurity Engineer specializing in offensive security, infrastructure security, web penetration testing, and system administration — hands-on with Nmap, Metasploit, Wireshark, Burp Suite, Linux, and FortiGate."
    },

    about: {
        heading: "Who_Am_I",
        paragraphs: [
            "Cybersecurity Engineer specializing in offensive security, infrastructure security, web penetration testing, and system administration.",
            "Hands-on experience with Nmap, Metasploit, Wireshark, Burp Suite, Linux, and FortiGate. CCNA certified, with training in Network Security (NTI), Ethical Hacking (CEH), FortiGate cybersecurity, and Web Penetration Testing (Hack The Box).",
            "Designed and implemented multiple cybersecurity projects, including a full enterprise-like infrastructure using FortiGate and Windows Servers (Active Directory, site-to-site VPN, web server, syslog server, and RADIUS), as well as web applications with a PHP backend.",
            "Strong soft skills: teamwork, communication, problem-solving, and leadership — working effectively in collaborative environments. Ready to contribute in a professional setting, with a strong willingness to learn, adapt, and take on new challenges in cybersecurity."
        ],
        stats: [
            { value: "3", label: "NTI Security Programs" },
            { value: "9", label: "Certifications" },
            { value: "Top 10", label: "OWASP — Exploited & Patched" },
            { value: "3", label: "Major Security Labs" },
            { value: "—", label: "Reserved_For_Something_New" }
        ]
    },

    education: [
        {
            degree: "B.Sc. Statistics & Computer Science",
            institution: "Mansoura University",
            period: "2022 - 2026",
            desc: "Analytical foundation in statistics, probability, and programming — Python, Java, C++, and databases. The security track was self-driven: Hack The Box labs and hands-on NTI & Cisco training beyond the classroom."
        }
    ],

    certifications: [
        "CCNA — Cisco Certified Network Associate",
        "Network Security — Cisco Networking Academy",
        "Ethical Hacking (CEH) — Professional Training",
        "Web Penetration Testing — Hack The Box",
        "Fortinet Cybersecurity — NTI",
        "Ethical Hacking — Mahara-Tech (NTI)",
        "Red Hat System Administration I — Mahara-Tech",
        "Python Programming — Mahara-Tech",
        "Computer Network Fundamentals — Mahara-Tech",
        "Cloud & Virtualization Concepts — Mahara-Tech"
    ],

    // كل مهارة الآن { category, items } لعرضها مقسمة
    skills: [
        {
            category: "Cybersecurity & Pentesting",
            items: ["Ethical Hacking", "Network Pentesting", "Web App Security (OWASP Top 10)", "Vulnerability Assessment (VAPT)", "Linux Hardening", "System Administration"]
        },
        {
            category: "Networking & Infrastructure",
            items: ["TCP/IP & OSI", "FortiGate NGFW", "Cisco ASA & Zone-Based Firewall", "IPsec VPNs (S2S & Remote-Access)", "AAA (RADIUS / TACACS+)", "ACLs & Port Security", "Active Directory"]
        },
        {
            category: "Security Tools",
            items: ["Nmap", "Burp Suite", "Metasploit", "Wireshark", "Wazuh SIEM", "Cisco Packet Tracer"]
        },
        {
            category: "Programming & OS",
            items: ["Python Scripting", "PHP & AJAX", "SQL", "HTML/CSS/JS", "Kali & Parrot OS", "Windows Server & AD"]
        }
    ],

    experiences: [
        {
            role: "Freelance Security Researcher & Pentester",
            company: "Self-Employed",
            period: "2025 - Present",
            desc: "Building deliberately vulnerable PHP web apps to demonstrate OWASP Top 10 exploitation (XSS, SQLi, IDOR, Path Traversal) and its remediation. Practicing end-to-end VAPT on local labs — from Nmap reconnaissance to Metasploit and Burp Suite exploitation."
        },
        {
            role: "Fortinet Cybersecurity — Team Leader & Security Administrator",
            company: "National Telecommunication Institute (NTI)",
            period: "Apr 2026",
            desc: "Deployed a full security stack: FortiGate NGFW integrated with Windows Server for centralized management. Implemented strict firewall policies, VPN configurations, and secure session management; mitigated threats via system hardening."
        },
        {
            role: "Ethical Hacking Trainee",
            company: "National Telecommunication Institute (NTI)",
            period: "Mar 2025",
            desc: "End-to-end penetration testing on lab environments — reconnaissance (Nmap) to exploitation (Metasploit, Burp Suite). Demonstrated exploitation and mitigation of OWASP Top 10 vulnerabilities and full network/web vulnerability assessments."
        },
        {
            role: "Network Security Trainee",
            company: "National Telecommunication Institute (NTI)",
            period: "Sep 2024",
            desc: "Designed secure network architectures with AAA (RADIUS/TACACS+), hardened devices with Extended ACLs, port security, and disabled unused ports; configured secure routers, switches, and VPNs across TCP/IP architectures."
        },
        {
            role: "Support Member (Volunteering)",
            company: "CIS Team",
            period: "Sep 2024 - Sep 2025",
            desc: "Liaison between instructor and team members; provided proactive troubleshooting and progress reporting for technical and project tasks."
        }
    ],

    services: [
        {
            icon: "fa-bug",
            title: "Web Application Pentesting",
            desc: "Deep-dive VAPT against OWASP Top 10 — SQLi, XSS, IDOR, Path Traversal — delivered with reproduction steps and fix recommendations."
        },
        {
            icon: "fa-network-wired",
            title: "Network Pentesting & Auditing",
            desc: "Infrastructure reconnaissance and assessment using Nmap, Wireshark, and Metasploit to expose misconfigurations before attackers do."
        },
        {
            icon: "fa-shield-halved",
            title: "Firewall & Secure Architecture",
            desc: "FortiGate NGFW deployment, firewall policy design, VPN configuration, AAA (RADIUS/TACACS+), and device hardening."
        },
        {
            icon: "fa-server",
            title: "SOC & SIEM Monitoring",
            desc: "Wazuh SIEM setup and tuning to detect brute-force attempts, unauthorized access, and anomalies across Windows and Linux agents."
        }
    ],

    projects: [
        {
            id: "lab-topology",
            title: "Enterprise-Like Security Infrastructure",
            category: "Infrastructure Security Lab",
            desc: "Full enterprise-like infrastructure: FortiGate NGFW integrated with Windows Servers — Active Directory, site-to-site VPN, web server, syslog server, and RADIUS — hardened with strict firewall policies and secure session management.",
            link: "https://github.com/your-username/enterprise-security-lab"
        },
        {
            id: "netsec-topology",
            title: "Cisco Network Security Design (Packet Tracer)",
            category: "Network Security & Architecture",
            desc: "End-to-end enterprise design implementing the Cisco Network Security curriculum: AAA (RADIUS/TACACS+), Extended ACLs, ASA & Zone-Based Policy Firewall, Layer 2 attack mitigation (Port Security, DHCP Snooping), IPsec site-to-site & remote-access VPNs, and IPS.",
            link: "https://github.com/your-username/cisco-network-design"
        },
        {
            id: "websec-labs",
            title: "Web Security & Vulnerability Labs",
            category: "Offensive Security",
            desc: "Custom-built PHP/AJAX applications engineered to practice and demonstrate exploitation of XSS, SQL Injection, IDOR, and Path Traversal — each with documented remediation.",
            link: "https://github.com/your-username/web-security-labs"
        }
    ],

    testimonials: [
        {
            quote: "Mohamed showed remarkable dedication and technical precision during the NTI security programs. His grasp of firewall administration and threat monitoring is top-tier.",
            author: "Technical Mentor — NTI"
        },
        {
            quote: "Reliable, proactive, and always ready to troubleshoot. He kept the whole team on track and delivered clear progress reports every step of the way.",
            author: "Team Lead — CIS Team"
        }
    ],

    cta: {
        heading: "Ready to Secure Your Infrastructure?",
        subtext: "Currently accepting freelance opportunities for Web/Network VAPT, firewall hardening, and SOC consulting.",
        buttonText: "Establish_Secure_Connection"
    },

    contact: {
        email: "bdh30104@gmail.com",
        whatsapp: "https://wa.me/201061937421",
        github: "https://github.com",
        linkedin: "https://linkedin.com/in/mohamedabdelfattah1"
    }
};
