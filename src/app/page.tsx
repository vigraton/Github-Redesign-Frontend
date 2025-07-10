import RepositoryCard from "../app/components/RepositoryCard/card";
import Header from "../app/components/Header/header";

export default function Home() {
  const repos = [
    {
      id: 1,
      title: "GitHub Redesign",
      language: "TypeScript"
    },
    {
      id: 2,
      title: "Mimimi",
      language: "Go"
    },
    {
      id: 3,
      title: "Momomo",
      language: "Java"
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="flex flex-row gap-4">
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} {...repo} />
        ))}
      </div>
    </div>
  );
}
