
import * as react from 'react';
import './App.css';
import { useRandomUser } from './hook/getUserHook.jsx';

function App() {
    const [value, setValue] = react.useState<number>(0);
    const { user, getRandomUser } = useRandomUser();

    function handelIncepent() {
        if (value < 100) {
            setValue(value + 1);
        }
    }

    function handelDeciment() {
        if (value > 0) {
            setValue(value - 1);
        }
    }

    return (
        <div className="app-container">
            <div className="main-card">
                <h1>Hello from H!</h1>

                {/* Counter Section */}
                <div className="counter-section">
                    <h2>Counter</h2>

                    <p className="counter-value">{value}</p>

                    <div className="counter-buttons">
                        <button
                            className="increment-btn"
                            onClick={handelIncepent}
                            disabled={value >= 100}
                        >
                            Increment +
                        </button>

                        <button
                            className="decrement-btn"
                            onClick={handelDeciment}
                            disabled={value <= 0}
                        >
                            Decrement -
                        </button>
                    </div>
                </div>

                {/* Random User Section */}
                <div className="user-section">
                    <h2>Random User</h2>

                    <button
                        className="get-user-btn"
                        onClick={getRandomUser}
                    >
                        Get User
                    </button>

                    {user ? (
                        <div className="user-card">
                            <img
                                src={user.picture.large}
                                alt="User profile"
                                className="user-image"
                            />

                            <h3>
                                {user.name.first} {user.name.last}
                            </h3>

                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>
                                {user.location.city},{' '}
                                {user.location.country}
                            </p>
                        </div>
                    ) : (
                        <p className="no-user">
                            No User Found. Click Get User!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;