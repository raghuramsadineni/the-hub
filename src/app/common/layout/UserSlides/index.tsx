import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { IUserSlides } from "../../../utilities/interfaces/IUserSlides";
import { IonButton, IonCard, IonCardContent, IonIcon, IonInput, IonText } from "@ionic/react";
import "./UserSlides.scss";


const UserSlides: React.FC<IUserSlides> = (props) => {
    const swiper = useSwiper();

    return (
        <Swiper className="slideContainer">
            <SwiperSlide>
                <IonCard className="slideCardContainer">
                    <div className="slideQuestionContainer">
                        <IonText color="light"><h3>What is your name?</h3></IonText>
                        <IonInput color="light" 
                            value={props.userInfo?.name} 
                            className="slideInputContainer" 
                            />
                        <IonButton>Next</IonButton>
                    </div>
                </IonCard>
            </SwiperSlide>
            <SwiperSlide>
                <IonCard className="slideCardContainer">
                    <div>
                        <div className="slideQuestionContainer">
                            <IonText color="light"><h3>What type of  account will {props.userInfo?.name} be using?</h3></IonText>
                            <IonButton fill="outline" color='light'>Regular Account</IonButton>
                            <IonButton fill="outline" color='light'>Family Account</IonButton>
                        </div>
                    </div>
                </IonCard>
            </SwiperSlide>
            <SwiperSlide>
                <IonCard className="slideCardContainer">
                    <IonCardContent>
                        <IonText><h2>What is your name3?</h2></IonText>
                    </IonCardContent>
                </IonCard>
            </SwiperSlide>
        </Swiper>
    );
}

export default UserSlides;