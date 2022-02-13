import React, { useEffect } from 'react';
import { IonButton, IonContent, IonImg, IonPage, IonText, useIonModal } from '@ionic/react';
import './Home.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import { App } from '@capacitor/app';
import Plans from '../Plans';

const Home: React.FC<RouteComponentProps> = (props) => {

    const { isAuthenticated, loginWithRedirect, handleRedirectCallback } = useAuth0();

    const handleDismiss = () => {
        dismiss();
    };

    const [present, dismiss] = useIonModal(Plans, {
        onDismiss: handleDismiss,
    });

    useEffect(() => {
        App.addListener('appUrlOpen', (data: any) => {
            handleRedirectCallback(data.url).then(() => {
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
                        <div>
                            <IonButton onClick={() => loginWithRedirect()}>Sign In</IonButton>
                            <IonButton onClick={() => { present({ cssClass: 'my-class', }); }}>Pricing</IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

const HomeRouter = withRouter(Home);

export default HomeRouter;