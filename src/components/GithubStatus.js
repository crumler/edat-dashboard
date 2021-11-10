import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const GithubStatus = (props) => {
  return (
    <div className='currentGithubStatus'>
      <a href='https://www.githubstatus.com' target='_blank' rel='noreferrer'><h3>GitHub:</h3></a>
      <div className='status'>Git Operations: {props.gitOperationsStatus === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>} </div>

      <div className='status'>API Requests: {props.githubApiRequests === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>

      <div className='status'>Webhooks: {props.githubWebhooks === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>

      <div className='status'>Issues: {props.githubIssues === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>

      <div className='status'>Pull Requests: {props.githubPullRequests === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>

      <div className='status'>GitHub Actions: {props.githubActions === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>

      <div className='status'>GitHub Packages: {props.githubPackages === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>

      <div className='status'>GitHub Pages: {props.githubPages === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>
      
      <div className='status'>Codespaces: {props.githubCodespaces === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <a href='https://www.githubstatus.com/'><WarningIcon color='error' fontSize='large' /></a>}</div>
    </div>
  )
};

export default GithubStatus;