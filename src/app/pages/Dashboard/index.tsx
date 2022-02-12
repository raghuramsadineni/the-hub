import { IonContent, IonHeader, IonPage, IonText } from "@ionic/react"
import Header from "../../common/layout/headers/headers";

const Dashboard: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent></IonContent>
        </IonPage>
    )
}

export default Dashboard;