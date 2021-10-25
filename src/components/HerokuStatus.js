import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
const HerokuStatus = (props) => {
  return (
    <div className="currentHerokuStatus">
      <a href="https://status.heroku.com/" target="_blank" rel="noreferrer"><h3>Heroku:</h3></a>
      <div className="status">Apps: {props.appsStatus === 'green' ? <CheckCircleIcon color="success" fontSize="large" /> : props.appsStatus === 'blue' ? <CheckCircleIcon color="primary" fontSize="large" /> : <a href="https://status.heroku.com/"><WarningIcon color="error" fontSize="large" /></a>} </div>

      <div className="status">Data: {props.dataStatus === 'green' ? <CheckCircleIcon color="success" fontSize="large" /> : props.appsStatus === 'blue' ? <CheckCircleIcon color="primary" fontSize="large" /> : <a href="https://status.heroku.com/"><WarningIcon color="error" fontSize="large" /></a>}</div>
      
      <div className="status">Tools: {props.toolsStatus === 'green' ? <CheckCircleIcon color="success" fontSize="large" /> : props.appsStatus === 'blue' ? <CheckCircleIcon color="primary" fontSize="large" /> : <a href="https://status.heroku.com/"><WarningIcon color="error" fontSize="large" /></a>}</div>
    </div>
  )
};

export default HerokuStatus;