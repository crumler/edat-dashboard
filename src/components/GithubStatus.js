import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const GithubStatus = (props) => {

  return (
    <div className='github-status'>
      <h3><a href='https://www.githubstatus.com' target='_blank' rel='noreferrer'>GitHub:</a></h3>
      <div className='product-container'>
        <div className='status'><span>Git Operations: </span>{props.gitOperationsStatus === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.gitOperationsStatus === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>} </div>

        <div className='status'><span>API Requests: </span>{props.githubApiRequests === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubApiRequests === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>

        <div className='status'><span>Webhooks: </span>{props.githubWebhooks === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubWebhooks === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>

        <div className='status'><span>Issues: </span>{props.githubIssues === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubIssues === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>

        <div className='status'><span>Pull Requests: </span>{props.githubPullRequests === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubPullRequests === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>

        <div className='status'><span>Actions: </span>{props.githubActions === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubActions === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>

        <div className='status'><span>Packages: </span>{props.githubPackages === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubPackages === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>

        <div className='status'><span>Pages: </span>{props.githubPages === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : props.githubPages === 'under_maintenance' ? <CheckCircleIcon className='mui-icon' color='primary' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon className='mui-icon' color='error' fontSize='large' /></a>}</div>
      </div>
    </div>
  )
};

export default GithubStatus;