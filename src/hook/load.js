import { create } from 'zustand'

const useLoad = create((set) => ({
  isLoad: true,
  loadDone: () => set(() => ({ isLoad : false }))
}))

export default useLoad;