import { create } from 'zustand'

export const useViewerStore = create((set) => ({
  currentSection: 'aerial',
  position: { x: 0, y: 0 },
  zoom: 1,
  sequences: {
    aerial: {
      x: Array.from({ length: 60 }, (_, i) => `/assets/sequences/aerial/x/${i.toString().padStart(3, '0')}.webp`),
      y: Array.from({ length: 20 }, (_, i) => `/assets/sequences/aerial/y/${i.toString().padStart(3, '0')}.webp`)
    },
    villas: { x: [], y: [] }, // Add your paths
    parcels: { x: [], y: [] } // Add your paths
  },
  setSection: (section) => set({ currentSection: section }),
  setPosition: (x, y) => set({
    position: {
      x: Math.max(0, Math.min(x, 59)),
      y: Math.max(0, Math.min(y, 19))
    }
  }),
  setZoom: (zoom) => set({ zoom: Math.max(0.5, Math.min(zoom, 5)) })
}))