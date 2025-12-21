export const data = {
  "profile": {
    "name": "Duy",
    "role": "Java Developer",
    "role_class": "Developer",
    "role_parent": "Java",
    "intro": "A Java Developer & Backend Architect specializing in crafting high-performance, scalable applications using Spring Boot, Microservices, and Cloud Native technologies.",
    "status": "Open to Work",
    "location": "Ho Chi Minh city",
    "languages": "Vietnamese, English",
    "email": "lnduy8120@gmail.com"
  },
  "about": {
    "bio": [
      "I'm a backend specialist who views code as a craft. With over 3 years of experience in the JVM ecosystem, I build scalable, resilient architectures that power high-traffic applications.",
      "When I'm not optimizing SQL queries or refactoring legacy code, you can find me contributing to open-source projects or brewing the perfect pour-over coffee."
    ],
    "stats": [
      { "icon": "calendar_month", "label": "Years_Exp", "value": "03+" },
      { "icon": "commit", "label": "Commits_Year", "value": "1,240" },
      { "icon": "local_cafe", "label": "Coffee_Liters", "value": "850" }
    ],
    "history": [
      { "period": "2023 - Present", "role": "Backend Engineer", "company": "@ BrainTech", "desc": "Developed and maintained RESTful APIs for a fintech application. Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 50%." },
      { "period": "2022 - 2023", "role": "Junior Developer", "company": "@ TPS Software", "desc": "Assisted in full-stack development using Java EE and Angular. Wrote comprehensive unit tests achieving 90% code coverage." }
    ]
  },
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce",
      "category": "Microservices",
      "description": "A scalable backend architecture handling high-concurrency order processing. Implements circuit breaker patterns, distributed tracing, and event-driven communication.",
      "techStack": ["Wordpress"],
      "imageUrl": "https://picsum.photos/seed/p1/800/600",
      "repoUrl": "#",
      "demoUrl": "https://tamcannong.com"
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
    "competencies": ["Java", "Spring Boot", "SQL", "AWS"],
     "pdfUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  "contact": {
    "email": "lnduy8120@gmail.com",
    "location": "Ho Chi Minh city",
    "social": [
      { "name": "GitHub", "handle": "@lnduy8120", "icon": "code", "href": "https://github.com/lnduy8120" },
      { "name": "LinkedIn", "handle": "/in/le-nhut-duy", "icon": "work", "href": "https://www.linkedin.com/in/le-nhut-duy" },
      { "name": "Zalo", "handle": "@0983258427", "icon": "phone", "href": "#" }
    ]
  }
};

export default data;