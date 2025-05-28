// Average gun-related incidents statistics
        const incidentsPerMinute = 0.12; // Average incidents per minute
        const incidentsPerSecond = incidentsPerMinute / 60; // Calculate incidents per second
        
        // Statistics ratios based on research
        const STATS = {
            homicideRate: 0.38, // 38% of gun incidents are homicides
            suicideRate: 0.6, // 60% of gun deaths are suicides
            massShootingRate: 0.01, // 1% are mass shootings
            accidentalRate: 0.01, // 1% are accidental
            
            urbanRate: 0.65, // 65% in urban areas
            suburbanRate: 0.25, // 25% in suburban areas
            ruralRate: 0.1, // 10% in rural areas
            homeRate: 0.48, // 48% happen at home
            
            deathRate: 0.35, // 35% of incidents result in death
            injuryRate: 0.65 // 65% of incidents result in injury
        };
        
        // Initialize counters and progress variables
        let incidentCount = 0;
        let progress = 0;
        let startTime = Date.now();
        let currentView = 'live';
        
        // Get all counter elements
        const counters = {
            incident: document.getElementById('incidentCounter'),
            homicide: document.getElementById('homicideCounter'),
            suicide: document.getElementById('suicideCounter'),
            massShooting: document.getElementById('massShootingCounter'),
            accidental: document.getElementById('accidentalCounter'),
            urban: document.getElementById('urbanCounter'),
            suburban: document.getElementById('suburbanCounter'),
            rural: document.getElementById('ruralCounter'),
            home: document.getElementById('homeCounter'),
            deathsToday: document.getElementById('deathsToday'),
            injuriesToday: document.getElementById('injuriesToday')
        };
        
        // Create audio for beep (will only play if user interacts with page first)
        const beepSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAABw+Hj4rvjK+Pj4Jvk=');
        
        // Timer functions
        function updateElapsedTime() {
            const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
            let timeDisplay;
            
            if (elapsedSeconds < 60) {
                timeDisplay = `${elapsedSeconds} seconds`;
            } else if (elapsedSeconds < 3600) {
                const minutes = Math.floor(elapsedSeconds / 60);
                const seconds = elapsedSeconds % 60;
                timeDisplay = `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
            } else {
                const hours = Math.floor(elapsedSeconds / 3600);
                const minutes = Math.floor((elapsedSeconds % 3600) / 60);
                timeDisplay = `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
            }
            
            document.getElementById('timeElapsed').textContent = `Time elapsed: ${timeDisplay}`;
        }
        
        // Update all counters based on the main incident count
        function updateSubCounters() {
            counters.homicide.textContent = Math.floor(incidentCount * STATS.homicideRate);
            counters.suicide.textContent = Math.floor(incidentCount * STATS.suicideRate);
            counters.massShooting.textContent = Math.floor(incidentCount * STATS.massShootingRate);
            counters.accidental.textContent = Math.floor(incidentCount * STATS.accidentalRate);
            
            counters.urban.textContent = Math.floor(incidentCount * STATS.urbanRate);
            counters.suburban.textContent = Math.floor(incidentCount * STATS.suburbanRate);
            counters.rural.textContent = Math.floor(incidentCount * STATS.ruralRate);
            counters.home.textContent = Math.floor(incidentCount * STATS.homeRate);
            
            counters.deathsToday.textContent = Math.floor(incidentCount * STATS.deathRate);
            counters.injuriesToday.textContent = Math.floor(incidentCount * STATS.injuryRate);
        }
        
        // Main update function
        function updateCounter() {
            // Increment the progress by the incidents per second
            progress += incidentsPerSecond;
            
            // If progress exceeds 1, update the counter
            if (progress >= 1) {
                incidentCount += 1; // Increment the whole number
                progress -= 1; // Subtract 1 from progress for next cycle
                updateSubCounters();
            }
            
            // Update the main counter
            counters.incident.textContent = incidentCount;
            
            // Update the progress bar
            const progressBar = document.getElementById('progressBar');
            progressBar.style.width = (progress * 100) + '%';
            
            // Flashing effect when the progress bar is 80% full
            if (progress >= 0.8) {
                progressBar.classList.add('nearing-full');
                document.body.classList.add('flashing');
                
                // Try to play beep sound when the progress is nearing the next whole number (at 90%)
                if (progress >= 0.9) {
                    beepSound.play().catch(err => {
                        // Silent error - browser may require user interaction before playing audio
                    });
                }
            } else {
                progressBar.classList.remove('nearing-full');
                document.body.classList.remove('flashing');
            }
            
            // When progress bar is full, make it flash red and reset
            if (progress < 0.1 && incidentCount > 0) {
                progressBar.classList.add('full');
                setTimeout(() => {
                    progressBar.classList.remove('full');
                }, 500);
            }
            
            updateElapsedTime();
        }
        
        // View toggling functionality
        document.getElementById('liveBtn').addEventListener('click', function() {
            setActiveView('live');
        });
        
        document.getElementById('yearlyBtn').addEventListener('click', function() {
            setActiveView('yearly');
        });
        
        document.getElementById('demographicsBtn').addEventListener('click', function() {
            setActiveView('demographics');
        });
        
        function setActiveView(viewName) {
            // Update button states
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Hide all views
            document.getElementById('liveView').style.display = 'none';
            document.getElementById('yearlyView').style.display = 'none';
            document.getElementById('demographicsView').style.display = 'none';
            
            // Show the selected view and activate button
            if (viewName === 'live') {
                document.getElementById('liveView').style.display = 'block';
                document.getElementById('liveBtn').classList.add('active');
            } else if (viewName === 'yearly') {
                document.getElementById('yearlyView').style.display = 'block';
                document.getElementById('yearlyBtn').classList.add('active');
            } else if (viewName === 'demographics') {
                document.getElementById('demographicsView').style.display = 'block';
                document.getElementById('demographicsBtn').classList.add('active');
            }
            
            currentView = viewName;
        }
        
        // Start the counter updates
        setInterval(updateCounter, 50); // Update every 50ms for smooth animation
        
        // Initialize display
        updateCounter();
        updateSubCounters();