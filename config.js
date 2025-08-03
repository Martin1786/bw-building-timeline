// Event type colors
const eventColors = {
    renovation: "#38a169",
    ownership: "#d69e2e", 
    damage: "#e53e3e",
    use_change: "#805ad5",
    construction: "#3182ce"
};

// Building type icons (using Unicode symbols)
const buildingIcons = {
    bank: "🏦",
    grocery: "🏪", 
    residential: "🏠",
    inn: "🏨",
    hardware: "🔨",
    theatre: "🎭",
    butcher: "🥩",
    clothing: "👔",
    coffee: "☕",
    pharmacy: "💊",
    florist: "🌸",
    tavern: "🍺",
    magic_shop: "🔮",
    charity_shop: "♻️",
    fishmonger: "🐟",
    post_office: "📮",
    wine_merchant: "🍷",
    hairdresser: "💇",
    dentist: "🦷"
};

// Building type colors for cards
const buildingTypeColors = {
    bank: "#2b6cb0",
    grocery: "#38a169",
    residential: "#d69e2e",
    inn: "#805ad5",
    hardware: "#e53e3e",
    theatre: "#dd6b20",
    butcher: "#c53030",
    clothing: "#b83280",
    coffee: "#8b4513",
    pharmacy: "#0891b2",
    florist: "#db2777",
    tavern: "#059669",
    magic_shop: "#553c9a",
    charity_shop: "#047857",
    fishmonger: "#0369a1",
    post_office: "#dc2626",
    wine_merchant: "#7c2d12",
    hairdresser: "#be185d",
    dentist: "#1e40af"
};

// Timeline configuration
const timelineConfig = {
    margin: {top: 40, right: 40, bottom: 40, left: 40},
    cardWidth: 200,
    cardHeight: 60,
    eventDotRadius: 12,
    decadeMarkerLength: 15,
    yearRange: {min: 1900, max: 2025}
};

// Animation settings
const animationConfig = {
    transitionDuration: 300,
    hoverScale: 1.05,
    tooltipDelay: 200
};

// Validation rules
const validationRules = {
    requiredFields: ['building_name', 'address', 'side', 'type', 'year', 'event_type'],
    validSides: ['left', 'right'],
    validEventTypes: Object.keys(eventColors),
    validBuildingTypes: Object.keys(buildingIcons),
    yearRange: {min: 1900, max: 2025}
}; 