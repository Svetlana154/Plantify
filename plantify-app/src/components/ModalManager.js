import { useState, useEffect } from 'react';

import RecoveryPasswordModal from "./RecoveryPasswordModal";
import SignInModal from "./SignInModal";

function ModalManager({modalData}) {
    //0: show none, 1: show signIn, 2: show recovery
    const [modalState, setModalState] = useState(0);

    useEffect(() => {
        setModalState(modalData.modalState);
    }, [modalData]);

    var signInState = (modalState === 1)? true : false;
    var recoveryPasswordState = (modalState === 2)? true : false;

    // Extract modal states
    const callbackCloseModal = () => {
        setModalState(0);
    }

    const callbackSwitchToRecoveryModal = () => {
        setModalState(2);
    }

    const callbackSwitchToSignInModal = () => {
        setModalState(1);
    }


    return (
        <>
            <SignInModal promptState={signInState} promptCloseCallback={callbackCloseModal} promptSwitchToRecoveryModalCallback={callbackSwitchToRecoveryModal}/>
            <RecoveryPasswordModal promptState={recoveryPasswordState} promptCloseCallback={callbackCloseModal} promptSwitchToSignInModalCallback={callbackSwitchToSignInModal}/>
        </>
    );
}

export default ModalManager;