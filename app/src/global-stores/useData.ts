import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { CardI, WorkI } from '../interface/api.response';

// Or `interface`
interface DataState {
  works: WorkI[] | [];
  cards: CardI[] | [];
  loadState: (works: WorkI[], cards: CardI[]) => void;
}

export const useData = create<DataState>(
  devtools(set => ({
    works: [],
    cards: [],
    loadState: (works, cards) => set(state => ({ ...state, works, cards }))
  }))
);
