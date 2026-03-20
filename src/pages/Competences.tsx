import { Server, Network, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";

const Competences = () => {
  const skillCategories = [
    {
      icon: <Server className="w-5 h-5" />,
      title: "Administration systèmes",
      skills: [
        "Windows Server (Active Directory, DNS, DHCP)",
        "Linux (Debian / Ubuntu)",
        "Installation et configuration de postes clients",
        "Serveur web Apache",
        "Accès distant SSH",
      ],
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Réseaux",
      skills: [
        "Architecture réseau",
        "VLAN et segmentation",
        "Routage inter-VLAN",
        "Routage dynamique (OSPF, RIP, EIGRP)",
        "Spanning Tree, EtherChannel",
        "pfSense",
        "Cisco Packet Tracer",
      ],
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Support & ITSM",
      skills: [
        "GLPI : gestion des tickets et inventaire",
        "iTop : gestion des incidents",
        "Connexion GLPI ↔ Active Directory (LDAP)",
        "Support utilisateurs N1 / N2",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            icon="🛠️"
            title="Compétences"
            subtitle="Les domaines techniques maîtrisés dans le cadre de ma formation SISR"
          />
          <div className="grid gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Competences;
