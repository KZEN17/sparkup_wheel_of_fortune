# Casino Wheel of Fortune 🎰

A stunning and interactive Wheel of Fortune component built with React 18+, TypeScript, Material-UI, and SCSS following BEM methodology.

![Wheel of Fortune](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Material--UI](https://img.shields.io/badge/Material--UI-7.3.2-purple)
![SCSS](https://img.shields.io/badge/SCSS-1.93.2-pink)

## ✨ Features

- 🎡 **Smooth Spinning Animation** - Realistic physics with cubic-bezier easing
- 🎨 **Beautiful Design** - Purple gradient background with spotlight effects
- 🌈 **Colorful Wheel** - Pink and purple alternating segments
- 💫 **Subtle Golden Ring** - Muted gold accents with animated lights
- 🎯 **Random Prize Selection** - Fair and random outcome on each spin
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎭 **BEM Naming Convention** - Clean, maintainable SCSS architecture
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🎮 Demo

Click the **SPIN** button in the center of the wheel and watch it spin! After 5 seconds, a congratulations dialog will appear showing your prize.

## 🛠️ Tech Stack

| Technology            | Version | Purpose                    |
| --------------------- | ------- | -------------------------- |
| **React**             | 19.1.1  | UI Framework               |
| **TypeScript**        | 5.8.3   | Type Safety                |
| **Material-UI (MUI)** | 7.3.2   | Button & Dialog Components |
| **SCSS**              | 1.93.2  | Advanced Styling           |
| **Vite**              | 7.1.7   | Build Tool & Dev Server    |

## 📦 Installation

1. **Clone the repository** (or copy the files)

2. **Install dependencies:**

```bash
npm install
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

### Lint Code

```bash
npm run lint
```

Check code quality and fix linting issues.

## 📁 Project Structure

```
wheel-of-fortune/
├── src/
│   ├── components/
│   │   └── WheelOfFortune/
│   │       ├── WheelOfFortune.tsx    # Main component logic
│   │       └── WheelOfFortune.scss   # Styles (BEM methodology)
│   ├── App.tsx                        # App entry point
│   ├── App.css                        # App styles
│   ├── index.css                      # Global styles
│   └── main.tsx                       # React DOM entry
├── public/                            # Static assets
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript config
├── vite.config.ts                     # Vite configuration
└── README.md                          # This file
```

## 🎨 Customization

### Changing Prize Colors

Edit the `prizes` array in `WheelOfFortune.tsx`:

```typescript
const prizes: Prize[] = [
  { id: 1, name: "100 Coins", color: "#E91E63" }, // Pink
  { id: 2, name: "50 Coins", color: "#673AB7" }, // Purple
  { id: 3, name: "Free Spin", color: "#E91E63" }, // Pink
  { id: 4, name: "25 Coins", color: "#673AB7" }, // Purple
  { id: 5, name: "Bonus Round", color: "#E91E63" }, // Pink
  { id: 6, name: "10 Coins", color: "#673AB7" }, // Purple
];
```

### Modifying Spin Duration

In `WheelOfFortune.tsx`, change the timeout value (currently 5000ms = 5 seconds):

```typescript
setTimeout(() => {
  // Prize calculation logic
}, 5000); // Change this value
```

### Adjusting Wheel Colors

Edit the SCSS variables in `WheelOfFortune.scss`:

```scss
$pink-color: #e91e63; // Main pink color
$purple-color: #673ab7; // Main purple color
```

## 🎯 How It Works

1. **User clicks SPIN** - The button in the center triggers the spin
2. **Wheel rotates** - Random rotation calculated (8-12 full rotations + random angle)
3. **CSS transition** - 5-second cubic-bezier animation for realistic deceleration
4. **Winner calculated** - Based on final rotation angle and pointer position
5. **Dialog appears** - Shows the winning prize with celebration animation

## 🎭 BEM Methodology

All CSS classes follow the **Block Element Modifier** naming convention:

- **Block**: `.wheel-of-fortune`
- **Elements**: `.wheel-of-fortune__wheel`, `.wheel-of-fortune__spin-button`
- **Modifiers**: `.wheel-of-fortune__wheel--spinning`

This ensures:

- ✅ Clear component hierarchy
- ✅ No naming conflicts
- ✅ Easy maintenance and scalability
- ✅ Self-documenting code

## 📱 Responsive Design

The wheel automatically adapts to different screen sizes:

- **Desktop** (>768px): Full-size wheel (500px max)
- **Tablet** (768px): Scaled to 85vw
- **Mobile** (480px): Scaled to 90vw with adjusted button sizes

## ✨ Key Features Explained

### Spotlight Effects

Three white spotlights shine from above, creating a theatrical casino atmosphere:

```scss
&__spotlight--left, &__spotlight--center, &__spotlight--right
```

### Animated Lights

24 golden lights blink around the wheel rim in sequence:

```typescript
{Array.from({ length: 24 }).map((_, index) => (
  <div className="wheel-of-fortune__light" ... />
))}
```

### Smooth Animation

Cubic-bezier easing function creates realistic spin deceleration:

```scss
transition: transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99);
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Technical Requirements Met

✅ React 18+ with TypeScript  
✅ Material-UI (MUI) for buttons and dialogs  
✅ SCSS for styling with BEM naming convention  
✅ Responsive design (mobile and desktop)  
✅ Circular wheel with 6 prize segments  
✅ Central spin button  
✅ Smooth rotation animation  
✅ Result popup dialog  
✅ Random prize selection

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the wheel!

## 📄 License

This project is for educational and demonstration purposes.

## 🎊 Enjoy Spinning!

Built with ❤️ using React, TypeScript, and SCSS

---

**Need help?** Check the inline code comments or reach out!

Happy Spinning! 🎰✨
