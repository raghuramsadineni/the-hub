import { IonContent, IonHeader, IonPage } from "@ionic/react"
import Header from "../../common/layout/headers/headers";
import ReactGoogleSlides from "react-google-slides";

const Slides: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent>
                <ReactGoogleSlides
                    width={window.innerWidth}
                    height={window.innerHeight - 100}
                    slidesLink="https://docs.google.com/presentation/d/1q0HzP-pcYHd-sZQHgPaa6LQ7Zz4FlNL929d7HLegHYo/edit#slide=id.g114ff18fef6_13_17"
                    position={1}
                    showControls
                    loop={false}
                />
            </IonContent>
        </IonPage>
    )
}

export default Slides;