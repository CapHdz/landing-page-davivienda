import Roadmap from "./Roadmap";
import RoadmapTitle from "./RoadmapTitle";

export default function Timeline() {
  const events = [
    {
      heading: "Lanzamiento Convocatoria",
      subHeading: "Inicio de la convocatoria para el hackathon",
      date: "Marzo 2024",
      direction: "left",
    },
    {
      heading: "Kickoff",
      subHeading: "Presentación del evento y las reglas del hackathon",
      date: "Abril 2024",
      direction: "right",
    },
    {
      heading: "Hackathon",
      subHeading: "Desarrollo de proyectos",
      date: "17, 18 y 19 de Mayo 2024",
      direction: "left",
    },
  ];

  return (
    <div id='timeline' className='h-[100vh] grid grid-cols-1 md:grid-cols-2 py-4 sm:mx-[175px] my-1'>
      <RoadmapTitle />
      <Roadmap events={events} />
    </div>
  );
}
