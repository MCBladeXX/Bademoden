const portfolioData = {
    hero: {
        header: "Digitale <i>Erlebnisse</i> gestalten.",
        description: "Hallo, ich bin <b>Lisa Weber</b>. Eine Webdesignerin & UI/UX Expertin, die sich darauf spezialisiert hat, ästhetische, nutzerzentrierte und zugängliche Interfaces zu kreieren.",
        availability: "Verfügbar für Freelance-Projekte"
    },
    navigation: {
        about: "Über mich",
        skills: "Fähigkeiten",
        experience: "Erfahrung",
        projects: "Projekte",
        contact: "Kontakt",
        resume: "Lebenslauf"
    },
    about: {
        preheader: "Philosophie & Ansatz",
        header: "Über mich",
        text1: "Schon während meines Design-Studiums war ich fasziniert von der Schnittstelle zwischen visueller Gestaltung und Technologie. Heute mit über 6 Jahren Erfahrung in der Branche, helfe ich Marken dabei, ihre digitale Identität zu finden und in nutzerfreundliche Produkte zu übersetzen.",
        text2: "Mein Ansatz kombiniert strategisches Denken mit Liebe zum Detail. Ich glaube fest daran, dass herausragendes Webdesign nicht nur gut aussehen, sondern auch exakt auf die Zielgruppe zugeschnitten sein sollte.",
        text3: "Wenn ich nicht gerade Pixel in Figma schubse oder Frontend-Code optimiere, findet man mich meistens mit einer analogen Kamera in der Natur oder beim Ausprobieren neuer Kaffeeröstereien in der Stadt.",
        images: {
            desktop: "./img/d_computer.jpg",
            tablet: "./img/t_computer.jpg",
            mobile: "./img/m_computer.jpg",
            alt: "Computer"
        },
        cards: [
            {
                title: "Ästhetik trifft Funktion",
                description: "Gutes Design ist unsichtbar. Ich gestalte Interfaces, die nicht nur visuell ansprechend sind, sondern den Nutzer intuitiv an sein Ziel führen.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>`
            },
            {
                title: "Struktur & Systeme",
                description: "Ich liebe es, konsistente Design-Systeme aufzubauen. Skalierbare Komponenten und klare Typografie-Hierarchien sind das Fundament meiner Arbeit.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`
            },
            {
                title: "Nutzerzentriert",
                description: "Der Nutzer steht immer im Mittelpunkt. Durch Research, Wireframing und Prototyping stelle ich sicher, dass echte Probleme gelöst werden.",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>`
            }
        ]
    },
    skills: {
        preheader: "Expertise & Skills",
        header: "Meine Werkzeuge",
        categories: [
            {
                title: "Design Tools",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`,
                items: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator", "Framer"]
            },
            {
                title: "Frontend Entwicklung",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>`,
                items: ["HTML 5", "CSS3/SASS", "Tailwind CSS", "JavaScript", "React", "Webflow"]
            },
            {
                title: "UX Methoden",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>`,
                items: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Personas"]
            },
            {
                title: "Design Systeme",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>`,
                items: ["Component Libraries", "Design Tokens", "Styleguides", "Dokumentation"]
            },
            {
                title: "Visuelles Design",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>`,
                items: ["Typografie", "Farbtheorie", "Layout & Grid", "Ikonografie", "Branding"]
            },
            {
                title: "Motion & Interaktion",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path><path d="M12 17v4"></path><path d="M8 21h8"></path><rect x="2" y="3" width="20" height="14" rx="2"></rect></svg>`,
                items: ["Micro-Interactions", "After Effects", "Lottie", "CSS Animations"]
            }
        ]
    }
};