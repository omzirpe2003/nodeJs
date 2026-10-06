
type Avtar={
    id: number,
    name: string,
    role: string,
    power: string,
    initials:string,
}

function AvtCard({avatar, level="Rookie"}:{avatar:Avtar; level?:string}){  // First {} → destructuring
  return (
      <article>
        <div>{avatar.initials}</div>
        <h3>{avatar.name}</h3>
        <p>Level: {level}</p>
      </article>
  );
}

export default AvtCard;