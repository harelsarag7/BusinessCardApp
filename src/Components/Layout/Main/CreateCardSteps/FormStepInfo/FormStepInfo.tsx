import "./FormStepInfo.css";
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../Models/cardModel";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../../../../App/cardSlice";
import { ButtonGroup, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardTemplate2 from "../../CreateCard/CardTemplate/CardTemplate2/CardTemplate2";
import CardTemplate1 from "../../CreateCard/CardTemplate/CardTemplate1/CardTemplate1";
import axios from "axios";
import CardTemplate3 from "../../CreateCard/CardTemplate/CardTemplate3/CardTemplate3";
import { toast, ToastContainer } from "react-toastify";
import { config } from "../../../../../Services/config/config";

type CardComponentType = ( { card } : { card: cardModel } ) => JSX.Element;

const Components: Record<number, CardComponentType> = {
    1: CardTemplate1,
    2: CardTemplate2,
    3: CardTemplate3
}

interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}
const noImage = () => toast.warning("Must upload a image...", {
    position: toast.POSITION.TOP_CENTER
});

function FormStepInfo( { onclick, stepBackButton}: clicksForm2Model ): JSX.Element {
    const { register, handleSubmit } = useForm<cardModel | any>();
    const dispatch = useDispatch();
    const cardRedux : any = useSelector((state: any) => state.card);

    const [upload, setUpload] = useState<any>(null)

    function createCardFunction(  card: cardModel){
        let newCard: any = {...card};
        if(!newCard.image[0]){
            console.log("no image");
            noImage()
            return;
        }
        card.image = newCard.image[0].name
        // console.log(card);
        
        dispatch(info( card))
        onclick();
    }
    const [card, setCard] = useState<cardModel>()
    const Component = Components[cardRedux?.templateNum ?? cardRedux ?? 2 ];
    
   
    useEffect(() => {
        console.log(cardRedux);
        setCard(cardRedux)
    }, [upload])






        function sendImage(img: any) {
            console.log(img.target.files[0]);
            let file = img.target.files[0];
            window.localStorage.setItem("image", file)
            const url = `${config.URL}/api/uploadFile`;
            // const url = `${config}`;
            const formData = new FormData();

            formData.append('file', file);
            formData.append('fileName', file.name);
            var configInfo = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };
            axios.post(url, formData, configInfo).then((response) => {
              console.log(response.data);
            });
        }





        function onBusiName(event : any) {
        let name = event.target.value;
        console.log(name);
        setCard({
            businessName: name,
            businessDescription : card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor


        })
    };
        function onBusiDesc(event : any) {
        let description = event.target.value;
        console.log(description);
        setCard({
            businessName: card?.businessName,
            businessDescription : description,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor


        })
    };
    
        function onBusiEmail(event : any) {
        let emailTo = event.target.value;
        console.log(emailTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : emailTo,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor

        })
    };
        function onBusiPhone(event : any) {
        let phoneTo = event.target.value;
        console.log(phoneTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : phoneTo,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor

        })
    };
        function onBusiWebsite(event : any) {
        let websiteTo = event.target.value;
        console.log(websiteTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: websiteTo,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor

        })
    };
        function onBusiFacbook(event : any) {
        let facebookTo = event.target.value;
        console.log(facebookTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: facebookTo,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor
        })
    };
        function onBusiGithub(event : any) {
        let GithubTo = event.target.value;
        console.log(GithubTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: GithubTo,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor

        })
    };
        function onBusiTwitter(event : any) {
        let TwitterTo = event.target.value;
        console.log(TwitterTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: TwitterTo,
            iconsColor: card?.iconsColor

        })
    };
        function onBusiLocation(event : any) {
        let locationTo = event.target.value;
        console.log(locationTo);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: locationTo,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor
        })
    };

    function onIconsColor(color: string ) {
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: card?.upload,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: color
        })
    } 
        function onBusiImg(event : any) {
        let img = URL.createObjectURL(event.target.files[0]);
        sendImage(event);
        console.log(img);
        setCard({
            businessName: card?.businessName,
            businessDescription: card?.businessDescription,
            email : card?.email,
            phone : card?.phone,
            website: card?.website,
            facebook: card?.facebook,
            location: card?.location,
            upload: img,
            github: card?.github,
            twitter: card?.twitter,
            iconsColor: card?.iconsColor
        })
    };


    
    return (
        <div className="FormStepInfo">

			       <form onSubmit={handleSubmit(createCardFunction)}>
                    <div className="input-container">
                      
                      <div>
                        <label htmlFor="">Business Name:</label>
                        <input onInput={(name) => onBusiName(name)}  defaultValue={cardRedux.card? cardRedux.card.businessName : ""} type="text" placeholder="Business Name:" {...register("businessName")} />
                      </div>
                     
                     <div>
                        <label htmlFor="">Business Description:</label>
                        <input onInput={(description) => onBusiDesc(description) } defaultValue={cardRedux.card? cardRedux.card.businessDescription : ""} type="text" placeholder="Business Description:" {...register("businessDescription")} />
                     </div>
                
                    </div>
                    <div className="input-container">

                        <label  htmlFor="">Phone number:</label>
                        <input  onInput={(phone) => onBusiPhone(phone)} defaultValue={cardRedux.card? cardRedux.card.phone : ""} type="text" placeholder="Phone:" {...register("phone")} />
                      
                        <label htmlFor="">Email:</label>
                        <input onInput={(email) => onBusiEmail(email)}  defaultValue={cardRedux.card? cardRedux.card.email : ""} type="email" placeholder="Email:" {...register("email")} />
                      
                      
                        <label htmlFor="">Location:</label>
                        <input onInput={(location) => onBusiLocation(location)}  defaultValue={cardRedux.card? cardRedux.card.location : ""} type="text" placeholder="Adress:" {...register("location")} />
                      
                        <label htmlFor="website">Website:</label>
                        <input id="website" onInput={(website) => onBusiWebsite(website)}  defaultValue={cardRedux.card? cardRedux.card.website : ""} type="string" placeholder="Web site link:" {...register("website")} />
                      
                        <label htmlFor="facebook">Facebook:</label>
                        <input id="facebook" onInput={(facebook) => onBusiFacbook(facebook)}  defaultValue={cardRedux.card? cardRedux.card.facebook : ""} type="string" placeholder="Facebook link:" {...register("facebook")} />
                      
                        <label htmlFor="github">github:</label>
                        <input id="github" onInput={(github) => onBusiGithub(github)}  defaultValue={cardRedux.card? cardRedux.card.github : ""} type="string" placeholder="Github link:" {...register("github")} />
                      
                        <label htmlFor="twitter">Twitter:</label>
                        <input id="twitter" onInput={(twitter) => onBusiTwitter(twitter)}  defaultValue={cardRedux.card? cardRedux.card.twitter : ""} type="string" placeholder="Twitter link:" {...register("twitter")} />

                        {cardRedux == 1 ? 
                            <div>
                                <label htmlFor="">Choose Icons color:</label>
                                <input type="color" id="iconsColor"  defaultValue="red" onInput={(e: any) => onIconsColor(e.target.value)} {...register("iconsColor")} />
                            </div>
                        : <></>}
                    </div>

                        <label htmlFor="Image">Your photo or logo:</label>
                        {/* <input id="Image" onInput={(image) => onBusiFacbook(image)}  defaultValue={cardRedux.card? cardRedux.card.facebook : ""} type="string" placeholder="Facebook link:" {...register("facebook")} /> */}
                        {/* <input id="Image"  type="file" onInput={( e) => sendImage(e )}  {...register("image")} /> */}
                        <input id="Image"  type="file" onInput={(img) => onBusiImg(img)}  {...register("image")} />
                        {/* <input id="Image"  type="file" onInput={( e) => sendImage(e )}  onChange={(e : any) => setFile(e.target.files[0])}  {...register("image")} /> */}
                        <img id="img" src={upload} width={200} alt="" />
                <div className="next-back-form1">

                <ButtonGroup
                disableElevation
                variant="outlined"
                aria-label="Disabled elevation buttons"
                >
                <Button onClick={stepBackButton}>Back</Button>
                <Button type="submit">Next</Button>
                </ButtonGroup>
                    </div>
                </form>
                <div className="online-template">
                    {/* <img src={imgTemplate2} alt="" /> */}
                    <Component key={1}  card={card ?? {}}/>
                
                </div>
                <ToastContainer />
{/* } */}
        </div>
    );
}

export default FormStepInfo;
