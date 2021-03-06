import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Route } from 'react-router-dom';

import '@ionic/react/css/normalize.css';

import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import HomePage from './components/HomePage';
import Menu from './components/menu/Menu';
import CustomResourcesListPage from './components/resources/cluster/customResourceDefinitions/CustomResourcesListPage';
import DetailsPage from './components/resources/DetailsPage';
import ListPage from './components/resources/ListPage';
import ClustersAWSPage from './components/settings/clusters/aws/AWSPage';
import ClustersAzurePage from './components/settings/clusters/azure/AzurePage';
import ClustersGooglePage from './components/settings/clusters/google/GooglePage';
import ClustersKubeconfigPage from './components/settings/clusters/kubeconfig/KubeconfigPage';
import ClustersManualPage from './components/settings/clusters/manual/ManualPage';
import ClustersPage from './components/settings/ClustersPage';
import GeneralPage from './components/settings/GeneralPage';
import InfoPage from './components/settings/InfoPage';
import { AppContextProvider } from './utils/context';
import { resources } from './utils/resources';

import './theme/custom.css';
import './theme/variables.css';

const App: React.FunctionComponent = () => (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu sections={resources} />
          <IonRouterOutlet id="main">
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/resources/:section/:type" component={ListPage} exact={true} />
            <Route path="/resources/:section/:type/:namespace/:name" component={DetailsPage} exact={true} />
            <Route path="/customresources/:group/:version/:name" component={CustomResourcesListPage} exact={true} />
            <Route path="/settings/clusters" component={ClustersPage} exact={true} />
            <Route path="/settings/clusters/aws/:region" component={ClustersAWSPage} exact={true} />
            <Route path="/settings/clusters/azure" component={ClustersAzurePage} exact={true} />
            <Route path="/settings/clusters/google" component={ClustersGooglePage} exact={true} />
            <Route path="/settings/clusters/kubeconfig" component={ClustersKubeconfigPage} exact={true} />
            <Route path="/settings/clusters/manual" component={ClustersManualPage} exact={true} />
            <Route path="/settings/general" component={GeneralPage} exact={true} />
            <Route path="/settings/info" component={InfoPage} exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);

export default App;
