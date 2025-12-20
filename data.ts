export const data = {
  "profile": {
    "name": "Alex Dev",
    "role": "Java Developer",
    "role_full": "public class JavaDeveloper extends Expert",
    "intro": "A Senior Java Developer & Backend Architect specializing in crafting high-performance, scalable applications using Spring Boot, Microservices, and Cloud Native technologies.",
    "status": "Open to Work",
    "location": "San Francisco, CA",
    "languages": "English, Spanish",
    "email": "dev@java-portfolio.com"
  },
  "about": {
    "bio": [
      "I'm a backend specialist who views code as a craft. With over 5 years of experience in the JVM ecosystem, I build scalable, resilient architectures that power high-traffic applications.",
      "When I'm not optimizing SQL queries or refactoring legacy code, you can find me contributing to open-source projects or brewing the perfect pour-over coffee."
    ],
    "stats": [
       { "icon": "calendar_month", "label": "Years_Exp", "value": "05+" },
       { "icon": "commit", "label": "Commits_Year", "value": "1,240" },
       { "icon": "local_cafe", "label": "Coffee_Liters", "value": "850" }
    ],
    "history": [
      { "period": "2020 - Present", "role": "Senior Java Developer", "company": "@ TechCorp Solutions", "desc": "Leading a team of 5 developers in re-architecting a monolithic legacy system into microservices using Spring Boot and Kafka. Improved system throughput by 40%." },
      { "period": "2018 - 2020", "role": "Backend Engineer", "company": "@ StartupX Inc.", "desc": "Developed and maintained RESTful APIs for a fintech application. Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 50%." },
      { "period": "2016 - 2018", "role": "Junior Developer", "company": "@ WebSystems Ltd.", "desc": "Assisted in full-stack development using Java EE and Angular. Wrote comprehensive unit tests achieving 90% code coverage." }
    ]
  },
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Microservices",
      "category": "Microservices",
      "description": "A scalable backend architecture handling high-concurrency order processing. Implements circuit breaker patterns, distributed tracing, and event-driven communication.",
      "techStack": ["Spring Cloud", "Docker", "K8s", "Kafka"],
      "imageUrl": "https://picsum.photos/seed/p1/800/600",
      "repoUrl": "#",
      "demoUrl": "#"
    },
    {
      "id": 2,
      "title": "Inventory System",
      "category": "JavaFX",
      "description": "Desktop application for real-time stock management. Features reactive UI updates and complex reporting queries.",
      "techStack": ["JavaFX", "PostgreSQL", "Hibernate"],
      "imageUrl": "https://picsum.photos/seed/p2/800/600",
      "repoUrl": "#"
    },
    {
      "id": 3,
      "title": "Auto-Doc Maven Plugin",
      "category": "All",
      "description": "A build tool extension that automatically generates API documentation based on code annotations during the build lifecycle.",
      "techStack": ["Maven API", "Java Core"],
      "imageUrl": "https://picsum.photos/seed/p3/800/600",
      "repoUrl": "#"
    }
  ],
  "skills": {
    "core": [
       { "name": "Java (Core & Advanced)", "level": 95, "desc": "JVM Internals, Stream API, Concurrency, Reflection" },
       { "name": "Spring Ecosystem", "level": 90, "desc": "Boot, Security, Data JPA, Cloud, WebFlux" },
       { "name": "Microservices & Architecture", "level": 85, "desc": "Distributed Systems, Event-Driven, REST/gRPC" }
    ],
    "persistence": [
       { "name": "PostgreSQL", "level": "Expert", "desc": "Complex queries, Indexing, PL/pgSQL" },
       { "name": "MongoDB", "level": "Advanced", "desc": "Aggregation, Sharding, Replica Sets" },
       { "name": "Redis", "level": "Intermediate", "desc": "Caching strategies, Pub/Sub" },
       { "name": "Elasticsearch", "level": "Intermediate", "desc": "Full-text search, Analytics" }
    ],
    "tools": ["Docker", "Kubernetes", "Jenkins", "Git & GitHub", "AWS Core", "Bash Scripting", "Grafana"],
    "frameworks": [
       { "name": "Quarkus", "sub": "Supersonic Subatomic Java", "icon": "bolt" },
       { "name": "Hibernate", "sub": "ORM & JPA Provider", "icon": "dataset" },
       { "name": "Apache Kafka", "sub": "Event Streaming", "icon": "api" },
       { "name": "JUnit 5", "sub": "Unit & Integration Testing", "icon": "bug_report" }
    ],
    "updates": [
        { "name": "Rust (Systems Programming)", "percentage": 45 },
        { "name": "GraphQL Federation", "percentage": 30 }
    ]
  },
  "resume": {
    "filename": "resume_v2.4.pdf",
    "size": "2.1 MB",
    "lastUpdated": "Oct 2023",
    "competencies": ["Java", "Spring Boot", "SQL", "AWS"]
  },
  "contact": {
    "email": "dev@java-portfolio.com",
    "location": "Remote / Worldwide",
    "social": [
       { "name": "GitHub", "handle": "@dev_user", "icon": "code", "href": "#" },
       { "name": "LinkedIn", "handle": "/in/dev_user", "icon": "work", "href": "#" },
       { "name": "Twitter", "handle": "@dev_tweets", "icon": "alternate_email", "href": "#" }
    ]
  }
};

export default data;