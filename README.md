# Narrative Portfolio Website
This repository contains the code for a narrative-driven portfolio website. Built with **React Three Fiber** and **Blender**, the site features interactive 3D scenes and a lip-sync technique that animates a virtual avatar to sync with narrative voiceovers. The portfolio provides an engaging, immersive experience for showcasing projects, skills, and personal storytelling.

# 🖥️ Tech Stack
 - **React Three Fiber**: Used for rendering and managing 3D graphics within React, making 3D elements responsive and interactive.
 - **Blender**: 3D modeling software for designing the avatar, assets, and animations.
 - **Lip-Sync Technique**: Used to synchronize the avatar's mouth movements with pre-recorded voiceovers, creating a realistic narrative experience.

# 📂 Project Structure
Here's an overview of the key folders and files:

    .
    ├── public               # Static assets
    │   ├── models           # Blender-exported 3D models
    │   ├── animations            # Animations for 3D models
    │   ├── audio            # Audio files for narration
    ├── src
    │   ├── assets       # Assets for the project
    │   ├── components       # React components
    │   │   ├── Avatar.jsx   # 3D avatar component with lip-sync
    │   │   └── Canvas.jsx # Interactive 3D avatar render
    │   ├── App.jsx          # App component
    │   ├── main.jsx          # Root component
    │   ├── index.css        # Styling for the application
    │   └── vite.config.js  # Configuration for Vite setup


# 🚀 Features

-   **Interactive 3D Avatar**:
    
    -   Created in Blender, exported, and imported as GLTF/GLB files for easy use with React Three Fiber.
    -   Lip-sync feature is applied to match avatar lip movements with spoken narration, enhancing user immersion.
-   **Narrative Presentation**:
    
    -   Projects and skills are narrated with voiceover, with corresponding animations triggered in sync.
    -   The lip-sync technique uses audio processing (via tools such as [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) or `three.js` libraries) to synchronize visuals with narration audio.
-   **3D Scene**:
    
    -   The scene includes interactive 3D elements for each project, using React Three Fiber for responsive, animated elements.
    -   Projects are presented as interactive cards or models that users can explore to view project details.
    
# 🚀 Features

-   **Avatar Design**:
    
    -   Avatar is designed in [ReadyPlayerMe](https://readyplayer.me/) and rigged with shape keys for mouth movements.
-   **Audio Processing for Lip-Sync**:
    
    -   Each audio file is analyzed, converting phonetic sounds into corresponding mouth shapes.
    -   For runtime processing, libraries like [react-three-fiber-drei](https://github.com/pmndrs/drei) or custom Web Audio API methods can be used to link phonetic data with avatar animations.

# 💻 Installation and Setup


 -   Clone the repository:    
```
git clone https://github.com/yourusername/narrative-portfolio.git
cd narrative-portfolio
```
 - Install dependencies:
 ```
 yarn
 //or
 npm install
 ```
 - Start the development server:
 ```
 yarn dev
 //or
 npm run dev
 ```
 - Open your browser to `http://localhost:3000` to view the website
 
# 🤝 Contributions
Contributions, issues, and feature requests are welcome! Please feel free to open a pull request to suggest improvements or report bugs.

# 📜 License
This project is licensed under the MIT License. 

