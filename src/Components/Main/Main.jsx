import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentpropmt, showresult, loading, resultdata, input, setinput } = useContext(Context);



    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="maincontainer">

                {!showresult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="resulttitle">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentpropmt}</p>
                        </div>
                        <div className="resultdata">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>}

                        </div>
                    </div>

                }


                <div className="bottom">
                    <div className="search">
                        <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div className="imgdiv">
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input && <img onClick={() => onSent()} src={assets.send_icon} alt="" />}
                        </div>
                    </div>
                    <p className='bottominfo'>
                        Gemini may display  inaccurate info including our people so double cheque its response your privacy and Gemini apps.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
