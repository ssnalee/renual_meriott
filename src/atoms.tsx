import { atom , selector} from "recoil";

interface IReviewTypes {

    name: string;
    id : number;
    // status: false,
    // message: string;
    date : number;
    title : string;
    overview : string;
    up : number;
    down : number;
}

export const contentState = atom<IReviewTypes>({
   // key: 'reviews',
   // default: [{
        // name : "Jsae06",
        // id : 1,
        // date : 20240103,
        // title : "JW Seoul",
        // overview : "This hotel embodies the luxury line of Marriott hotels. The service staff were extremely respectful and attentive. No luxury Marriott hotel I’ve stayed at in the US comes close to what you’ll experience here in terms of service.",
        // up : 0,
        // down : 0,
   // }
//]

  
});