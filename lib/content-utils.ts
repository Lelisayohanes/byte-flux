// Content management utilities for easy data updates and manipulation
import { CategoryData, Topic, TopicContent, MediaContent } from "@/lib/content-data";

// Content validation utilities
export const validateMediaContent = (content: MediaContent): boolean => {
  switch (content.type) {
    case 'image':
      return !!(content.src && content.alt);
    case 'video':
      return !!(content.src && content.thumbnail);
    case 'link':
      return !!(content.src && content.title);
    case 'code':
      return !!(content.code);
    case 'text':
      return !!(content.description);
    case 'quiz':
    case 'exercise':
      return !!(content.description && content.difficulty && content.points);
    case 'resource':
      return !!(content.description && content.resources && content.resources.length > 0);
    default:
      return false;
  }
};

export const validateTopic = (topic: Topic): boolean => {
  return !!(
    topic.id &&
    topic.title &&
    topic.description &&
    topic.difficulty &&
    topic.duration &&
    topic.tags &&
    topic.tags.length > 0
  );
};

export const validateCategory = (category: CategoryData): boolean => {
  return !!(
    category.id &&
    category.title &&
    category.description &&
    category.icon &&
    category.topics &&
    category.topics.length > 0
  );
};

// Content creation utilities
export const createMediaContent = (
  type: MediaContent['type'],
  data: Partial<MediaContent>
): MediaContent => {
  const baseContent: MediaContent = {
    type,
    ...data
  };

  if (!validateMediaContent(baseContent)) {
    throw new Error(`Invalid media content for type: ${type}`);
  }

  return baseContent;
};

export const createTopic = (data: Partial<Topic>): Topic => {
  const topic: Topic = {
    id: data.id || '',
    title: data.title || '',
    description: data.description || '',
    difficulty: data.difficulty || 'Beginner',
    duration: data.duration || '1 week',
    tags: data.tags || [],
    lastUpdated: new Date().toISOString().split('T')[0],
    author: data.author || 'ByteFlux Team',
    version: data.version || '1.0.0',
    ...data
  };

  if (!validateTopic(topic)) {
    throw new Error('Invalid topic data');
  }

  return topic;
};

export const createCategory = (data: Partial<CategoryData>): CategoryData => {
  const category: CategoryData = {
    id: data.id || '',
    title: data.title || '',
    description: data.description || '',
    icon: data.icon || '📚',
    difficulty: data.difficulty || 'Mixed',
    duration: data.duration || '1 month',
    topics: data.topics || [],
    tags: data.tags || [],
    lastUpdated: new Date().toISOString().split('T')[0],
    author: data.author || 'ByteFlux Team',
    version: data.version || '1.0.0',
    ...data
  };

  if (!validateCategory(category)) {
    throw new Error('Invalid category data');
  }

  return category;
};

// Content update utilities
export const updateTopicContent = (
  categoryId: string,
  topicId: string,
  content: TopicContent
): boolean => {
  try {
    // In a real application, this would update the database
    // For now, we'll just validate the content
    if (!content.id || !content.title || !content.description) {
      return false;
    }
    
    // Validate all media content
    if (content.content && !content.content.every(validateMediaContent)) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error updating topic content:', error);
    return false;
  }
};

export const addMediaContentToTopic = (
  categoryId: string,
  topicId: string,
  mediaContent: MediaContent
): boolean => {
  try {
    if (!validateMediaContent(mediaContent)) {
      return false;
    }
    
    // In a real application, this would add to the database
    return true;
  } catch (error) {
    console.error('Error adding media content:', error);
    return false;
  }
};

// Content search and filtering utilities
export const searchContent = (
  query: string,
  categoryId?: string,
  contentType?: MediaContent['type']
): MediaContent[] => {
  // This would search through all content in the database
  // For now, return empty array as placeholder
  return [];
};

export const filterTopicsByDifficulty = (
  topics: Topic[],
  difficulty: Topic['difficulty']
): Topic[] => {
  return topics.filter(topic => topic.difficulty === difficulty);
};

export const filterTopicsByDuration = (
  topics: Topic[],
  maxDuration: string
): Topic[] => {
  // Simple duration filtering - in real app would parse duration strings
  return topics.filter(topic => {
    // This is a simplified implementation
    return topic.duration <= maxDuration;
  });
};

export const filterTopicsByTags = (
  topics: Topic[],
  tags: string[]
): Topic[] => {
  return topics.filter(topic =>
    tags.some(tag => topic.tags.includes(tag))
  );
};

// Content statistics utilities
export const getContentStats = (category: CategoryData) => {
  const stats = {
    totalTopics: 0,
    totalSubtopics: 0,
    totalContent: 0,
    difficultyBreakdown: {
      Beginner: 0,
      Intermediate: 0,
      Advanced: 0
    },
    contentTypes: {
      image: 0,
      video: 0,
      link: 0,
      code: 0,
      text: 0,
      quiz: 0,
      exercise: 0,
      resource: 0
    }
  };

  const countTopics = (topics: Topic[]) => {
    topics.forEach(topic => {
      stats.totalTopics++;
      stats.difficultyBreakdown[topic.difficulty]++;
      
      if (topic.content) {
        stats.totalContent++;
        topic.content.content.forEach(content => {
          stats.contentTypes[content.type]++;
        });
      }
      
      if (topic.subtopics) {
        stats.totalSubtopics += topic.subtopics.length;
        countTopics(topic.subtopics);
      }
    });
  };

  countTopics(category.topics);
  return stats;
};

// Export utilities for content management
export const contentUtils = {
  validate: {
    mediaContent: validateMediaContent,
    topic: validateTopic,
    category: validateCategory
  },
  create: {
    mediaContent: createMediaContent,
    topic: createTopic,
    category: createCategory
  },
  update: {
    topicContent: updateTopicContent,
    addMediaContent: addMediaContentToTopic
  },
  search: {
    content: searchContent,
    filterByDifficulty: filterTopicsByDifficulty,
    filterByDuration: filterTopicsByDuration,
    filterByTags: filterTopicsByTags
  },
  stats: {
    getContentStats: getContentStats
  }
};

// Example usage functions
export const exampleContentCreation = () => {
  // Create a video content
  const videoContent = createMediaContent('video', {
    src: '/videos/intro-to-programming.mp4',
    thumbnail: '/images/intro-thumb.jpg',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming concepts',
    duration: '15:30'
  });

  // Create an image content
  const imageContent = createMediaContent('image', {
    src: '/images/programming-concepts.jpg',
    alt: 'Programming concepts diagram',
    caption: 'Key programming concepts overview',
    width: 800,
    height: 600
  });

  // Create a code content
  const codeContent = createMediaContent('code', {
    code: `function hello() {
  console.log("Hello, World!");
}`,
    language: 'javascript',
    caption: 'Simple JavaScript function'
  });

  return [videoContent, imageContent, codeContent];
};

// Content import/export utilities
export const exportCategoryToJSON = (category: CategoryData): string => {
  return JSON.stringify(category, null, 2);
};

export const importCategoryFromJSON = (jsonString: string): CategoryData => {
  try {
    const data = JSON.parse(jsonString);
    return createCategory(data);
  } catch (error) {
    throw new Error('Invalid JSON format for category data');
  }
};

// Content backup utilities
export const createContentBackup = (categories: CategoryData[]): string => {
  const backup = {
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    categories: categories.map(category => ({
      ...category,
      backupId: `${category.id}_${Date.now()}`
    }))
  };
  
  return JSON.stringify(backup, null, 2);
};

export const restoreContentFromBackup = (backupString: string): CategoryData[] => {
  try {
    const backup = JSON.parse(backupString);
    return backup.categories.map((category: any) => {
      const { backupId, ...categoryData } = category;
      return createCategory(categoryData);
    });
  } catch (error) {
    throw new Error('Invalid backup format');
  }
};
