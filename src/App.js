import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './components/Header';
import HerokuStatus from './components/HerokuStatus';
import GithubStatus from './components/GithubStatus';
import ContentfulStatus from './components/ContentfulStatus';

function App() {
  const herokuURL = "https://status.heroku.com/api/v4/current-status";
  const githubURL = "https://www.githubstatus.com/api/v2/summary.json";
  const contentfulURL = "https://www.contentfulstatus.com/";

  //Heroku Status Categories
  const [herokuAppsStatus, setHerokuAppsStatus] = useState("");
  const [herokuDataStatus, setHerokuDataStatus] = useState("");
  const [herokuToolsStatus, setHerokuToolsStatus] = useState("");

  //GitHub Status Categories
  const [githubGitOperations, setGithubGitOperations] = useState("");
  const [githubApiRequests, setGithubApiRequests] = useState("");
  const [githubWebhooks, setGithubWebhooks] = useState("");
  const [githubIssues, setGithubIssues] = useState("");
  const [githubPullRequests, setGithubPullRequests] = useState("");
  const [githubActions, setGithubActions] = useState("");
  const [githubPackages, setGithubPackages] = useState("");
  const [githubPages, setGithubPages] = useState("");
  const [githubCodespaces, setGithubCodespaces] = useState("");

  //Contentful Status Categories
  const [contentfulContentManagementApi, setContentfulContentManagementApi] = useState("");
  const [contentfulContentDeliveryApi, setContentfulContentDeliveryApi] = useState("");
  const [contentfulGraphQLContentApi, setContentfulGraphQLContentApi] = useState("");
  const [contentfulWebApp, setContentfulWebApp] = useState("");
  const [contentfulWebsite, setContentfulWebsite] = useState("");
  const [contentfulAssetsCDN, setContentfulAssetsCDN] = useState("");
  const [contentfulAuthenticationService, setContentfulAuthenticationService] = useState("");
  const [contentfulWebhooks, setContentfulWebhooks] = useState("");
  const [contentfulScheduledPublishing, setContentfulScheduledPublishing] = useState("");
  const [contentfulLaunch, setContentfulLaunch] = useState("");
  const [contentfulCompose, setContentfulCompose] = useState("");

  //Heroku Fetch Request
  useEffect(() => {
    Axios.get(herokuURL).then((response) => {
      // console.log(response.data);
      setHerokuAppsStatus(response.data.status[0].status);
      setHerokuDataStatus(response.data.status[1].status);
      setHerokuToolsStatus(response.data.status[2].status);
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
  
  return (
    <div>
      <Header />
      <div className="flexContainer">
        <HerokuStatus appsStatus={herokuAppsStatus} dataStatus={herokuDataStatus} toolsStatus={herokuToolsStatus} />
        <GithubStatus gitOperationsStatus={githubGitOperations}
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
      </div>
    </div> 
  );
};

export default App;