import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const Header = () => {

  let today = new Date();

  return (
    <header>
      <h1>EDAT Operations Status Page Dashboard</h1>
      <p>Last Updated: {today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' | ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()}</p>
      <h3><CheckCircleIcon color='success' fontSize='medium' /> = Fully Operational | <CheckCircleIcon color='primary' fontSize='medium' /> = Maintenance | <CheckCircleIcon color='secondary' /> = Limited Impact (Salesforce Only) | <WarningIcon color='error' fontSize='medium' /> = Outage</h3>
    </header>
  )
}

export default Header;