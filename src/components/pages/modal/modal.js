import React from 'react';
import {IoCloseSharp} from "react-icons/io5";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";
import {PiTelegramLogoLight} from "react-icons/pi";
import {RxTwitterLogo} from "react-icons/rx";
import {FaWhatsapp} from "react-icons/fa";
import {BiAt, BiSolidShareAlt} from "react-icons/bi";

const Modal = ({modal}) => {
    return (
        <div id="modal" >
            <div className="modal">
                <div className="modal--header">
                    <h1>Share with</h1>
                    <IoCloseSharp className="modal--header__icon" onClick={modal}/>
                </div>
                <div className="modal--bottom">
                    <div className="modal--bottom__icons">
                        <HiOutlineChatBubbleOvalLeft className="modal--bottom__icons--icon" />
                        <h6>Chat</h6>
                    </div>
                    <div className="modal--bottom__icons">
                        <PiTelegramLogoLight className="modal--bottom__icons--icon"/>
                        <h6>Telegram</h6>
                    </div>
                    <div className="modal--bottom__icons">
                        <RxTwitterLogo className="modal--bottom__icons--icon"/>
                        <h6>Twitter</h6>
                    </div>
                    <div className="modal--bottom__icons">
                        <FaWhatsapp className="modal--bottom__icons--icon"/>
                        <h6>WhatsApp</h6>
                    </div>
                    <div className="modal--bottom__icons">
                        <BiAt className="modal--bottom__icons--icon"/>
                        <h6>E-mail</h6>
                    </div>
                    <div className="modal--bottom__icons">
                        <BiSolidShareAlt className="modal--bottom__icons--icon"/>
                        <h6>More</h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;