import { APIReponseI, WorkI, CardI } from '../interface/api.response';
import { Axios } from './api.config';

export const loadData = async () => {
  try {
    const WorksPromess = Axios.get<APIReponseI<WorkI[]>>('/works');
    const CardsPromess = Axios.get<APIReponseI<CardI[]>>('/cards');

    const [WorksResp, CardsResp] = await Promise.all([WorksPromess, CardsPromess]);

    return { works: WorksResp.data.events, cards: CardsResp.data.events };
  } catch (error) {
    console.log(error);
    return null;
  }
};
