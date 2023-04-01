import "./CreateCardSteps.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { useEffect, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import PublishIcon from '@mui/icons-material/Publish';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FormStepOne from "./FormStepInfo/FormStepInfo";
import { cardModel } from "../../../../Models/cardModel";
import { useSelector } from "react-redux";
import FormStepTemplate from "./FormStepTemplate/FormStepTemplate";
import FormPublish from "./FormPublish/FormPublish";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));




function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  
  
  const icons: { [index: string]: React.ReactElement } = {
    1: <InfoIcon />,
    2: <AppRegistrationIcon />,
    3: <PublishIcon />,
  };
  
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Select a Template', 'Fill Information', 'Publish'];

export default function CustomizedSteppers( ) {
  let [stepNum, setStepNum] = useState<number>(0)
  const cardRedux: cardModel = useSelector((state: any) => state.card);

  function stepNext(){
      
      // console.log(cardRedux);
    if(stepNum >= steps.length - 1) {
        return;
    } 
    setStepNum(stepNum  = stepNum + 1)
}

function stepBack(){
    if(stepNum <= 0) {
        return;
    } 
    setStepNum(stepNum  = stepNum - 1)
}


    
    useEffect(() => {
      console.log(cardRedux);
      
    }, [])

    const [Card, SetCard] = useState<cardModel>()
    function saveInfoCard(obb: any){
      SetCard(obb);
  stepNext();
  
}
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>

      <Stepper alternativeLabel activeStep={stepNum} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
            <div className="form-step-container">
                {stepNum == 1 ? <div> <FormStepOne onclick={() => stepNext()} stepBackButton={() => stepBack()} /> </div> : <></>}
                {stepNum == 0 ? <div> <FormStepTemplate onclick={() => stepNext()} stepBackButton={() => stepBack()}  /> </div>  : <></>}
                {stepNum == 2 ? <div> <FormPublish onclick={() => stepNext()} stepBackButton={() => stepBack()} /> </div>  : <></>}
      </div>
        {/* <button className="stepNum-button" onClick={stepNext}>Next</button> */}
        {/* <button className="stepNum-button" onClick={stepBack}>Back</button> */}
    </Stack>
  );
}