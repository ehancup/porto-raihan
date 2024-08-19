import { create } from 'zustand'

const useBgColor = create((set) => ({
  op: 0,
  minsetop: (value) => set((state) => ({ op: state.op - value })),
  setop: (value) => set(() => ({op : value}))
}))

export default useBgColor