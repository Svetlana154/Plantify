import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function PromptTooltip({text}) {
  
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip
          style={{marginLeft: "10px"}}>
          {text}
        </Tooltip> 
      }
    >
      <sup>?</sup>
    </OverlayTrigger>
  );
}

export default PromptTooltip;