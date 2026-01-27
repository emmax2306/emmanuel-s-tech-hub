import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

const Projets = () => {
  const projects = [
    {
      title: "Gestion des demandes utilisateurs avec GLPI",
      tasks: [
        "Mise en place et utilisation de GLPI",
        "Gestion et suivi des tickets",
        "Exploitation des données (exports)",
      ],
    },
    {
      title: "Recensement et inventaire du parc informatique",
      tasks: [
        "Installation d'un serveur GLPI",
        "Déploiement de l'agent GLPI",
        "Inventaire matériel et logiciel",
      ],
    },
    {
      title: "Mise en place d'un domaine Active Directory",
      tasks: [
        "Installation et configuration d'AD DS",
        "Création d'utilisateurs, groupes et OU",
        "Intégration de postes clients",
      ],
    },
    {
      title: "Intégration GLPI ↔ Active Directory (LDAP)",
      tasks: [
        "Configuration de l'authentification LDAP",
        "Import des utilisateurs AD",
        "Tests de connexion",
      ],
    },
    {
      title: "Déploiement de services sous Linux",
      tasks: [
        "Installation et configuration d'Apache",
        "Mise à disposition de services web",
        "Tests et validation",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            icon="📂"
            title="Projets"
            subtitle="Réalisations techniques effectuées dans le cadre de ma formation et de mes stages"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard title={project.title} tasks={project.tasks} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projets;
