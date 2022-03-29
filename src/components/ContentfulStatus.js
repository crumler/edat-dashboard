import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const ContentfulStatus = (props) => {
  return (
    <div className='contentful-status'>
      <h3><a href='https://www.contentfulstatus.com/' target='_blank' rel='noreferrer'>Contentful:</a></h3>
      {/* <div className='product-container'> */}
        <div className='contentful-container'>
          <div className='status'><span>Content Management: </span>{props.contentfulContentManagementApi === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Content Delivery: </span>{props.contentfulContentDeliveryApi === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>GraphQL Content: </span>{props.contentfulGraphQLContentApi === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Web App: </span>{props.contentfulWebApp === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Website: </span>{props.contentfulWebsite === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Assets CDN: </span>{props.contentfulAssetsCDN === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
        </div>

        <div className='contentful-container'>
          <div className='status'><span>Authentication Service: </span>{props.contentfulAuthenticationService === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Webhooks: </span>{props.contentfulWebhooks === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Scheduled Publishing: </span>{props.contentfulScheduledPublishing === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Launch: </span>{props.contentfulLaunch === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
          <div className='status'><span>Compose: </span>{props.contentfulCompose === 'operational' ? <CheckCircleIcon className='mui-icon' color='success' fontSize='large' /> : <WarningIcon className='mui-icon' color='error' fontSize='large' />}</div>
        </div>
      {/* </div> */}
    </div>
  )
};

export default ContentfulStatus;