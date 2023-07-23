import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function IconTooltip({item, text, placement}) {
  
  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip>
          {text}
        </Tooltip> 
      }
    >
      {item}
    </OverlayTrigger>
  );
}

export default IconTooltip;