import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
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
  const artifactoryURL = "https://status.jfrog.io/";
  const slackURL = "https://status.slack.com/api/v2.0.0/current";

  //Heroku Status Categories
  const [herokuAppsStatus, setHerokuAppsStatus] = useState('');
  const [herokuDataStatus, setHerokuDataStatus] = useState('');
  const [herokuToolsStatus, setHerokuToolsStatus] = useState('');

  //GitHub Status Categories
  const [githubGitOperations, setGithubGitOperations] = useState('');
  const [githubApiRequests, setGithubApiRequests] = useState('');
  const [githubWebhooks, setGithubWebhooks] = useState('');
  const [githubIssues, setGithubIssues] = useState('');
  const [githubPullRequests, setGithubPullRequests] = useState('');
  const [githubActions, setGithubActions] = useState('');
  const [githubPackages, setGithubPackages] = useState('');
  const [githubPages, setGithubPages] = useState('');
  const [githubCodespaces, setGithubCodespaces] = useState('');

  //Contentful Status Categories
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

  //Salesforce Status Instances
  const [salesforceGSO1, setSalesforceGSO1] = useState('');
  const [salesforceGSO3, setSalesforceGSO3] = useState('');
  const [salesforceGSO4, setSalesforceGSO4] = useState('');
  const [salesforceGCC, setSalesforceGCC] = useState('');

  //Artifactory Status (US-East1)
  const [artifactoryEast1, setArtifactoryEast1] = useState("");

  //Heroku Fetch Request
  useEffect(() => {
    Axios.get(herokuURL).then((response) => {
      // console.log(response.data);
      setHerokuAppsStatus(response.data.status[0].status);
      setHerokuDataStatus(response.data.status[1].status);
      setHerokuToolsStatus(response.data.status[2].status);
    });
  });

  //Salesforce Instances Fetch Requests (GSO1, GSO3, GSO4, GCC)
  useEffect(() => {
    Axios.get(salesforceGSO1URL).then((response) => {
      // console.log(response.data.status);
      setSalesforceGSO1(response.data.status);
    });
  });

  useEffect(() => {
    Axios.get(salesforceGSO3URL).then((response) => {
      // console.log(response.data.status);
      setSalesforceGSO3(response.data.status);
    });
  });

  useEffect(() => {
    Axios.get(salesforceGSO4URL).then((response) => {
      // console.log(response.data.status);
      setSalesforceGSO4(response.data.status);
    });
  });

  useEffect(() => {
    Axios.get(salesforceGCCURL).then((response) => {
      // console.log(response.data.status);
      setSalesforceGCC(response.data.status);
    });
  });

  //GitHub Fetch Request
  useEffect(() => {
    Axios.get(githubURL).then((response) => {
      // console.log(response.data);
      // console.log(response.data.components[0].status);
      setGithubGitOperations(response.data.components[0].status);
      setGithubApiRequests(response.data.components[1].status);
      setGithubWebhooks(response.data.components[2].status);
      setGithubIssues(response.data.components[4].status);
      setGithubPullRequests(response.data.components[5].status);
      setGithubActions(response.data.components[6].status);
      setGithubPackages(response.data.components[7].status);
      setGithubPages(response.data.components[8].status);
      setGithubCodespaces(response.data.components[9].status);
    });
  });

  //Contentful Fetch Request
  useEffect(() => {
    Axios.get(contentfulURL, {
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      // console.log(response.data.components);
      setContentfulContentManagementApi(response.data.components[0].status);
      setContentfulContentDeliveryApi(response.data.components[1].status);
      setContentfulGraphQLContentApi(response.data.components[2].status);
      setContentfulWebApp(response.data.components[3].status);
      setContentfulWebsite(response.data.components[4].status);
      setContentfulAssetsCDN(response.data.components[5].status);
      setContentfulAuthenticationService(response.data.components[6].status);
      setContentfulWebhooks(response.data.components[7].status);
      setContentfulScheduledPublishing(response.data.components[8].status);
      setContentfulLaunch(response.data.components[9].status);
      setContentfulCompose(response.data.components[10].status);
    });
  });

  //Artifactory Fetch Request
  useEffect(() => {
    Axios.get(artifactoryURL, {
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      // console.log(response.data);
      setArtifactoryEast1(response.data.components[0].status);
    });
  });

  //Slack Status Fetch
  useEffect(() => {
    Axios.get(slackURL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data);
    });
  });
  
  return (
    <div>
      <Header />
      <div className='flexContainer'>
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
          githubCodespaces={githubCodespaces}
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