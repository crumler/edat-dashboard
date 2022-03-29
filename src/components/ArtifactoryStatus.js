import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const ArtifactoryStatus = (props) => {

  return (
    <div className='artifactory-status'>
      <h3><a href='https://status.jfrog.io/' target='_blank' rel='noreferrer'>Artifactory:</a></h3>
      <div className='product-container'>
        <div className='status'><span>US-East1: </span>{props.artifactoryEast1 === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.artifactoryEast1 === 'blue' ? <CheckCircleIcon className='mui-icon' color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>} </div>
      </div>
    </div>
  )
};

export default ArtifactoryStatus;