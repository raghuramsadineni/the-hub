import React, { useEffect } from 'react';
import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';
import './Home.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import { App } from '@capacitor/app';

const Home: React.FC<RouteComponentProps> = (props) => {

    const { isAuthenticated, user, loginWithRedirect, handleRedirectCallback, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        App.addListener('appUrlOpen', (data: any) => {
            handleRedirectCallback(data.url).then((res: any) => {
                props.history.replace('/dashboard');
            });
        });
    }, []);

    if (isAuthenticated) {
        props.history.replace('/dashboard');
    }

    return (
        <IonPage>
            <IonContent>
                <div className="appContainer">
                    <IonText>
                        <h1>Welcome to The Hub!</h1>
                    </IonText>
                    <IonButton onClick={() => loginWithRedirect()}>Sign In</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

const HomeRouter = withRouter(Home);

export default HomeRouter;