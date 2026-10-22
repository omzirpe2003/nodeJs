
function Cars({ cars }) {
  if (cars.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Cars Found</h2>
        <p>Your car list is empty or still loading.</p>
      </div>
    );
  }

  return (
    <div className="cars-container">
      {cars.map((data) => (
        <div className="car-card" key={data.id}>
          <div className="car-icon">🚗</div>

          <div className="car-details">
            <h3>{data.name}</h3>
            <p>Model: {data.model}</p>
            <span className="car-id">Car ID: {data.id}</span>
          </div>

          <div className="car-status">Available</div>
        </div>
      ))}
    </div>
  );
}

export default Cars;
