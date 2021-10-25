import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const Header = () => {

  return (
    <header>
      <h1>EDAT Operations Status Page Dashboard</h1>
      <h3><CheckCircleIcon color="success" fontSize="medium" /> = Fully Operational | <CheckCircleIcon color="primary" fontSize="medium" /> = Maintenance | <WarningIcon color="error" fontSize="medium" /> = Outage</h3>
    </header>
  )
}

export default Header;