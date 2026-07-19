export interface Skill {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  percentage: number;
  iconName: string;
  color: string; // e.g., 'from-blue-500 to-indigo-600'
  glowColor: string; // e.g., 'rgba(59, 130, 246, 0.4)'
  tags: string[];
}

export interface Project {
  id: number;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  categoryFa: string;
  categoryEn: string;
  imageUrl: string;
  techTags: string[];
  link?: string;
  detailsFa: string;
  detailsEn: string;
}

export interface TimelineEvent {
  year: string;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
}
