import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const ContentfulStatus = (props) => {
  return (
    <div className='currentContentfulStatus'>
      <a href='https://www.contentfulstatus.com/' target='_blank' rel='noreferrer'><h3>Contentful:</h3></a>
      <div className='status'>Content Management API: {props.contentfulContentManagementApi === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Content Delivery API: {props.contentfulContentDeliveryApi === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>GraphQL Content API: {props.contentfulGraphQLContentApi === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Web App: {props.contentfulWebApp === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Website: {props.contentfulWebsite === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Assets CDN: {props.contentfulAssetsCDN === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Authentication Service: {props.contentfulAuthenticationService === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Webhooks: {props.contentfulWebhooks === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Scheduled Publishing: {props.contentfulScheduledPublishing === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Launch: {props.contentfulLaunch === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
      <div className='status'>Compose: {props.contentfulCompose === 'operational' ? <CheckCircleIcon color='success' fontSize='large' /> : <WarningIcon color='error' fontSize='large' />}</div>
    </div>
  )
};

export default ContentfulStatus;