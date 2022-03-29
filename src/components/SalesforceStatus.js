import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const SalesforceStatus = (props) => {

  const statusIconGSO1 = () => {
    switch (props.salesforceGSO1) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon className='mui-icon' color='success' fontSize='large' />
    }
  };

  const statusIconGSO3 = () => {
    switch (props.salesforceGSO3) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon className='mui-icon' color='success' fontSize='large' />
    }
  };

  const statusIconGSO4 = () => {
    switch (props.salesforceGSO4) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon className='mui-icon' color='success' fontSize='large' />
    }
  };

  const statusIconGCC = () => {
    switch (props.salesforceGCC) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon className='mui-icon' color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon className='mui-icon' color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon className='mui-icon' color='success' fontSize='large' />
    }
  };

  return (
    <div className='salesforce-status'>
      <h3><a href='https://status.salesforce.com/' target='_blank' rel='noreferrer'>Salesforce:</a></h3>
      <div className='product-container'>
        <div className='status'><a href='https://status.salesforce.com/instances/EU35' target='_blank' rel='noreferrer'><span>GSO1: </span>{statusIconGSO1()}</a></div>
        <div className='status'><a href='https://status.salesforce.com/instances/NA132' target='_blank' rel='noreferrer'><span>GSO3: </span>{statusIconGSO3()}</a></div>
        <div className='status'><a href='https://status.salesforce.com/instances/NA110' target='_blank' rel='noreferrer'><span>GSO4: </span>{statusIconGSO4()}</a></div>
        <div className='status'><a href='https://status.salesforce.com/instances/NA161' target='_blank' rel='noreferrer'><span>GCC: </span>{statusIconGCC()}</a></div>
      </div>
    </div>
  )
};

export default SalesforceStatus;