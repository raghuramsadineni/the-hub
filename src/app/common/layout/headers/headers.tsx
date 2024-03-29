import { IonButton, IonButtons, IonIcon, IonImg, IonText, IonToolbar } from "@ionic/react"
import { useAuth0 } from "@auth0/auth0-react";
import { RouteComponentProps, withRouter } from "react-router";
import { logOut, logOutSharp } from "ionicons/icons";
import "./Header.scss";

const Header: React.FC<RouteComponentProps> = (props) => {

    const { logout, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        props.history.replace("/home");
    }

    return (
        <IonToolbar className="appBarBackground">
            <IonButtons>
                <IonButton onClick={() => props.history.push("/dashboard")}>THE HUB</IonButton>
                <IonButton onClick={() => props.history.push("/slides")}>Slides</IonButton>
            </IonButtons>
            <IonButtons slot="end">
                <IonButton className="logoutTextButton" onClick={() => logout({ returnTo: window.location.origin })}>Logout</IonButton>
                <IonButton className="logoutIconButton" onClick={() => logout({ returnTo: window.location.origin })}>
                    <IonIcon ios={logOut} md={logOutSharp} size="large" />
                </IonButton>
            </IonButtons>
        </IonToolbar>
    )
}

export default withRouter(Header);