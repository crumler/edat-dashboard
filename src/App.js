import { useState, useEffect } from 'react';
import './App.css';
import './responsiveness.css';
import axios from 'axios';
import Header from './components/Header';
import HerokuStatus from './components/HerokuStatus';
import GithubStatus from './components/GithubStatus';
import ContentfulStatus from './components/ContentfulStatus';
import SalesforceStatus from './components/SalesforceStatus';
import ArtifactoryStatus from './components/ArtifactoryStatus';

function App() {
  const herokuURL = 'https://status.heroku.com/api/v4/current-status';
  const githubURL = 'https://www.githubstatus.com/api/v2/summary.json';
  const contentfulURL = 'https://www.contentfulstatus.com/';
  const salesforceGSO1URL = 'https://api.status.salesforce.com/v1/instances/EU35/status/';
  const salesforceGSO3URL = 'https://api.status.salesforce.com/v1/instances/NA132/status/';
  const salesforceGSO4URL = 'https://api.status.salesforce.com/v1/instances/NA110/status/';
  const salesforceGCCURL = 'https://api.status.salesforce.com/v1/instances/NA161/status/';
  const artifactoryURL = 'https://status.jfrog.io/';
  const slackURL = 'https://status.slack.com/api/v2.0.0/current';
  // const slackParams = new URLSearchParams();
  // slackParams.append('Content-type', 'application/x-www-form-urlencoded');
  // slackParams.append('Authorization', 'Bearer ');


  // Heroku Status Categories
  const [herokuAppsStatus, setHerokuAppsStatus] = useState('');
  const [herokuDataStatus, setHerokuDataStatus] = useState('');
  const [herokuToolsStatus, setHerokuToolsStatus] = useState('');

  // GitHub Status Categories
  const [githubGitOperations, setGithubGitOperations] = useState('');
  const [githubApiRequests, setGithubApiRequests] = useState('');
  const [githubWebhooks, setGithubWebhooks] = useState('');
  const [githubIssues, setGithubIssues] = useState('');
  const [githubPullRequests, setGithubPullRequests] = useState('');
  const [githubActions, setGithubActions] = useState('');
  const [githubPackages, setGithubPackages] = useState('');
  const [githubPages, setGithubPages] = useState('');

  // Contentful Status Categories
  const [contentfulContentManagementApi, setContentfulContentManagementApi] = useState('');
  const [contentfulContentDeliveryApi, setContentfulContentDeliveryApi] = useState('');
  const [contentfulGraphQLContentApi, setContentfulGraphQLContentApi] = useState('');
  const [contentfulWebApp, setContentfulWebApp] = useState('');
  const [contentfulWebsite, setContentfulWebsite] = useState('');
  const [contentfulAssetsCDN, setContentfulAssetsCDN] = useState('');
  const [contentfulAuthenticationService, setContentfulAuthenticationService] = useState('');
  const [contentfulWebhooks, setContentfulWebhooks] = useState('');
  const [contentfulScheduledPublishing, setContentfulScheduledPublishing] = useState('');
  const [contentfulLaunch, setContentfulLaunch] = useState('');
  const [contentfulCompose, setContentfulCompose] = useState('');

  // Salesforce Status Instances
  const [salesforceGSO1, setSalesforceGSO1] = useState('');
  const [salesforceGSO3, setSalesforceGSO3] = useState('');
  const [salesforceGSO4, setSalesforceGSO4] = useState('');
  const [salesforceGCC, setSalesforceGCC] = useState('');

  // Artifactory Status (US-East1)
  const [artifactoryEast1, setArtifactoryEast1] = useState('');

  // Slack Status

  // Multiple Axios Requests
  const herokuRequest = axios.get(herokuURL);
  const githubRequest = axios.get(githubURL);
  const contentfulRequest = axios.get(contentfulURL, { headers: { Accept: 'application/json' } });
  const salesforceGSO1Request = axios.get(salesforceGSO1URL);
  const salesforceGSO3Request = axios.get(salesforceGSO3URL);
  const salesforceGSO4Request = axios.get(salesforceGSO4URL);
  const salesforceGCCRequest = axios.get(salesforceGCCURL);
  const artifactoryRequest = axios.get(artifactoryURL, { headers: { Accept: 'application/json' } });
  // const slackRequest = axios.get(slackURL, slackParams);
  const slackRequest = axios.get(slackURL, { headers: { 'Content-type': 'application/x-www-form-urlencoded' }});
  // const slackRequest = axios.get(slackURL, { headers: { 'Content-type': 'application/x-www-form-urlencoded', Authorization: 'Bearer ' } });

  const fetchAll = () =>  {
    axios.all([herokuRequest, githubRequest, contentfulRequest, salesforceGSO1Request, salesforceGSO3Request, salesforceGSO4Request, salesforceGCCRequest, artifactoryRequest])
    .then(axios.spread((...response) => {

    // Setting Heroku Statuses
    setHerokuAppsStatus(response[0].data.status[0].status);
    setHerokuDataStatus(response[0].data.status[1].status);
    setHerokuToolsStatus(response[0].data.status[2].status);

    // Setting GitHub Statuses
    setGithubGitOperations(response[1].data.components[0].status);
    setGithubApiRequests(response[1].data.components[1].status);
    setGithubWebhooks(response[1].data.components[2].status);
    setGithubIssues(response[1].data.components[4].status);
    setGithubPullRequests(response[1].data.components[5].status);
    setGithubActions(response[1].data.components[6].status);
    setGithubPackages(response[1].data.components[7].status);
    setGithubPages(response[1].data.components[8].status);
    console.log(response[1].data.components[6].status);

    // Setting Contentful Statuses
    setContentfulContentManagementApi(response[2].data.components[0].status);
    setContentfulContentDeliveryApi(response[2].data.components[1].status);
    setContentfulGraphQLContentApi(response[2].data.components[2].status);
    setContentfulWebApp(response[2].data.components[3].status);
    setContentfulWebsite(response[2].data.components[4].status);
    setContentfulAssetsCDN(response[2].data.components[5].status);
    setContentfulAuthenticationService(response[2].data.components[6].status);
    setContentfulWebhooks(response[2].data.components[7].status);
    setContentfulScheduledPublishing(response[2].data.components[8].status);
    setContentfulLaunch(response[2].data.components[9].status);
    setContentfulCompose(response[2].data.components[10].status);

    // Setting Salesforce Statuses
    setSalesforceGSO1(response[3].data.status);
    setSalesforceGSO3(response[4].data.status);
    setSalesforceGSO4(response[5].data.status);
    setSalesforceGCC(response[6].data.status);

    // Setting Artifactory Status
    setArtifactoryEast1(response[7].data.components[0].status);

    // Setting Slack Status
    console.log(response[8]);
  }))};

  useEffect(() => {
    fetchAll()
      setTimeout(() => {
        fetchAll();
        // console.log("Phase 2!!!");
      }, 10000)
  });
  
// useEffect(() => {
//   fetchAll();
//   console.log("Phase #1!");
// )
  // .then(setInterval(() => {
  //   fetchAll();
  //   console.log("Phase #2!!!");
  //   }, 30000));


  
  return (
    <div>
      <Header />

      <div className='grid-container'>
        <HerokuStatus
            appsStatus={herokuAppsStatus}
            dataStatus={herokuDataStatus}
            toolsStatus={herokuToolsStatus}
          />
        <GithubStatus
          gitOperationsStatus={githubGitOperations}
          githubApiRequests={githubApiRequests}
          githubWebhooks={githubWebhooks}
          githubIssues={githubIssues}
          githubPullRequests={githubPullRequests}
          githubActions={githubActions}
          githubPackages={githubPackages}
          githubPages={githubPages}
        />
        <ContentfulStatus contentfulContentManagementApi={contentfulContentManagementApi}
          contentfulContentDeliveryApi={contentfulContentDeliveryApi}
          contentfulGraphQLContentApi={contentfulGraphQLContentApi}
          contentfulWebApp={contentfulWebApp}
          contentfulWebsite={contentfulWebsite}
          contentfulAssetsCDN={contentfulAssetsCDN}
          contentfulAuthenticationService={contentfulAuthenticationService}
          contentfulWebhooks={contentfulWebhooks}
          contentfulScheduledPublishing={contentfulScheduledPublishing}
          contentfulLaunch={contentfulLaunch}
          contentfulCompose={contentfulCompose}
        />
        <SalesforceStatus
          salesforceGSO1={salesforceGSO1}
          salesforceGSO3={salesforceGSO3}
          salesforceGSO4={salesforceGSO4}
          salesforceGCC={salesforceGCC}
        />
        <ArtifactoryStatus artifactoryEast1={artifactoryEast1} />
      </div>
    </div> 
  );
};

export default App;