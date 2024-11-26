import SignUp from '@/components/modal/sign-up';
import SignIn from '@/components/modal/sign-in';
import { dispatch, useSelector } from '@/context';

import { Div, Icon, Overlay } from '@/styles';

const modals = {
    'sign-in': SignIn,
    'sign-up': SignUp
};

const Modal = () => {
    const { layout } = useSelector((state) => state);

    if (!layout) return null;

    const Component = modals[layout];

    return (
        <Overlay onClick={() => dispatch({ layout: null })}>
            <Div
                onClick={(e) => e.stopPropagation()}
                width="300px"
                bg="#fff"
                padding="20px 10px"
            >
                <Div
                    cursor="pointer"
                    position="absolute"
                    top="10px"
                    right="10px"
                    zIndex={2}
                    onClick={() => dispatch({ layout: null })}
                >
                    <Icon name="close" />
                </Div>
                <Component />
            </Div>
        </Overlay>
    );
};

export default Modal;
