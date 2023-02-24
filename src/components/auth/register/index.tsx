import React, { useCallback, useState } from "react";
import { regStageData, regStages, RegStageData } from "./stages";
import ProgressBar from "./progressBar";

const Form = () => {
  const [stage, setStage] = useState(0);
  const [stagesData, setStagesData] = useState({});

  const stageComponent = regStageData[stage];
  console.log(stageComponent);

  const next = useCallback(() => {
    setStagesData({ ...stagesData });
    setStage(stage + 1);
  }, [stage, stageComponent, stagesData]);

  const prev = () => {
    setStage(stageComponent.progress - 1);
  };

  return (
    <>
      <ProgressBar index={stage} progress={stageComponent.progress} />
      <stageComponent.component next={next} stagesData={stagesData} />
    </>
  );
};

export default Form;
