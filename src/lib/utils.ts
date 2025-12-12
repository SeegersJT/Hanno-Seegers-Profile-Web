import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function renderCode() {
  return `const Hanno = {
  role: "Senior Full-Stack Developer",
  location: "South Africa",
  skills: [
    "JavaScript", "React", "Node.js", "Typescript",
    "Java", "C#","MSSQL", "Docker"
  ],
  currentFocus: "Building scalable web applications",
  coffeePreference: "Double Espresso"
};

export default Hanno;`
}