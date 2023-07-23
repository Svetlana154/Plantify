import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import IconTooltip from './IconTooltip';


function PromptTooltip({text, placement}) {
  
  return (
    <IconTooltip item={
        <sup>?</sup>
      }
      text={text}
      placement={placement}
    />
  );
}

export default PromptTooltip;