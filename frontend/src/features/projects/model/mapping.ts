// Маппинг между услугами и категориями проектов
export const SERVICE_TO_PROJECT_MAPPING: Record<string, string[]> = {
  // slug услуги: [категории проектов, которые к ней относятся]
  'web-development': ['software-development', 'mobile-development', 'e-commerce'],
  'mobile-development': ['mobile-development', 'software-development', 'cross-platform'],
  'it-infrastructure': ['it-infrastructure', 'devops', 'cloud-architecture'],
  'ai-integration': ['ai-integration', 'data-analytics', 'machine-learning'],
  'data-analytics': ['data-analytics', 'business-intelligence', 'big-data'],
  'cybersecurity': ['cybersecurity', 'network-security', 'data-protection'],
  'cloud-services': ['devops', 'cloud-migration', 'serverless'],
  'support': ['it-infrastructure', 'software-maintenance', 'technical-support']
};

// Маппинг категории проекта → услуги
export const PROJECT_CATEGORY_TO_SERVICE: Record<string, string[]> = {
  'software-development': ['web-development', 'mobile-development'],
  'mobile-development': ['mobile-development'],
  'it-infrastructure': ['it-infrastructure', 'support'],
  'ai-integration': ['ai-integration'],
  'data-analytics': ['data-analytics', 'ai-integration'],
  'cybersecurity': ['cybersecurity'],
  'devops': ['cloud-services', 'it-infrastructure'],
  'blockchain': ['web-development'],
  'iot': ['it-infrastructure'],
  'digital-twin': ['ai-integration', 'data-analytics'],
  'vr-ar': ['web-development', 'mobile-development'],
  'gaming': ['web-development', 'mobile-development'],
  'hospitality': ['software-development'],
  'healthcare': ['software-development', 'ai-integration'],
  'fintech': ['software-development', 'cybersecurity'],
  'edtech': ['software-development'],
  'logistics': ['software-development', 'data-analytics'],
  'robotics': ['ai-integration', 'it-infrastructure'],
  'quantum': ['ai-integration']
};

// Получить категории проектов для услуги
export function getProjectCategoriesForService(serviceSlug: string): string[] {
  return SERVICE_TO_PROJECT_MAPPING[serviceSlug] || [];
}

// Получить услуги для категории проекта
export function getServicesForProjectCategory(category: string): string[] {
  return PROJECT_CATEGORY_TO_SERVICE[category] || [];
}