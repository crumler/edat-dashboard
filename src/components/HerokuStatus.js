import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const HerokuStatus = (props) => {

  
  return (
    <div className='heroku-status'>
      <h3><a href='https://status.heroku.com/' target='_blank' rel='noreferrer'>Heroku:</a></h3>
      <div className='product-container'>
        <div className='status'><span>Apps: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>} </div>
        <div className='status'><span>Data: </span>{props.dataStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>
        <div className='status'><span>Tools: </span>{props.toolsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>
      </div>
    </div>
  )
};

export default HerokuStatus;