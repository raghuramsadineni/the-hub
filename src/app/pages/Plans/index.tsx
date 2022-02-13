import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import "./Plans.scss";

const Plans: React.FC<{onDismiss: () => void;}> = ({onDismiss}) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Plans</IonTitle>
                    <IonButtons slot="end">
                        <IonButton >Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonImg src="https://media.milanote.com/p/images/1NjiMI1ggcsgcx/wpO/thehubpricing.png" className="plansImage" />
            </IonContent>
        </IonPage>
    )
}

export default Plans;