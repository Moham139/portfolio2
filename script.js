document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Data
    const glitchElement = document.getElementById('hero-glitch');
    glitchElement.textContent = portfolioData.hero.glitchText;
    glitchElement.setAttribute('data-text', portfolioData.hero.glitchText);

    document.getElementById('hero-name').textContent = portfolioData.hero.name;
    document.getElementById('hero-title').textContent = portfolioData.hero.title;
    document.getElementById('hero-photo').src = portfolioData.hero.photo;
    document.getElementById('hero-desc').textContent = portfolioData.hero.description;

    new Typed("#typed-text", {
        strings: portfolioData.hero.typingRoles,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '_'
    });

    // 2. About Me
    document.getElementById('about-heading').textContent = portfolioData.about.heading;
    const aboutText = document.getElementById('about-text');
    portfolioData.about.paragraphs.forEach(p => {
        aboutText.innerHTML += `<p>${p}</p>`;
    });
    const aboutStats = document.getElementById('about-stats');
    portfolioData.about.stats.forEach(stat => {
        aboutStats.innerHTML += `
            <div class="stat-card card">
                <span class="stat-value">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `;
    });

    // 3. Education + Certifications
    const eduGrid = document.getElementById('education-grid');
    portfolioData.education.forEach(edu => {
        eduGrid.innerHTML += `
            <div class="card">
                <h3>${edu.degree}</h3>
                <p style="color: #00f3ff; margin: 5px 0;">${edu.institution} (${edu.period})</p>
                <p>${edu.desc}</p>
            </div>
        `;
    });

    const certGrid = document.getElementById('certifications-list');
    portfolioData.certifications.forEach(cert => {
        certGrid.innerHTML += `<li><i class="fa-solid fa-certificate"></i> ${cert}</li>`;
    });

    // 4. Skills — مقسمة لتخصصات
    const skillsGrid = document.getElementById('skills-grid');
    portfolioData.skills.forEach(group => {
        const chips = group.items.map(item => `<span>${item}</span>`).join('');
        skillsGrid.innerHTML += `
            <div class="skill-category card">
                <h3><i class="fa-solid fa-terminal"></i> ${group.category}</h3>
                <div class="tools-grid">${chips}</div>
            </div>
        `;
    });

    // 5. Experiences
    const expGrid = document.getElementById('experiences-grid');
    portfolioData.experiences.forEach(exp => {
        expGrid.innerHTML += `
            <div class="card">
                <h3>${exp.role}</h3>
                <p style="color: #00f3ff; margin: 5px 0;">${exp.company} (${exp.period})</p>
                <p>${exp.desc}</p>
            </div>
        `;
    });

    // 6. Services
    const servicesGrid = document.getElementById('services-grid');
    portfolioData.services.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="card">
                <i class="fa-solid ${service.icon} card-icon"></i>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
            </div>
        `;
    });

    // 7. Projects
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach(project => {
        projectsGrid.innerHTML += `
            <div class="card">
                <span style="color: #00f3ff; font-size: 0.8rem; text-transform: uppercase;">[ ${project.category} ]</span>
                <h3 style="margin-top: 8px;">${project.title}</h3>
                <p style="margin-bottom: 15px;">${project.desc}</p>
                <a href="${project.link}" target="_blank" class="btn btn-sm"><i class="fa-brands fa-github"></i> View Repository</a>
            </div>
        `;
    });

    // 8. Testimonials
    const testGrid = document.getElementById('testimonials-grid');
    portfolioData.testimonials.forEach(test => {
        testGrid.innerHTML += `
            <div class="card testimonial-card">
                <i class="fa-solid fa-quote-left quote-icon"></i>
                <p style="font-style: italic; margin-bottom: 15px;">"${test.quote}"</p>
                <h4 style="color: #00f3ff;">- ${test.author}</h4>
            </div>
        `;
    });

    // 9. CTA
    document.getElementById('cta-heading').textContent = portfolioData.cta.heading;
    document.getElementById('cta-heading').setAttribute('data-text', portfolioData.cta.heading);
    document.getElementById('cta-subtext').textContent = portfolioData.cta.subtext;
    document.getElementById('cta-btn').textContent = portfolioData.cta.buttonText;
    document.getElementById('cta-btn').href = "#contact";

    // 10. Contact Info
    document.getElementById('contact-email').href = `mailto:${portfolioData.contact.email}`;
    document.getElementById('contact-whatsapp').href = portfolioData.contact.whatsapp;
    document.getElementById('contact-linkedin').href = portfolioData.contact.linkedin;
    document.getElementById('contact-github').href = portfolioData.contact.github;

    // ---- UI Enhancements ----

    // قائمة الموبايل
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => navLinks.classList.remove('open'))
    );

    // تظليل اللينك النشط أثناء السكرول
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('#nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
        });
        navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });

    // أنيميشن ظهور العناصر عند السكرول
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.card, .topology-box').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});

// Matrix Rain Animation
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(6, 10, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00f3ff';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
