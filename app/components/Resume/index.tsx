import { Font, View } from "@react-pdf/renderer";
import { Project } from "~/types/Project";
import dayjs from "dayjs";
import { ProjectTable } from "./ProjectTable";
import { Document } from "./Document";

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "../fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "../fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

Font.registerHyphenationCallback((word) =>
  Array.from(word).flatMap((char) => [char, ""])
);

type Props = {
  projects: Project[];
};

export const Resume: React.FC<Props> = ({ projects }) => {
  const groupedProjects: Project[][] = projects.reduce<Project[][]>(
    (acc, _, index) => {
      if (index % 2 === 0) {
        acc.push(projects.slice(index, index + 2));
      }
      return acc;
    },
    []
  );

  const mostRecentUpdate = projects.reduce((latest, current) => {
    return new Date(current.updatedAt) > new Date(latest.updatedAt)
      ? current
      : latest;
  }, projects[0]);

  return (
    <Document
      updatedAt={dayjs(mostRecentUpdate.updatedAt).format("YYYY年MM月")}
    >
      {groupedProjects.map((group, index) => (
        <View break={index !== 0} key={index}>
          {group.map((project) => (
            <ProjectTable
              detail={project.detail}
              end_date={project.end_date}
              environment={project.environment}
              key={project.id}
              name={project.name}
              scale={project.scale}
              start_date={dayjs(project.start_date).format("YYYY-MM-DD")}
            />
          ))}
        </View>
      ))}
    </Document>
  );
};
