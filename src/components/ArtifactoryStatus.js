import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const ArtifactoryStatus = (props) => {

  return (
    <div className='currentArtifactoryStatus'>
      <a href='https://status.jfrog.io/' target='_blank' rel='noreferrer'><h3>Artifactory:</h3></a>
      <div className='status'>US-East1: {props.artifactoryEast1 === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : props.artifactoryEast1 === 'blue' ? <CheckCircleIcon color='primary' fontSize='large' /> : <a href='https://status.heroku.com/'><WarningIcon color='error' fontSize='large' /></a>} </div>
    </div>
  )
};

export default ArtifactoryStatus;