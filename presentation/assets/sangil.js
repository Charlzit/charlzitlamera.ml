
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s forwards';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Image loading animation
document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

// Info popup functionality
const infoCards = document.querySelectorAll('.info-card');
const infoPopup = document.getElementById('infoPopup');
const popupClose = document.querySelector('.info-popup-close');
const popupTitle = infoPopup.querySelector('h3');
const popupContent = infoPopup.querySelector('.content');

const cardContent = {
    'Geographic Distribution': {
        title: 'Sangil Geographic Distribution',
        content: `
                    <div class="info-section">
                        <p>The Sangil people have historically inhabited various regions across Mindanao, creating a rich tapestry of maritime communities that maintain strong cultural ties.</p>
                        
                        <div class="info-section-title">Key Settlement Areas</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-island-tropical"></i>
                                <h4>Balut & Sarangani</h4>
                                <p>Primary cultural center</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-water"></i>
                                <h4>South Cotabato</h4>
                                <p>Maritime trade hub</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-map-marked-alt"></i>
                                <h4>Davao del Sur</h4>
                                <p>Historical settlements</p>
                            </div>
                        </div>

                        <div class="info-section-title">Cultural Significance</div>
                        <ul>
                            <li><strong>Maritime Heritage:</strong> Strategic coastal locations enabling traditional fishing practices</li>
                            <li><strong>Trade Networks:</strong> Historical trading routes connecting Philippine and Indonesian waters</li>
                            <li><strong>Cultural Preservation:</strong> Communities maintaining traditional practices and customs</li>
                            <li><strong>Modern Integration:</strong> Adaptation to contemporary Philippine society while preserving identity</li>
                        </ul>

                        <div class="info-section-title">Historical Migration</div>
                        <p>The distribution pattern reflects ancient migration routes from Indonesian islands, showcasing the deep maritime expertise of the Sangil people in navigating these waters for centuries.</p>
                    </div>
                `
    },
    'Primary Language': {
        title: 'The Sangil Language: A Living Heritage',
        content: `
                    <div class="info-section">
                        <p>The Sangil language represents a unique blend of maritime vocabulary and Islamic influences, serving as a bridge between Philippine and Indonesian linguistic traditions.</p>
                        
                        <div class="info-section-title">Language Features</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-comments"></i>
                                <h4>Daily Communication</h4>
                                <p>Family and community</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-pray"></i>
                                <h4>Religious Terms</h4>
                                <p>Islamic vocabulary</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-ship"></i>
                                <h4>Maritime Terms</h4>
                                <p>Seafaring expertise</p>
                            </div>
                        </div>

                        <div class="info-section-title">Linguistic Heritage</div>
                        <ul>
                            <li><strong>Indonesian Roots:</strong> Close relation to languages of North Sulawesi</li>
                            <li><strong>Philippine Influence:</strong> Incorporation of local Filipino terms</li>
                            <li><strong>Arabic Elements:</strong> Religious and cultural terminology</li>
                            <li><strong>Maritime Vocabulary:</strong> Extensive nautical and fishing terms</li>
                        </ul>

                        <div class="info-section-title">Modern Usage</div>
                        <p>Today, the language continues to evolve while maintaining its core identity, with efforts to document and preserve traditional terms for future generations.</p>
                    </div>
                `
    },
    'Sasahara - The Sea Speech': {
        title: 'Sasahara: The Secret Language of the Sea',
        content: `
                    <div class="info-section">
                        <p>Sasahara represents a sophisticated system of maritime communication, developed to facilitate secure trading and fishing operations.</p>
                        
                        <div class="info-section-title">Key Components</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-compass"></i>
                                <h4>Navigation</h4>
                                <p>Directional terms</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-cloud-sun"></i>
                                <h4>Weather</h4>
                                <p>Climate patterns</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-fish"></i>
                                <h4>Fishing</h4>
                                <p>Marine knowledge</p>
                            </div>
                        </div>

                        <div class="info-section-title">Historical Significance</div>
                        <ul>
                            <li><strong>Trade Security:</strong> Protected sensitive information during voyages</li>
                            <li><strong>Cultural Bond:</strong> Strengthened maritime community ties</li>
                            <li><strong>Knowledge Transfer:</strong> Preserved traditional maritime wisdom</li>
                            <li><strong>Economic Advantage:</strong> Maintained trading competitiveness</li>
                        </ul>

                        <div class="info-section-title">Modern Relevance</div>
                        <p>While less used today, Sasahara remains a testament to the sophisticated maritime culture of the Sangil people and their mastery of sea navigation.</p>
                    </div>
                `
    },
    'Islamic Leadership': {
        title: 'Islamic Leadership in Sangil Society',
        content: `
                    <div class="info-section">
                        <p>Islamic leadership plays a central role in Sangil society, providing spiritual guidance and maintaining social order through religious principles.</p>
                        
                        <div class="info-section-title">Religious Authority</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-mosque"></i>
                                <h4>Imams</h4>
                                <p>Spiritual guides</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-book-reader"></i>
                                <h4>Islamic Scholars</h4>
                                <p>Religious education</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-hands-helping"></i>
                                <h4>Community Leaders</h4>
                                <p>Social guidance</p>
                            </div>
                        </div>

                        <div class="info-section-title">Key Responsibilities</div>
                        <ul>
                            <li><strong>Religious Ceremonies:</strong> Conducting marriages, naming ceremonies, and festivals</li>
                            <li><strong>Spiritual Guidance:</strong> Providing counsel on religious and personal matters</li>
                            <li><strong>Cultural Preservation:</strong> Maintaining Islamic traditions while respecting local customs</li>
                            <li><strong>Conflict Resolution:</strong> Mediating disputes according to Islamic principles</li>
                        </ul>
                    </div>
                `
    },
    'Community Organization': {
        title: 'Sangil Community Structure',
        content: `
                    <div class="info-section">
                        <p>The Sangil community is organized around maritime activities, with a strong emphasis on collective cooperation and traditional practices.</p>
                        
                        <div class="info-section-title">Economic Activities</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-fish"></i>
                                <h4>Fishing</h4>
                                <p>Primary livelihood</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-seedling"></i>
                                <h4>Agriculture</h4>
                                <p>Supplementary food</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-store"></i>
                                <h4>Trade</h4>
                                <p>Maritime commerce</p>
                            </div>
                        </div>

                        <div class="info-section-title">Social Structure</div>
                        <ul>
                            <li><strong>Family Units:</strong> Extended families form the basic social unit</li>
                            <li><strong>Community Groups:</strong> Organized around fishing and trading activities</li>
                            <li><strong>Traditional Leaders:</strong> Respected elders guide community decisions</li>
                            <li><strong>Knowledge Transfer:</strong> Skills passed down through generations</li>
                        </ul>
                    </div>
                `
    },
    'Marriage Customs': {
        title: 'Sangil Marriage Traditions',
        content: `
                    <div class="info-section">
                        <p>Sangil marriage customs represent a beautiful fusion of Islamic principles and local cultural traditions, creating unique ceremonies and practices.</p>
                        
                        <div class="info-section-title">Marriage Process</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-handshake"></i>
                                <h4>Proposal</h4>
                                <p>Family negotiations</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-scroll"></i>
                                <h4>Contract</h4>
                                <p>Islamic marriage</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-gifts"></i>
                                <h4>Celebration</h4>
                                <p>Community feast</p>
                            </div>
                        </div>

                        <div class="info-section-title">Cultural Elements</div>
                        <ul>
                            <li><strong>Traditional Rituals:</strong> Pre-wedding ceremonies and customs</li>
                            <li><strong>Religious Aspects:</strong> Islamic marriage requirements</li>
                            <li><strong>Community Role:</strong> Extended family involvement</li>
                            <li><strong>Cultural Symbols:</strong> Traditional dress and decorations</li>
                        </ul>
                    </div>
                `
    },
    'Maritime Crafts': {
        title: 'Sangil Maritime Craftsmanship',
        content: `
                    <div class="info-section">
                        <p>Maritime crafts are at the heart of Sangil material culture, representing centuries of seafaring expertise and artistic tradition.</p>
                        
                        <div class="info-section-title">Traditional Crafts</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-ship"></i>
                                <h4>Boat Building</h4>
                                <p>Vinta crafting</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-tools"></i>
                                <h4>Tools</h4>
                                <p>Navigation gear</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-home"></i>
                                <h4>Architecture</h4>
                                <p>Coastal designs</p>
                            </div>
                        </div>

                        <div class="info-section-title">Artistic Elements</div>
                        <ul>
                            <li><strong>Boat Design:</strong> Distinctive patterns and colors</li>
                            <li><strong>Tool Making:</strong> Specialized fishing and navigation equipment</li>
                            <li><strong>Architectural Style:</strong> Adaptation to coastal environment</li>
                            <li><strong>Decorative Arts:</strong> Maritime-inspired motifs</li>
                        </ul>
                    </div>
                `
    },
    'Oral Traditions': {
        title: 'Sangil Oral Heritage',
        content: `
                    <div class="info-section">
                        <p>Oral traditions form the backbone of Sangil cultural transmission, preserving history, knowledge, and values through generations.</p>
                        
                        <div class="info-section-title">Types of Narratives</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-history"></i>
                                <h4>Historical</h4>
                                <p>Migration tales</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-theater-masks"></i>
                                <h4>Cultural</h4>
                                <p>Folk stories</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-graduation-cap"></i>
                                <h4>Educational</h4>
                                <p>Life lessons</p>
                            </div>
                        </div>

                        <div class="info-section-title">Cultural Significance</div>
                        <ul>
                            <li><strong>Historical Record:</strong> Preserving community memory</li>
                            <li><strong>Cultural Values:</strong> Teaching moral principles</li>
                            <li><strong>Traditional Knowledge:</strong> Passing down practical skills</li>
                            <li><strong>Identity Formation:</strong> Strengthening cultural bonds</li>
                        </ul>
                    </div>
                `
    },
    'Healing Practices': {
        title: 'Traditional Sangil Healing Arts',
        content: `
                    <div class="info-section">
                        <p>Sangil healing practices represent a sophisticated blend of traditional medicine, Islamic healing principles, and deep ecological knowledge passed down through generations.</p>
                        
                        <div class="info-section-title">Healing Traditions</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-leaf"></i>
                                <h4>Herbal Medicine</h4>
                                <p>Natural remedies</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-pray"></i>
                                <h4>Spiritual Healing</h4>
                                <p>Islamic prayers</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-hands"></i>
                                <h4>Traditional Methods</h4>
                                <p>Physical therapy</p>
                            </div>
                        </div>

                        <div class="info-section-title">Key Components</div>
                        <ul>
                            <li><strong>Herbal Knowledge:</strong> Use of local medicinal plants and marine resources</li>
                            <li><strong>Islamic Medicine:</strong> Integration of Islamic healing principles</li>
                            <li><strong>Traditional Practices:</strong> Massage, bone-setting, and other physical therapies</li>
                            <li><strong>Spiritual Elements:</strong> Prayer and religious healing rituals</li>
                        </ul>

                        <div class="info-section-title">Healing Specialists</div>
                        <ul>
                            <li><strong>Herbalists:</strong> Experts in medicinal plants and their applications</li>
                            <li><strong>Religious Healers:</strong> Those who combine Islamic prayers with traditional methods</li>
                            <li><strong>Massage Practitioners:</strong> Specialists in traditional bodywork</li>
                            <li><strong>Midwives:</strong> Experts in maternal and child healthcare</li>
                        </ul>

                        <div class="info-section-title">Modern Integration</div>
                        <p>While maintaining traditional practices, the Sangil community also embraces modern healthcare when needed, creating a complementary approach to healing and wellness.</p>
                    </div>
                `
    },
    'Identity Preservation': {
        title: 'Sangil Identity and Cultural Preservation',
        content: `
                    <div class="info-section">
                        <p>The preservation of Sangil identity represents a delicate balance between maintaining traditional values and adapting to contemporary life.</p>
                        
                        <div class="info-section-title">Cultural Elements</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-landmark"></i>
                                <h4>Heritage</h4>
                                <p>Traditional values</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-globe-asia"></i>
                                <h4>Connections</h4>
                                <p>Indonesian roots</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-handshake"></i>
                                <h4>Integration</h4>
                                <p>Modern society</p>
                            </div>
                        </div>

                        <div class="info-section-title">Preservation Strategies</div>
                        <ul>
                            <li><strong>Cultural Education:</strong> Teaching younger generations about their heritage</li>
                            <li><strong>Language Maintenance:</strong> Preserving the Sangil language</li>
                            <li><strong>Traditional Arts:</strong> Continuing artistic practices</li>
                            <li><strong>Community Events:</strong> Regular cultural celebrations</li>
                        </ul>

                        <div class="info-section-title">Modern Challenges</div>
                        <ul>
                            <li><strong>Globalization:</strong> Balancing global influences with local traditions</li>
                            <li><strong>Technology:</strong> Using modern tools to preserve culture</li>
                            <li><strong>Migration:</strong> Maintaining identity in new locations</li>
                            <li><strong>Youth Engagement:</strong> Keeping younger generations connected</li>
                        </ul>
                    </div>
                `
    },
    'Community Cohesion': {
        title: 'Sangil Community Bonds',
        content: `
                    <div class="info-section">
                        <p>Community cohesion is central to Sangil society, with various practices and traditions that strengthen social bonds and maintain cultural continuity.</p>
                        
                        <div class="info-section-title">Social Structures</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-users"></i>
                                <h4>Gatherings</h4>
                                <p>Community events</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-hands-helping"></i>
                                <h4>Support</h4>
                                <p>Mutual assistance</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-balance-scale"></i>
                                <h4>Leadership</h4>
                                <p>Traditional council</p>
                            </div>
                        </div>

                        <div class="info-section-title">Community Practices</div>
                        <ul>
                            <li><strong>Regular Meetings:</strong> Community assemblies for decision-making</li>
                            <li><strong>Mutual Aid:</strong> Traditional support systems</li>
                            <li><strong>Collective Ceremonies:</strong> Shared celebrations and rituals</li>
                            <li><strong>Conflict Resolution:</strong> Traditional mediation processes</li>
                        </ul>

                        <div class="info-section-title">Social Benefits</div>
                        <ul>
                            <li><strong>Cultural Continuity:</strong> Maintaining traditions across generations</li>
                            <li><strong>Social Support:</strong> Community care networks</li>
                            <li><strong>Identity Reinforcement:</strong> Shared experiences and values</li>
                            <li><strong>Economic Cooperation:</strong> Traditional trading networks</li>
                        </ul>
                    </div>
                `
    },
    'Spiritual Heritage': {
        title: 'Sangil Spiritual Traditions',
        content: `
                    <div class="info-section">
                        <p>The spiritual heritage of the Sangil people represents a unique synthesis of Islamic faith and traditional cultural practices.</p>
                        
                        <div class="info-section-title">Religious Elements</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-mosque"></i>
                                <h4>Islamic Faith</h4>
                                <p>Core beliefs</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-star-and-crescent"></i>
                                <h4>Rituals</h4>
                                <p>Daily practices</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-book"></i>
                                <h4>Education</h4>
                                <p>Religious teaching</p>
                            </div>
                        </div>

                        <div class="info-section-title">Cultural Integration</div>
                        <ul>
                            <li><strong>Syncretic Practices:</strong> Blending of Islamic and local traditions</li>
                            <li><strong>Ceremonial Life:</strong> Religious celebrations and cultural festivals</li>
                            <li><strong>Sacred Knowledge:</strong> Transmission of spiritual wisdom</li>
                            <li><strong>Community Worship:</strong> Collective religious activities</li>
                        </ul>
                    </div>
                `
    },
    'Cultural Evolution': {
        title: 'Evolution of Sangil Culture',
        content: `
                    <div class="info-section">
                        <p>The evolution of Sangil culture demonstrates remarkable adaptability while maintaining core cultural values and traditions.</p>
                        
                        <div class="info-section-title">Adaptation Strategies</div>
                        <div class="info-grid">
                            <div class="info-grid-item">
                                <i class="fas fa-laptop"></i>
                                <h4>Technology</h4>
                                <p>Digital integration</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-graduation-cap"></i>
                                <h4>Education</h4>
                                <p>Modern learning</p>
                            </div>
                            <div class="info-grid-item">
                                <i class="fas fa-camera"></i>
                                <h4>Documentation</h4>
                                <p>Cultural recording</p>
                            </div>
                        </div>

                        <div class="info-section-title">Modern Initiatives</div>
                        <ul>
                            <li><strong>Digital Archives:</strong> Preserving cultural knowledge</li>
                            <li><strong>Youth Programs:</strong> Engaging new generations</li>
                            <li><strong>Cultural Centers:</strong> Modern spaces for tradition</li>
                            <li><strong>Social Media:</strong> Sharing cultural content</li>
                        </ul>
                    </div>
                `
    }
};

infoCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const content = cardContent[title];
        if (content) {
            popupTitle.textContent = content.title;
            popupContent.innerHTML = content.content;
            infoPopup.classList.add('show');
        }
    });
});

popupClose.addEventListener('click', () => {
    infoPopup.classList.remove('show');
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === infoPopup) {
        infoPopup.classList.remove('show');
    }
});

// Prevent popup close when clicking inside
infoPopup.querySelector('.content').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Back to Top functionality
const backToTop = document.querySelector('.back-to-top');
const progressBar = document.querySelector('.progress-bar');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Update progress bar
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / maxScroll) * 100;
    progressBar.style.width = scrollPercent + '%';

    // Update nav style
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Update active nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrolled >= sectionTop && scrolled < sectionTop + sectionHeight) {
            const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Smooth scroll to top
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Prevent popup close when clicking inside popup content
document.querySelectorAll('.info-popup *').forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
