# "Pervasion": the Gun Violence Incident Counter

**Simulating a live data dashboard on U.S. gun-related incidents.**  
**Disclaimer: Estimated using U.S. incident averages. Not a live data feed.**

## 👀 [View the Dashboard](https://skylerfutrell.github.io/gvic-2025/)
## 🔥 Project Overview

This project offers a real-time simulation of gun-related incidents in the United States, emphasizing the frequency and impact of gun violence. It is built with a data dashboard approach to highlight various types of incidents (e.g., homicides, suicides, mass shootings) as well as demographic and geographic patterns.

> This visualization is designed to evoke awareness and emotional urgency through interactive, responsive, and animated components.

## ⚙️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** CSS Grid, Flexbox, Responsive Design
- **Fonts:** Bebas Neue & Roboto (Google Fonts)
- **Charting (Future Expansion):** [Chart.js](https://www.chartjs.org/)

## 📊 Features

### 🔴 Live Incident Counter
- Estimates gun-related incidents per second using known statistical averages.
- Animated, color-changing progress bar flashes red as new incidents approach.
- Audio beep alert (browser-permission dependent) enhances urgency.

### 📈 Statistical Breakdown
- Categorizes incident types: **Homicide**, **Suicide**, **Mass Shooting**, **Accidental**.
- Geographic segmentation: **Urban**, **Suburban**, **Rural**.
- Contextual details: % of incidents occurring **at home**, leading to **death** or **injury**.

### 📂 Multi-View Interface
- **Live View**: Real-time ticker with visual and audio feedback.
- **Yearly Stats**: Placeholder or expandable section for projected annualized data.
- **Demographics View**: Display population and location-based breakdowns.

### 🎨 UX/UI Enhancements
- Progress bar with flashing and color transitions for visual urgency.
- Layout adapts for mobile with full responsiveness.
- Toggle buttons allow user-friendly view switching.

## 🚨 Disclaimer

> This dashboard uses simulated data based on averages reported by the Gun Violence Archive and other public health sources.  
> **This is not a live data feed.** For real-time statistics, please visit [gunviolencearchive.org](https://www.gunviolencearchive.org/).

## 🧪 How to Use

### ✅ Live Preview
You can host this project locally or deploy it via platforms like GitHub Pages, Netlify, or Firebase Hosting.

### 🔧 Installation

1. Clone the repository:

       git clone https://github.com/your-username/gun-violence-counter.git
       cd gun-violence-counter

3. Open index.html in your preferred browser:

        open index.html  # macOS
        start index.html # Windows

## 📁 File Structure

        ├── index.html
        ├── styles.css
        ├── script.js
        └── README.md

## ♿ Accessibility & Performance

- Semantic HTML elements used for screen reader compatibility.
- Progress animations are kept minimal to avoid seizure risk.
- Light, fast-loading CSS/JS—no heavy libraries or frameworks.
- Mobile-friendly and optimized for all screen sizes.

## 📌 Future Improvements

- Integrate Chart.js for time-series visualizations.
- Fetch live or recent data from GVA via CSV or API (if permitted).
- Add local storage to persist user session incident counts.
- Expand demographic filters by age, race, and region.

## 🤝 Contributing

Contributions are welcome. Fork the project and submit a pull request with improvements or data integrations.

## License

This project is licensed under the GNU General Public License v3.0 [LICENSE](https://github.com/skylerfutrell/gvic-2025/blob/master/LICENSE).

