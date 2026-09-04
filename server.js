const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const portfolioData = {
  profile: {
    name: 'Alex Kumar',
    role: 'Junior DevOps & Cloud Engineer',
    location: 'Remote / Worldwide',
    summary:
      'I build automation, deployment pipelines, and cloud-ready infrastructure with a focus on reliability, scalability, and security.',
    email: 'alex.kumar.devops@example.com',
    github: 'https://github.com/alexkumar',
    linkedin: 'https://linkedin.com/in/alexkumar',
    availability: 'Open to internships and junior DevOps roles'
  },
  stats: [
    { label: 'Projects', value: '6+' },
    { label: 'Cloud Tools', value: '3' },
    { label: 'Years Learning', value: '1+' },
    { label: 'Focus', value: 'DevOps' }
  ],
  skills: [
    'Linux / Ubuntu',
    'Git & GitHub',
    'Docker',
    'CI/CD with GitHub Actions',
    'AWS Essentials',
    'Terraform Basics',
    'Monitoring with Prometheus',
    'Networking & Security'
  ],
  projects: [
    {
      id: 1,
      title: 'CI/CD Pipeline Automation',
      description:
        'Built a pipeline to automate application builds, tests, and deployments using GitHub Actions and Docker.',
      stack: ['GitHub Actions', 'Docker', 'Linux']
    },
    {
      id: 2,
      title: 'AWS Static Website Deployment',
      description:
        'Hosted a static web app on AWS S3 and CloudFront with secure, low-cost infrastructure setup.',
      stack: ['S3', 'CloudFront', 'Route 53']
    },
    {
      id: 3,
      title: 'Containerized Monitoring Setup',
      description:
        'Deployed a lightweight monitoring stack with Docker containers to track health and system metrics.',
      stack: ['Docker', 'Prometheus', 'Grafana']
    }
  ]
};

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the public portfolio API',
    routes: [
      '/api/health',
      '/api/profile',
      '/api/stats',
      '/api/skills',
      '/api/projects'
    ]
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'my-portfolio-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile);
});

app.get('/api/stats', (req, res) => {
  res.json(portfolioData.stats);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
