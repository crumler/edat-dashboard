import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const SlackStatus = (props) => {

    return (
        <div className='slack-status'>
            <h3><a href='https://status.slack.com/' target='_blank' rel='noreferrer'>Slack:</a></h3>
            <div className='product-container'>
                <div className='status'><span>Login/SSO: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Messaging: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Posts/Files: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Calls: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Apps/Integrations/APIs: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Connections: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Link Previews: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Notifications: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Search: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
                <div className='status'><span>Workspace / Org Administration: </span>{props.appsStatus === 'green' ? <CheckCircleIcon className='mui-icon' color='success' /> : props.appsStatus === 'blue' ? <CheckCircleIcon color='primary' /> : <a href='https://status.heroku.com/'><WarningIcon className='mui-icon' color='error' /></a>}</div>
            </div>
        </div>
    )
};

export default SlackStatus;