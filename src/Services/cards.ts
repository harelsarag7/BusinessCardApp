import axios from "axios";
import { cardModel } from "../Models/cardModel";
import { config } from "./config/config";
import { userFunctions } from "./user";

class CardFunctions {

   async getAllCards(): Promise<cardModel[] | undefined> {
       try {
         // const response =  await fetch(`${config.URL}/api/cards`, {
         const response =  await fetch(`${config.URL}/api/cards`, {
            mode: "cors",
         }).then(res => res.json());
         console.log(response);
         
          return response;
          
       } catch (e){
           return undefined
       }
   }

   async getCardByUserid(): Promise<cardModel[] | undefined> {
      let userid = await userFunctions.getUserId();
      
      try {
         const response =  await fetch(`${config.URL}/api/cards/${userid}`, {
            mode: "cors",
         }).then(res => res.json());
         console.log(response);
         
          return response;
          
       } catch (e){
           return undefined
       }
   }












//       async createFullCard(card : cardModel | any) {
//       let file = card.target.files[0];
//       const url = 'http://localhost:80/api/cards';
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('userid', card.userid);
//       formData.append('businessName', card.businessName);
//       formData.append('businessDescription', card.businessDescription);
//       formData.append('location', card.location);
//       formData.append('phone', card.phone);
//       formData.append('email', card.email);
//       formData.append('templateNum', card.templateNum);
//       formData.append('website', card.website);
//       formData.append('facebook', card.facebook);
//       formData.append('fileName', file.name);
//       const config = {
//         headers: {
//           'content-type': 'multipart/form-data',
//         },
//       };
//       await axios.post(url, formData, config).then((response) => {
//         console.log(response.data);
//         return response.data
//       });
//   }


   async createCard( {userid, businessName, businessDescription, location,image, phone, email, templateNum, website, facebook, github, twitter, iconsColor} : cardModel ): Promise<cardModel> {
         // let id = 4;
      let card: any = {
         // id,
         userid,
         businessName,
         businessDescription,
         location,
         image,
         phone,
         email,
         templateNum,
         website,
         facebook,
         github,
         twitter,
         iconsColor
      }
      try {
         const details: cardModel = await fetch(`${config.URL}/api/cards`, {
            mode: "cors",
            method: "POST",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
               
            },
            
            // body:  new FormData(card),
            body:  JSON.stringify(card),
            
         }).then(res => res.json());

            console.log(details);
            
         return details;
      } catch (e) {
         console.log(e);
         console.log("Failed to create card");
         return card;
      }

   }

   async updateCard( card : cardModel, id: number ): Promise<cardModel> {

      try {
         const details: cardModel = await fetch(`${config.URL}/api/editcard/${id}`, {
            mode: "cors",
            method: "PUT",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
               
            },
            
            // body:  new FormData(card),
            body:  JSON.stringify(card),
            
         }).then(res => res.json());
         console.log(card);

            console.log(details);
            
         return details;
      } catch (e) {
         console.log(e);
         console.log("Failed to update card");
         return card;
      }

   }


   async getCard(id: number | undefined) {
      try {
         const response =  await fetch(`${config.URL}/api/card/${id}`, {
            mode: "cors",
         }).then(res => res.json());
         
         const image = await fetch(`${config.URL}/api/card/image/${id}`, {
            mode: "cors",
         })
         console.log(image.url);
         response.upload = image.url

          return response;
          
       } catch (e){
           return undefined
       }
   }


   async deleteCard(id : number | undefined): Promise<string>{
      console.log("delete service: " + id);
      if(!id){
         console.log("no card");
         return "";
      }
      try{ 
          const { data } = await axios.delete(`${config.URL}/api/cards/${id}`);
              
          return data;
      } catch(e) {
          return ``;
      } 
  }

}
export const cardFunctions = new CardFunctions();
