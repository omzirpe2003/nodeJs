

function Cars ({cars}){
    if (cars.length === 0) {
        return <p>No cars found or data is loading...</p>;
    }
    return (   
        <div>
            
            {cars.map((data)=>(
                <div key={data.id}>
                    <h3>{data.name}</h3>
                    <h4>{data.model}</h4>
                </div>
            ))}
        </div>
    )
}

export default Cars;
