export default function sitemap() {
    return [
      {
        url: 'https://manojkumar.one',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://manojkumar.one/about',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://manojkumar.one/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    
    ]
  }
