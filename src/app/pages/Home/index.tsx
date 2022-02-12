import React, { useEffect } from 'react';
import { IonButton, IonContent, IonImg, IonPage, IonText } from '@ionic/react';
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
                    <IonImg src='https://media.milanote.com/p/images/1NiWVo1gg8XEe4/hhS/thlogo5.png' className='homeLogo'></IonImg>
                    <div className="signInContainer">
                        <IonText><h3>Welcome to The HUB!!</h3></IonText>
                        <IonButton onClick={() => loginWithRedirect()}>Sign In</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

const HomeRouter = withRouter(Home);

export default HomeRouter;