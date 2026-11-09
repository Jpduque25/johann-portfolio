import { useState } from 'react';

// One row in the About page's Experience list. Hovering reveals the description under the
// company name and the card grows to fit. Focus opens it too, which covers keyboard users
// and taps on touch screens (tapping elsewhere blurs it and closes it again).
export default function ExperienceCard({ years, company, role, description }){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <li
            className={`experience-card ${isOpen ? "is-open" : ""}`}
            tabIndex={0}
            aria-expanded={isOpen}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
        >
            <span className="experience-card-years">{years}</span>

            <div className="experience-card-main">
                <h3 className="experience-card-company">{company}</h3>
                <div className="experience-card-reveal">
                    <p className="experience-card-description">{description}</p>
                </div>
            </div>

            <span className="experience-card-role card-text">{role}</span>
        </li>
    )
}
