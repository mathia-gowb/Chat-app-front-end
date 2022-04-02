import '../front-end.css';
import {Link} from "react-router-dom"
export function WelcomeScreen(){
   
   return (
   <div id="app">
        <div className="action-screen">
        <div className="action-screen-items">
            <h1>Who are you?</h1>
            <br/>
            <br/>
            <div className="action-buttons-wrapper">
                <Link to="/public">
                    <button >Website Visitor</button>
                </Link>
                <Link to="/admin">
                    <button >Website Admin</button>
                </Link>
                
            </div>
        </div>

        </div>
    </div>
    )
}