import Link from 'next/link';

export default function TrendingGuides() {
  const guides = [
    "Polyfill supply chain attack embeds malware in JavaScript CDN assets",
    "Understanding the Difference Between APIs and Endpoints",
    "Difference between Docker, Kubernetes, and Podman for System Design Interview?",
    "I've been writing TypeScript without understanding it",
    "Database Sharding for System Design Interview",
    "Building a Bulletproof CI/CD Pipeline: A Comprehensive Guide",
    "Docker Mastery: A Comprehensive Guide for Beginners and Pros",
    "Don't refactor the code",
    "Public APIs for Web Development Projects",
    "System Design Basics - Caching",
    "10 Microservices Architecture Challenges for System Design Interviews",
    "12 Open Source tools that Developers would give up Pizza for👋🍕",
    "Glasskube v0.10.0 out now!",
    "10 Essential VS Code Tips & Tricks For Greater Productivity",
    "Why TypeScript is Transforming Modern Web Development",
    "Part 1: What is Clean Architecture?",
    "Mastering JavaScript Generators 🔥",
    "Write Less, Fix Never: The Art of Highly Reliable Code",
    "Are Sync Engines The Future of Web Applications?",
    "Understanding JWT Authentication: A Comprehensive Guide with Examples"
  ];

  return (
    <div className="mb-6 mt-10">
      <h3 className="text-sm  font-semibold mb-3 pl-4">trending guides/resources</h3>
      <ul className="space-y-2 pl-6 border-b border-gray-400">
        {guides.map((guide, index) => (
          <li key={index} className='hover:bg-white p-3'>
            <Link href="#" className="text-gray-700 hover:text-blue-800 text-md">
              {guide}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
