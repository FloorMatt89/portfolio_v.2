interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "SHPE UF Mobile App",
    description: "iOS mobile application for the Society of Hispanic Professional Engineers at University of Florida. Led development team to create a community platform for events, resources, and networking.",
    tags: ["Swift", "iOS", "Xcode", "UIKit"],
    liveLink: "",
    devLink: "https://github.com/shpe-uf/SHPE-UF-Mobile-Swift",
  },
  {
    title: "BinGenius - Smart Waste Classifier",
    description: "Smart waste sorting system using computer vision and machine learning. Built for SHPE TANK 2025 with real-time classification on Raspberry Pi 5, achieving 87% accuracy with ResNet50 model.",
    tags: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi", "FastAPI"],
    liveLink: "",
    devLink: "https://github.com/FloorMatt89/SHPE_TANK_BINGENIUS",
  },
  {
    title: "Hospital Readmission Predictor",
    description: "Machine learning model to analyze hospital patient data and identify trends to predict readmissions. Built for HackGT 11 with advanced data analysis and predictive modeling.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn"],
    liveLink: "",
    devLink: "https://github.com/adrianlehn/HackGT-11-Mamas-Boys",
  },
  {
    title: "Fuel Find",
    description: "Mobile application to help users find the best fuel prices and gas stations in their area. Features real-time price tracking and location-based recommendations.",
    tags: ["Mobile Development", "Location Services", "Price Tracking"],
    liveLink: "",
    devLink: "https://github.com/FloorMatt89/Fuel-Find"
  }
]

export default projects;
