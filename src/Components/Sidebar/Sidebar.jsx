import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';


const Sidebar = () => {

    const [extended, setextended] = useState(false);
    const { onSent, prevprompts, setrecentpropmt ,newchat} = useContext(Context);

    const loadprompt = async (prompt) => {
        setrecentpropmt(prompt);
        await onSent(prompt);

    }

    

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setextended((prev) => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={()=>newchat()} className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended &&
                    <div className="recent">
                        <p className="recenttitle">Recent</p>

                        {prevprompts.map((item, index) => {
                            return (
                                <div onClick={() => loadprompt(item)} className="recententry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>

                            )

                        })}


                    </div>}
            </div>

            <div className="bottom">
                <div className="bottomitem recententry">
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottomitem recententry">
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottomitem recententry">
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Setting</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
