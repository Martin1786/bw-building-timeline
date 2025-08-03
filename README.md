# BW Building Timeline

An interactive timeline visualization tool for displaying building history and events using D3.js.

## 🏗️ Features

- **Interactive Timeline** - Visualize building events over time
- **Multiple Building Types** - Support for banks, grocery stores, residential, inns, and more
- **Event Types** - Construction, renovation, ownership changes, damage, and use changes
- **Hamburger Menu** - Collapsible instructions panel
- **CSV Data Import** - Upload your own building data
- **Sample Data** - Built-in example dataset
- **Responsive Design** - Works on desktop and mobile devices

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bw-building-timeline.git
   cd bw-building-timeline
   ```

2. **Open in browser:**
   - Double-click `BWTimeLineD3.html` or
   - Open with Chrome/Firefox/Safari

3. **Try the sample data:**
   - Click the hamburger menu (☰) for instructions
   - Click "Sample" to load example data
   - Hover over timeline events for details

## 📊 Data Format

Create a CSV file with the following columns:

```csv
building_name,address,side,type,year,event_type,description
First National Bank,125 Main St,left,bank,1925,renovation,Art Deco facade renovation
Murphy's Store,142 Main St,right,grocery,1922,construction,Original construction completed
```

### Required Fields:
- **building_name:** Name of the building
- **address:** Street address
- **side:** "left" or "right" (timeline position)
- **type:** Building type (see supported types below)
- **year:** Year of the event (1900-2025)
- **event_type:** Type of event (see supported types below)
- **description:** Description of what happened

### Supported Building Types:
- bank, grocery, residential, inn, hardware, theatre
- butcher, clothing, coffee, pharmacy, florist, tavern
- magic_shop, charity_shop, fishmonger, post_office
- wine_merchant, hairdresser, dentist

### Supported Event Types:
- construction, renovation, ownership, damage, use_change

## 🎨 Customization

### Colors and Icons
Edit `config.js` to customize:
- Event type colors
- Building type icons (Unicode emojis)
- Building card colors
- Timeline dimensions

### Styling
Modify `styles.css` to change:
- Color scheme
- Layout dimensions
- Typography
- Animations

## 📁 Project Structure

```
bw-building-timeline/
├── BWTimeLineD3.html      # Main application
├── styles.css             # CSS styles
├── config.js              # Configuration constants
├── sample_data.csv        # Example building data
├── README.md              # This file
└── D3TimelineTest.csv     # Additional test data
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity
- **D3.js** - Data visualization
- **PapaParse** - CSV parsing

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- D3.js community for the powerful visualization library
- PapaParse for CSV parsing capabilities
- Unicode Consortium for the building icons

---

**Made with ❤️ for building history enthusiasts** 