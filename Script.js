 
        // Enhanced Data Storage System
        class DataStorage {
            constructor() {
                this.data = {
                    courses: this.getDefaultCourses(),
                    notes: this.getDefaultNotes()
                };
            }

            getDefaultCourses() {
                return [
                    { id: 1, title: 'Advanced Calculus Complete Course', subject: 'math', description: 'Master calculus with step-by-step explanations and interactive examples', youtubeQuery: 'calculus complete course', duration: '8 hours', rating: 4.8, author: 'MathTeacher Pro', enrolled: 1245 },
                    { id: 2, title: 'Quantum Physics for Beginners', subject: 'physics', description: 'Understand quantum mechanics fundamentals with visual demonstrations', youtubeQuery: 'quantum physics beginners', duration: '6 hours', rating: 4.6, author: 'PhysicsGuru', enrolled: 892 },
                    { id: 3, title: 'Organic Chemistry Mastery', subject: 'chemistry', description: 'Complete organic chemistry with 3D molecular visualizations', youtubeQuery: 'organic chemistry complete', duration: '10 hours', rating: 4.9, author: 'ChemExpert Lab', enrolled: 756 },
                    { id: 4, title: 'JavaScript Full Stack Development', subject: 'programming', description: 'Learn modern JavaScript and web development with real projects', youtubeQuery: 'javascript full course', duration: '12 hours', rating: 4.7, author: 'CodeMaster Pro', enrolled: 2134 },
                    { id: 5, title: 'Cell Biology and Genetics', subject: 'biology', description: 'Comprehensive biology course with 3D cell simulations', youtubeQuery: 'cell biology genetics', duration: '7 hours', rating: 4.5, author: 'BioTeacher Expert', enrolled: 643 },
                    { id: 6, title: 'Machine Learning Fundamentals', subject: 'programming', description: 'Introduction to AI and machine learning algorithms', youtubeQuery: 'machine learning course', duration: '15 hours', rating: 4.9, author: 'AI Academy', enrolled: 3421 },
                    { id: 7, title: 'Advanced Physics - Relativity', subject: 'physics', description: 'Explore Einstein\'s theories with interactive simulations', youtubeQuery: 'relativity physics course', duration: '9 hours', rating: 4.7, author: 'Physics Universe', enrolled: 567 },
                    { id: 8, title: 'Discrete Mathematics', subject: 'math', description: 'Essential math for computer science students', youtubeQuery: 'discrete mathematics', duration: '11 hours', rating: 4.6, author: 'Math Logic Pro', enrolled: 890 }
                ];
            }

            getDefaultNotes() {
                return [
                    { id: 1, title: 'Calculus Formula Sheet', subject: 'math', type: 'pdf', author: 'John Doe', downloads: 245, description: 'Complete formulas for differential and integral calculus', size: '2.4 MB', uploaded: new Date().toLocaleDateString() },
                    { id: 2, title: 'Physics Laws Summary', subject: 'physics', type: 'pdf', author: 'Jane Smith', downloads: 189, description: 'All major physics laws with examples and applications', size: '1.8 MB', uploaded: new Date().toLocaleDateString() },
                    { id: 3, title: 'Chemistry Reaction Charts', subject: 'chemistry', type: 'image', author: 'Mike Johnson', downloads: 156, description: 'Visual charts of common chemical reactions with mechanisms', size: '3.2 MB', uploaded: new Date().toLocaleDateString() },
                    { id: 4, title: 'Programming Cheat Sheet', subject: 'programming', type: 'pdf', author: 'Sara Wilson', downloads: 298, description: 'Essential programming concepts and syntax reference', size: '1.5 MB', uploaded: new Date().toLocaleDateString() },
                    { id: 5, title: 'Biology Diagrams Collection', subject: 'biology', type: 'image', author: 'Tom Brown', downloads: 134, description: 'Detailed biological system diagrams and structures', size: '4.1 MB', uploaded: new Date().toLocaleDateString() },
                    { id: 6, title: 'Linear Algebra Notes', subject: 'math', type: 'pdf', author: 'Alice Cooper', downloads: 167, description: 'Complete linear algebra with solved examples', size: '2.8 MB', uploaded: new Date().toLocaleDateString() }
                ];
            }
        }

        // Initialize data storage
        const storage = new DataStorage();

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            createShootingStars();
            createParticles();
            loadCourses();
            loadNotes();
            
            // Welcome message
            setTimeout(() => {
                showNotification('✨ Welcome to Enhanced ChhatroBondhu! Your smart study companion!', 'success');
            }, 1500);
        });

        // Enhanced background effects
        function createStars() {
            const starsContainer = document.querySelector('.stars');
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 2 + 1) + 's';
                starsContainer.appendChild(star);
            }
        }

        function createShootingStars() {
            const starsContainer = document.querySelector('.stars');
            for (let i = 0; i < 5; i++) {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.left = Math.random() * 100 + '%';
                shootingStar.style.top = Math.random() * 100 + '%';
                shootingStar.style.animationDelay = Math.random() * 10 + 's';
                shootingStar.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(shootingStar);
            }
        }

        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            setInterval(() => {
                if (document.querySelectorAll('.particle').length < 20) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    particlesContainer.appendChild(particle);
                    
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.remove();
                        }
                    }, 5000);
                }
            }, 200);
        }

        // Navigation
        function showSection(sectionId) {
            document.querySelectorAll('.main-content').forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Load section data
            if (sectionId === 'courses') loadCourses();
            if (sectionId === 'notes') loadNotes();
        }

        // Enhanced Course System
        function loadCourses() {
            displayCourses(storage.data.courses);
        }

        function searchCourses() {
            const query = document.getElementById('courseSearch').value.toLowerCase().trim();
            if (!query) {
                displayCourses(storage.data.courses);
                return;
            }
            
            const filtered = storage.data.courses.filter(course => 
                course.title.toLowerCase().includes(query) || 
                course.description.toLowerCase().includes(query) ||
                course.subject.toLowerCase().includes(query) ||
                course.author.toLowerCase().includes(query)
            );
            displayCourses(filtered);
        }

        function searchCoursesOnYouTube() {
            const query = document.getElementById('courseSearch').value.trim();
            if (!query) {
                showNotification('⚠️ Please enter a search term!', 'error');
                return;
            }
            
            const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' course tutorial')}`;
            window.open(youtubeUrl, '_self');
            showNotification('🚀 Opening YouTube search in new tab...', 'info');
        }

        function filterCourses(subject) {
            document.querySelectorAll('#courses .filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            const filtered = subject === 'all' ? storage.data.courses : storage.data.courses.filter(course => course.subject === subject);
            displayCourses(filtered);
        }

        function displayCourses(coursesToShow) {
            const grid = document.getElementById('coursesGrid');
            if (coursesToShow.length === 0) {
                grid.innerHTML = `
                    <div class="content-card" style="grid-column: 1 / -1; text-align: center;">
                        <h3>🔍 No courses found</h3>
                        <p>Try a different search term or filter. We're constantly adding new courses!</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = coursesToShow.map(course => `
                <div class="content-card">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div style="margin: 1.5rem 0;">
                        <span style="background: rgba(0,188,212,0.2); padding: 6px 12px; border-radius: 15px; font-size: 0.85rem; color: #00bcd4; font-weight: 600;">${course.subject.toUpperCase()}</span>
                        <span style="color: #00bcd4; margin-left: 15px; font-weight: 500;">⏱️ ${course.duration}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 20px; margin: 1.5rem 0; font-size: 0.9rem;">
                        <span style="color: #ffa726;">⭐ ${course.rating}/5</span>
                        <span style="color: #66bb6a;">👥 ${course.enrolled.toLocaleString()} enrolled</span>
                    </div>
                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem;">👨‍🏫 By: ${course.author}</p>
                    <button class="btn btn-primary" onclick="watchCourse('${course.youtubeQuery}')" style="width: 100%;">📺 Watch Course</button>
                </div>
            `).join('');
        }

        function watchCourse(youtubeQuery) {
            const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeQuery)}`;
            window.open(youtubeUrl, '_self');
            showNotification('🎬 Opening course on YouTube...', 'success');
        }

        // Enhanced Notes System
        function loadNotes() {
            displayNotes(storage.data.notes);
        }

        function searchNotesOnGoogle() {
            const query = document.getElementById('notesSearch').value.trim();
            if (!query) {
                showNotification('⚠️ Please enter a topic to search!', 'error');
                return;
            }

            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' study notes filetype:pdf')}`;
            window.open(searchUrl, '_self');
            showNotification('🔍 Searching Google for study materials...', 'success');
        }

        function displayNotes(notesToShow) {
            const grid = document.getElementById('notesGrid');
            if (notesToShow.length === 0) {
                grid.innerHTML = `
                    <div class="content-card" style="grid-column: 1 / -1; text-align: center;">
                        <h3>📝 No notes found</h3>
                        <p>Search Google for study materials or upload your own notes!</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = notesToShow.map(note => `
                <div class="content-card">
                    <h3>${note.title}</h3>
                    <p>${note.description}</p>
                    <div style="margin: 1.5rem 0;">
                        <span style="background: rgba(156,39,176,0.2); padding: 6px 12px; border-radius: 15px; font-size: 0.85rem; color: #ab47bc; font-weight: 600;">${note.type.toUpperCase()}</span>
                        <span style="background: rgba(0,188,212,0.2); padding: 6px 12px; border-radius: 15px; font-size: 0.85rem; color: #00bcd4; font-weight: 600; margin-left: 10px;">${note.subject.toUpperCase()}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 20px; margin: 1.5rem 0; font-size: 0.9rem;">
                        <span style="color: #66bb6a;">📥 ${note.downloads} downloads</span>
                        <span style="color: #ffa726;">📦 ${note.size}</span>
                    </div>
                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-bottom: 0.5rem;">👤 By: ${note.author}</p>
                    <p style="font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem;">📅 Uploaded: ${note.uploaded}</p>
                    <button class="btn btn-primary" onclick="showNotification('📄 Note viewing feature coming soon!', 'info')" style="width: 100%;">📄 View Note</button>
                </div>
            `).join('');
        }

        // Enhanced Notification System
        function showNotification(message, type = 'info') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = 'notification';
            
            // Add type-based styling
            if (type === 'error') {
                notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
            } else if (type === 'success') {
                notification.style.background = 'linear-gradient(45deg, #4caf50, #388e3c)';
            } else {
                notification.style.background = 'linear-gradient(45deg, #00bcd4, #2196f3)';
            }
            
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }

        // Debounce function for performance
        function debounce(func, delay) {
            let timeoutId;
            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }

        // Apply debounce to search functions
        const debouncedCourseSearch = debounce(searchCourses, 300);

        // Update search event listeners
        document.getElementById('courseSearch').onkeyup = debouncedCourseSearch;

        // Initialize with enhanced features
        setTimeout(() => {
            loadNotes();
        }, 100);
    