import '../App.css';

function MyMessage(props){
  return (
    <div className="Message-text">
     <h3>New message here for {props.name}!</h3>
     <button className="Message-btn">just try the button!</button> 
     </div>
   
  );
}
//кнопка просто баловство, чтобы посмотреть, как работают другие элементы

export default MyMessage;