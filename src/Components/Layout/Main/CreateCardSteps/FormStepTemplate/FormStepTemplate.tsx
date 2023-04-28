import "./FormStepTemplate.css";
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../Models/cardModel";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import imgTemplate1 from "../FormStepTemplate/template1Example.jpg";
import imgTemplate2 from "../FormStepTemplate/template2Example.jpg";
import imgTemplate3 from "../FormStepTemplate/template3Example.jpg";
import { info, template } from "../../../../../App/cardSlice";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

interface clicksForm2Model {
    onclick: () => void;
    stepBackButton: () => void;
}

function FormStepTemplate( { onclick, stepBackButton}: clicksForm2Model ): JSX.Element {
    const { register, handleSubmit } = useForm<cardModel | any>();
    const dispatch = useDispatch();
    const cardRedux : { card : cardModel} = useSelector((state: any) => state.card);
    const noTemplate = () => toast.warning("Please Select a template...", {
        position: toast.POSITION.TOP_CENTER
    });
    const nextChoseTemplate = () => toast.success("Great ", {
        position: toast.POSITION.TOP_CENTER
    });


     function selectTemplate( {templateNum}: {templateNum : number}  ){
        console.log(templateNum);
        
        if(!templateNum){   
            noTemplate();
            return;
        }
        dispatch(template(templateNum))
        nextChoseTemplate();
        onclick()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {
        // let {templateNum} = cardRedux
        // dispatch(template(null))
        console.log(cardRedux);
        // dispatch(template())
    }, [])

    return (
        <div className="FormStepTemplate">

			       <form onSubmit={handleSubmit(selectTemplate)}>
                    <div className="input-container">
                        {/* <label htmlFor="">Template:</label> */}
                        {/* <input  defaultValue={cardRedux.card? cardRedux.card.templateNum : ""} type="number" placeholder="Template:" {...register("template")} /> */}

                        <div>
                            {/* <div>{cardRedux?.card.templateNum}</div> */}
                        {/* <input  defaultValue={cardRedux.card? cardRedux.card.businessName : ""} type="text" placeholder="Business Name:" {...register("businessName")} /> */}
                            <label className="selectTemplate" htmlFor="selectTemplate1">
                            <input className="input_select_template" type="radio" value={1}  id="selectTemplate1"  {...register("templateNum")} />
                            <img src={imgTemplate1} alt="" />
                            </label>
                            </div>

                            <div>
                            <label className="selectTemplate" htmlFor="selectTemplate2">
                            <input className="input_select_template" type="radio" value={2}  id="selectTemplate2"  {...register("templateNum")} />
                            <img src={imgTemplate2} alt="" />
                            </label>
                        </div>
                            <div>
                            <label className="selectTemplate" htmlFor="selectTemplate3">
                            <input className="input_select_template" type="radio" value={3}  id="selectTemplate3"  {...register("templateNum")} />
                            <img src={imgTemplate3} alt="" />
                            </label>
                        </div>
                    </div>
        
                <div className="next-back-form-template">

                <ButtonGroup
                disableElevation
                variant="outlined"
                aria-label="Disabled elevation buttons"
                >
                <Button disabled >Back</Button>
                <Button type="submit">Next</Button>
                </ButtonGroup>
                    </div>
                </form>
            <ToastContainer />

{/* } */}
        </div>
    );
}

export default FormStepTemplate;
