import Header from "../components/Header/header";
import Profile from "../components/Profile/profile";
import RepositoryCard from "../components/RepositoryCard/card";

export function RepositoriesPage() {
  const profile = {
    name: "Vivian Graton",
    username: "vigraton",
    followers: 11,
    following: 16,
    location: "SP, Brasil",
    company: "Valint Group Brasil",
  };

  const repos = [
    {
      id: 1,
      title: "GitHub Redesign",
      language: "TypeScript",
      updatedAt: "2 minutes ago",
    },
    {
      id: 2,
      title: "Mimimi",
      language: "Go",
      updatedAt: "4 months ago",
    },
    {
      id: 3,
      title: "Momomo",
      language: "Java",
      updatedAt: "Updated now",
    },
  ];

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 px-8">
        <div className="lg:col-span-1">
          <Profile {...profile} />
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 justify-start">
            {repos.map((repo) => (
              <RepositoryCard key={repo.id} {...repo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
