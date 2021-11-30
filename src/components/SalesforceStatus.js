import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const SalesforceStatus = (props) => {

  const statusIconGSO1 = () => {
    switch (props.salesforceGSO1) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon color='success' fontSize='large' />
    }
  };

  const statusIconGSO3 = () => {
    switch (props.salesforceGSO3) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon color='success' fontSize='large' />
    }
  };

  const statusIconGSO4 = () => {
    switch (props.salesforceGSO4) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon color='success' fontSize='large' />
    }
  };

  const statusIconGCC = () => {
    switch (props.salesforceGCC) {
      case 'MAJOR_INCIDENT_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAINTENANCE_CORE':
        return <WarningIcon color='error' fontSize='large' />;
      case 'MAJOR_INCIDENT_NONCORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      case 'MINOR_INCIDENT_CORE':
        return <CheckCircleIcon color='secondary' fontSize='large' />;
      default:
        return <CheckCircleIcon color='success' fontSize='large' />
    }
  };

  return (
    <div className='currentSalesforceStatus'>
      <a href='https://status.salesforce.com/' target='_blank' rel='noreferrer'><h3>Salesforce:</h3></a>
      <div className='status'><a href='https://status.salesforce.com/instances/EU35' target='_blank' rel='noreferrer'>GSO1: {statusIconGSO1()}</a></div>
      <div className='status'><a href='https://status.salesforce.com/instances/NA132' target='_blank' rel='noreferrer'>GSO3: {statusIconGSO3()}</a></div>
      <div className='status'><a href='https://status.salesforce.com/instances/NA110' target='_blank' rel='noreferrer'>GSO4: {statusIconGSO4()}</a></div>
      <div className='status'><a href='https://status.salesforce.com/instances/NA161' target='_blank' rel='noreferrer'>GCC: {statusIconGCC()}</a></div>
    </div>
  )
};

export default SalesforceStatus;