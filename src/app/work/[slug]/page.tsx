import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { CaseStudyView } from "@/components/projects/CaseStudyView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Valerie Noir",
    };
  }

  return {
    title: `${project.title} — Valerie Noir Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Valerie Noir Studio`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
