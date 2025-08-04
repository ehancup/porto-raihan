import PJProjects from "../components/projectprojects";
import { projects } from "../data/projetcs";
import { Footer } from "./home";

function Projects() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-whiteal p-44 flex flex-col">
        <div className="mb-10">
          <h1 className="text-greyal text-7xl font-roslindale-reg">
            My Projects
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
            {projects.map((data, i) => <PJProjects id={i} key={i} data={data}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
