import { EntryButt } from '../components/entryBut'
import GlitchButt from '../components/glitchBut'
import NewButt from '../components/newButt'
import transition from '../transition'

function Comp() {
  return (
    <div>
        <EntryButt/>
        <GlitchButt/>
        <NewButt/>
        <div className="flex flex-col w-screen">
          <div className="w-full h-32 bg-greyal"></div>
        <div className="h-32 w-full rounded-[0%0%50%50%/0%0%100%100%] bg-greyal"></div>
        </div>
    </div>
  )
}

export default Comp
