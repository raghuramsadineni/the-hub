import { IonContent, IonHeader, IonPage } from "@ionic/react"
import { useState } from "react";
import Header from "../../common/layout/headers/headers";
import UserSlides from "../../common/layout/UserSlides";
import { ISlideQuestions } from "../../utilities/interfaces/IUserSlides";

const Dashboard: React.FC = () => {

    const [userInfo,setUserInfo]=useState<ISlideQuestions>();

    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent>
                {!userInfo?
                    <UserSlides userInfo={userInfo} setUserInfo={(val:ISlideQuestions)=>setUserInfo(val)} />
                :
                    null
                }
            </IonContent>
        </IonPage>
    )
}

export default Dashboard;