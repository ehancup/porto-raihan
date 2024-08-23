import mediapipe from "../assets/projects/index"
import { Button } from "./btn"

export const ProjectCard = () => {
  return (
    <div className="w-96 aspect-[16/18] bg-green-700 overflow-hidden rounded-xl relative group/pcard">
      <img src={mediapipe} alt="" className="w-full h-full origin-top scale-[2] group-hover/pcard:scale-100 transition-all duration-300" />
      <div className="absolute inset-0 bg-greyal/75 flex flex-col">
      <div className="flex-1 w-full"></div>
      <div className="p-3">
        <Button title={"See Project"} onClick={() => alert('tes')}/>
      </div>
      </div>
    </div>
  )
}
