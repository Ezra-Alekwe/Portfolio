export interface NavContent {
  label: string;
  link: string;
}

export interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  strokeWidth?: number;
  strokeColor?: string;
}

export interface ProjectInfo {
  image: string;
  title: string;
  subtitle: string;
  skills: string[];
  liveUrl: string;
  githubUrl: string;
}

interface SkillsProps {
  name: string;
  level: number;
}

export interface SkillDetails {
  title: string;
  skills: SkillsProps[];
}
