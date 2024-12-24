import './Style.css';

export default function ProfileFrame(props) {
  return (
    <div class="card bg-blue-600 aspect-square">
      <img src={props.image} width={10} alt="" 
        class=''/>
      <div class='absolute z-30 bottom-0' >Hello</div>
      <div class="content">
        <p class="title">{props.name}<br/>  <span>{props.subject}</span></p>
      </div>
    </div>
  );
}

